import { useEffect, useRef } from "react";

const GradientMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.3, y: 0.3, r: 0.35, speed: 0.0008, phase: 0, color: "rgba(30, 64, 175, 0.4)" },
      { x: 0.7, y: 0.6, r: 0.3, speed: 0.0012, phase: 2, color: "rgba(59, 130, 246, 0.35)" },
      { x: 0.5, y: 0.8, r: 0.25, speed: 0.001, phase: 4, color: "rgba(96, 165, 250, 0.3)" },
      { x: 0.2, y: 0.7, r: 0.2, speed: 0.0015, phase: 1, color: "rgba(37, 99, 235, 0.25)" },
      { x: 0.8, y: 0.2, r: 0.28, speed: 0.0009, phase: 3, color: "rgba(29, 78, 216, 0.3)" },
    ];

    const draw = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const blob of blobs) {
        const cx = (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.08) * canvas.width;
        const cy = (blob.y + Math.cos(time * blob.speed * 0.7 + blob.phase) * 0.06) * canvas.height;
        const radius = blob.r * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(60px)" }}
    />
  );
};

export default GradientMesh;
