import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { buildShapes, cameraRig, makeRand } from "./shapes";
import { sceneState } from "./sceneState";

const vertexShader = /* glsl */ `
  attribute vec3 aB;
  attribute vec4 aRand;
  uniform float uMix;
  uniform float uTime;
  uniform vec3 uMouse;
  uniform float uHold;
  uniform float uBurstT;
  uniform vec3 uBurstPos;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uMotion;
  varying float vHeat;
  varying float vTone;
  varying float vDepth;

  void main() {
    // per-particle staggered morph so formations "pour" into each other
    float m = smoothstep(aRand.x * 0.55, aRand.x * 0.55 + 0.45, uMix);
    m = m * m * (3.0 - 2.0 * m);
    vec3 p = mix(position, aB, m);

    // idle drift
    float t = uTime * 0.35 * uMotion;
    p += vec3(
      sin(t + aRand.y * 40.0),
      cos(t * 1.1 + aRand.z * 40.0),
      sin(t * 0.9 + aRand.w * 40.0)
    ) * 0.08;

    // pointer: repel on hover, strong pull while held
    vec3 d = p - uMouse;
    float dist = length(d);
    float falloff = exp(-dist * dist * 0.9);
    vec3 dir = d / max(dist, 0.001);
    p += dir * falloff * 0.85 * (1.0 - uHold) * uMotion;
    p -= d * exp(-dist * dist * 0.35) * 0.75 * uHold * uMotion;

    // click burst: an expanding shockwave ring
    float bt = uTime - uBurstT;
    vHeat = 0.0;
    if (bt > 0.0 && bt < 2.5) {
      vec3 bd = p - uBurstPos;
      float bdist = length(bd);
      float ring = bt * 7.0;
      float amp = exp(-abs(bdist - ring) * 1.6) * exp(-bt * 1.3);
      p += (bd / max(bdist, 0.001)) * amp * 1.6 * uMotion;
      vHeat = amp;
    }
    vHeat = max(vHeat, falloff * 0.6 * (1.0 + uHold));

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float size = uSize * (0.6 + aRand.x * 0.9) * (1.0 + vHeat * 1.2);
    gl_PointSize = size * uPixelRatio * (8.0 / -mv.z);
    vTone = aRand.y;
    vDepth = clamp((-mv.z - 4.0) / 10.0, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uAlpha;
  varying float vHeat;
  varying float vTone;
  varying float vDepth;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, r);
    vec3 col = mix(uColorA, uColorB, smoothstep(0.35, 0.85, vTone));
    col = mix(col, vec3(1.0, 0.95, 0.8), clamp(vHeat * 1.4, 0.0, 1.0));
    float alpha = soft * uAlpha * (1.0 - vDepth * 0.55);
    gl_FragColor = vec4(col, alpha);
  }
`;

interface Props {
  count: number;
  reducedMotion: boolean;
}

const ORANGE = new THREE.Color("hsl(28, 100%, 58%)");
const VIOLET = new THREE.Color("hsl(285, 75%, 68%)");

