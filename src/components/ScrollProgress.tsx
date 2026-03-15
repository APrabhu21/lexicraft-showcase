import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-16 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-primary to-accent z-50"
    />
  );
};

export default ScrollProgress;
