import { useRef, useState, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
}

const MagneticButton = ({
  children,
  className = "",
  href,
  target,
  rel,
  strength = 0.3,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setTransform({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition: transform.x === 0 ? "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
      }}
    >
      {children}
    </a>
  );
};

export default MagneticButton;
