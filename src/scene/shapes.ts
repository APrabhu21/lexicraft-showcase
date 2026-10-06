/**
 * Target formations the particle field morphs between — one per section.
 * Each returns a flat Float32Array of xyz positions (length = count * 3).
 */
type ShapeFn = (count: number, rand: () => number) => Float32Array;

// small deterministic PRNG so formations are stable between renders
export function makeRand(seed = 1337) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Home: a dense "neural" sphere with a few radial spikes. */
const orb: ShapeFn = (n, r) => {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = r() * 2 - 1;
    const t = r() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    const rad = 2.4 * (0.82 + r() * 0.18);
    a[i * 3] = s * Math.cos(t) * rad;
    a[i * 3 + 1] = u * rad;
    a[i * 3 + 2] = s * Math.sin(t) * rad;
  }
  return a;
};

/** Work: a telemetry waveform ribbon streaming left to right. */
const wave: ShapeFn = (n, r) => {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const x = (r() * 2 - 1) * 4.4;
    const lane = Math.floor(r() * 3);
    const y = Math.sin(x * 1.3 + lane * 1.7) * 0.9 + Math.sin(x * 0.4 + lane) * 0.5 + (lane - 1) * 1.1;
    a[i * 3] = x;
    a[i * 3 + 1] = y + (r() - 0.5) * 0.18;
    a[i * 3 + 2] = (r() - 0.5) * 1.4;
  }
  return a;
};

/** Projects: a torus knot — reads as "something intricate to take apart". */
const knot: ShapeFn = (n, r) => {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const t = r() * Math.PI * 2;
    const p = 2;
    const q = 3;
    const rr = 1.6 + Math.cos(q * t) * 0.7;
    const jitter = 0.16;
    a[i * 3] = rr * Math.cos(p * t) * 1.5 + (r() - 0.5) * jitter * 3;
    a[i * 3 + 1] = rr * Math.sin(p * t) * 1.5 + (r() - 0.5) * jitter * 3;
    a[i * 3 + 2] = Math.sin(q * t) * 1.4 + (r() - 0.5) * jitter * 3;
  }
  return a;
};

/** Skills: a 3D lattice, like an embedding grid. */
const lattice: ShapeFn = (n, r) => {
  const a = new Float32Array(n * 3);
  const side = 14;
  const step = 0.52;
  for (let i = 0; i < n; i++) {
    const gx = Math.floor(r() * side);
    const gy = Math.floor(r() * side);
    const gz = Math.floor(r() * 6);
    a[i * 3] = (gx - side / 2) * step + (r() - 0.5) * 0.08;
    a[i * 3 + 1] = (gy - side / 2) * step + (r() - 0.5) * 0.08;
    a[i * 3 + 2] = (gz - 3) * step * 1.4 + (r() - 0.5) * 0.08;
  }
  return a;
};

/** About: a double helix — DNA nod to the bioinformatics years. */
const helix: ShapeFn = (n, r) => {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const strand = r() < 0.5 ? 0 : Math.PI;
    const y = (r() * 2 - 1) * 3.4;
    const ang = y * 1.9 + strand;
    const rad = 1.25 + (r() - 0.5) * 0.18;
    a[i * 3] = Math.cos(ang) * rad;
    a[i * 3 + 1] = y;
    a[i * 3 + 2] = Math.sin(ang) * rad;
    // occasional rungs between strands
    if (r() < 0.12) {
      const k = r() * 2 - 1;
      a[i * 3] = Math.cos(ang) * rad * k;
      a[i * 3 + 2] = Math.sin(ang) * rad * k;
    }
  }
  return a;
};

/** Contact: a spiral galaxy that invites you in. */
const galaxy: ShapeFn = (n, r) => {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const arm = Math.floor(r() * 3);
    const d = Math.pow(r(), 0.6) * 4.6;
    const ang = d * 1.1 + (arm * Math.PI * 2) / 3;
    const spread = (r() - 0.5) * (0.25 + d * 0.16);
    a[i * 3] = Math.cos(ang) * d + spread;
    a[i * 3 + 1] = (r() - 0.5) * 0.35 * (1.2 - d / 5) + spread * 0.4;
    a[i * 3 + 2] = Math.sin(ang) * d + spread;
  }
  return a;
};

export const shapeFns: ShapeFn[] = [orb, wave, knot, lattice, helix, galaxy];

export function buildShapes(count: number): Float32Array[] {
  const rand = makeRand();
  return shapeFns.map((fn) => fn(count, rand));
}

/** Per-section camera rest positions (x, y, z) and look-at tilt. */
export const cameraRig: { pos: [number, number, number]; rot: [number, number, number] }[] = [
  { pos: [0, 0, 7.5], rot: [0, 0, 0] },
  { pos: [0, 0, 8], rot: [0.05, 0, 0.02] },
  { pos: [0, 0, 8.2], rot: [0, 0.2, 0] },
  { pos: [0, 0, 9], rot: [0.25, -0.3, 0] },
  { pos: [0, 0, 8], rot: [0, 0.4, 0] },
  { pos: [0, 1.2, 9], rot: [0.5, 0, 0] },
];