export default function ParticleField({ count, reducedMotion }: Props) {
  const group = useRef<THREE.Group>(null);
  const { camera, viewport, invalidate, size } = useThree();

  const shapes = useMemo(() => buildShapes(count), [count]);

  const { geometry, material } = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const posA = new THREE.BufferAttribute(new Float32Array(shapes[0]), 3);
    const posB = new THREE.BufferAttribute(new Float32Array(shapes[0]), 3);
    const rand = makeRand(99);
    const rnd = new Float32Array(count * 4);
    for (let i = 0; i < rnd.length; i++) rnd[i] = rand();
    geo.setAttribute("position", posA);
    geo.setAttribute("aB", posB);
    geo.setAttribute("aRand", new THREE.BufferAttribute(rnd, 4));

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uMix: { value: 1 },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(99, 99, 0) },
        uHold: { value: 0 },
        uBurstT: { value: -100 },
        uBurstPos: { value: new THREE.Vector3() },
        uSize: { value: 5.5 },
        uPixelRatio: { value: 1 },
        uMotion: { value: reducedMotion ? 0 : 1 },
        uColorA: { value: ORANGE },
        uColorB: { value: VIOLET },
        uAlpha: { value: 0.85 },
      },
    });
    return { geometry: geo, material: mat };
  }, [shapes, count, reducedMotion]);

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  const target = useRef(0);
  const mix = useRef(1);
  const mouseV = useMemo(() => new THREE.Vector3(), []);
  const burstV = useMemo(() => new THREE.Vector3(), []);
  const lastBurst = useRef(-100);

  // Retarget the morph when the active section changes.
  const retarget = (next: number) => {
    const posA = geometry.getAttribute("position") as THREE.BufferAttribute;
    const posB = geometry.getAttribute("aB") as THREE.BufferAttribute;
    const m = mix.current;
    // bake the in-flight blend into A so the new morph starts where particles are
    for (let i = 0; i < posA.array.length; i++) {
      posA.array[i] = posA.array[i] + (posB.array[i] - posA.array[i]) * m;
    }
    posB.array.set(shapes[next]);
    posA.needsUpdate = true;
    posB.needsUpdate = true;
    mix.current = 0;
    target.current = next;
  };

  useEffect(() => {
    if (reducedMotion) invalidate();
  }, [reducedMotion, invalidate]);

  useFrame((state, delta) => {
    const u = material.uniforms;
    const dt = Math.min(delta, 0.05);
    const time = reducedMotion ? 0 : state.clock.elapsedTime;

    if (sceneState.section !== target.current) retarget(sceneState.section);

    // morph progress (instant when reduced motion)
    mix.current = reducedMotion ? 1 : Math.min(1, mix.current + dt * 0.55);
    u.uMix.value = mix.current;
    u.uTime.value = time;
    u.uPixelRatio.value = state.gl.getPixelRatio();

    const g = group.current;
    if (!g) return;

    // desktop: park the formation on the right so copy stays readable on the left
    const wide = size.width / size.height > 1.15;
    const homeX = wide ? viewport.width * 0.2 : 0;
    const homeY = wide ? 0 : viewport.height * 0.22;
    const damp = reducedMotion ? 1 : 1 - Math.pow(0.0006, dt);
    g.position.x += (homeX - g.position.x) * damp;
    g.position.y += (homeY - g.position.y) * damp;
    const scale = wide ? 1 : 0.72;
    g.scale.setScalar(g.scale.x + (scale - g.scale.x) * damp);

    const rig = cameraRig[sceneState.section] ?? cameraRig[0];
    if (!reducedMotion) {
      g.rotation.y += dt * 0.09;
      g.rotation.x += (rig.rot[0] - g.rotation.x) * damp * 0.5;
      g.rotation.z += (rig.rot[2] - g.rotation.z) * damp * 0.5;
      camera.position.x += (rig.pos[0] + sceneState.pointer.x * 0.5 - camera.position.x) * damp * 0.6;
      camera.position.y += (rig.pos[1] + sceneState.pointer.y * 0.3 - camera.position.y) * damp * 0.6;
      camera.position.z += (rig.pos[2] - camera.position.z) * damp * 0.6;
      camera.lookAt(0, 0, 0);
    } else {
      camera.position.set(rig.pos[0], rig.pos[1], rig.pos[2]);
      camera.lookAt(0, 0, 0);
    }

    // pointer → formation-local space
    g.updateMatrixWorld();
    mouseV.set(sceneState.pointer.x * viewport.width * 0.5, sceneState.pointer.y * viewport.height * 0.5, 0);
    g.worldToLocal(mouseV);
    u.uMouse.value.copy(mouseV);
    u.uHold.value += (sceneState.holding - u.uHold.value) * Math.min(1, dt * 8);

    if (sceneState.burstAt !== lastBurst.current) {
      lastBurst.current = sceneState.burstAt;
      burstV.set(sceneState.burstPos.x * viewport.width * 0.5, sceneState.burstPos.y * viewport.height * 0.5, 0);
      g.worldToLocal(burstV);
      u.uBurstPos.value.copy(burstV);
      u.uBurstT.value = time;
    }
  });

  return (
    <group ref={group}>
      <points geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
}
