export interface SceneCapabilities {
  webgl: boolean;
  reducedMotion: boolean;
  lowPower: boolean;
  particleCount: number;
  maxDpr: number;
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    const ok = !!gl;
    (gl as WebGLRenderingContext | null)?.getExtension("WEBGL_lose_context")?.loseContext();
    return ok;
  } catch {
    return false;
  }
}

export function detectCapabilities(): SceneCapabilities {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const lowPower = coarse || narrow || cores <= 4 || memory <= 4;

  return {
    webgl: hasWebGL(),
    reducedMotion,
    lowPower,
    particleCount: lowPower ? 6000 : 16000,
    maxDpr: lowPower ? 1.25 : 1.75,
  };
}
