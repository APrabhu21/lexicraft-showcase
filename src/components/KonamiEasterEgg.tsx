import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

const ML_SYMBOLS = [
  "PyTorch", "CNN", "GAN", "LSTM", "ReLU", "SGD", "GPU", "TPU",
  "loss", "grad", "epoch", "batch", "tensor", "model", "train",
  "0", "1", "F1", "AUC", "ROC", "NLP", "CV", "RL", "DL", "ML",
  "\u2207", "\u03B8", "\u03C3", "\u03B1", "\u03B2", "\u03B5", "\u2211", "\u222B", "\u221E",
  "w\u2081", "b\u2082", "x\u0302", "y\u0302", "\u2202L/\u2202w", "softmax", "dropout",
  "BERT", "GPT", "ViT", "YOLO", "Adam", "RMSProp", "∇f(x)",
  "import torch", "nn.Linear", "forward()", ".backward()", "optimizer.step()",
];

interface Drop {
  id: number;
  x: number;
  speed: number;
  chars: string[];
  delay: number;
}

const KonamiEasterEgg = () => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<string[]>([]);
  const idCounter = useRef(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    inputRef.current.push(e.key);
    if (inputRef.current.length > KONAMI.length) {
      inputRef.current.shift();
    }
    if (inputRef.current.join(",") === KONAMI.join(",")) {
      setActive(true);
      inputRef.current = [];
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => setActive(false), 8000);
    return () => clearTimeout(timer);
  }, [active]);

  const generateDrops = (): Drop[] => {
    const cols = Math.floor(window.innerWidth / 28);
    return Array.from({ length: cols }, (_, i) => {
      const charCount = 8 + Math.floor(Math.random() * 12);
      return {
        id: idCounter.current++,
        x: i * 28 + 4,
        speed: 2 + Math.random() * 4,
        delay: Math.random() * 2,
        chars: Array.from({ length: charCount }, () =>
          ML_SYMBOLS[Math.floor(Math.random() * ML_SYMBOLS.length)]
        ),
      };
    });
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden"
          style={{ background: "rgba(0, 0, 0, 0.92)" }}
        >
          {/* Title flash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1] }}
            transition={{ duration: 3, times: [0, 0.1, 0.7, 1] }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="text-center">
              <p className="text-green-400 font-mono text-6xl md:text-8xl font-bold mb-4"
                style={{ textShadow: "0 0 30px rgba(74, 222, 128, 0.5)" }}>
                HIRE ME
              </p>
              <p className="text-green-400/60 font-mono text-lg md:text-xl">
                {">"} neural_network.predict(candidate="Atharva") → "PERFECT_FIT"
              </p>
            </div>
          </motion.div>

          {/* Matrix rain columns */}
          {generateDrops().map((drop) => (
            <motion.div
              key={drop.id}
              className="absolute top-0 font-mono text-xs"
              style={{ left: drop.x }}
              initial={{ y: -200 }}
              animate={{ y: window.innerHeight + 200 }}
              transition={{
                duration: drop.speed,
                delay: drop.delay,
                ease: "linear",
              }}
            >
              {drop.chars.map((char, i) => (
                <div
                  key={i}
                  className="whitespace-nowrap"
                  style={{
                    color: i === 0
                      ? "rgba(187, 247, 208, 0.95)"
                      : `rgba(74, 222, 128, ${0.8 - i * 0.06})`,
                    textShadow: i === 0 ? "0 0 10px rgba(74, 222, 128, 0.8)" : "none",
                    lineHeight: "1.4",
                  }}
                >
                  {char}
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiEasterEgg;
