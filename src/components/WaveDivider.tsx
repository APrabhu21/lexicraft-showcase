interface WaveDividerProps {
  flip?: boolean;
  className?: string;
  fillClass?: string;
}

const WaveDivider = ({ flip = false, className = "", fillClass = "fill-background" }: WaveDividerProps) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block w-full h-[60px] md:h-[80px] ${fillClass}`}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6.01,68.38-16.75,100.6-27.55l0,0v62.42H0Z" />
      </svg>
    </div>
  );
};

export default WaveDivider;
