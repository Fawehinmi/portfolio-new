"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring for small circle
  const smoothX = useSpring(x, { stiffness: 400, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 400, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 15); // small cursor
      y.set(e.clientY - 15);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Small hollow circle (spring effect) */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1px solid white",
          backgroundColor: "transparent",
          mixBlendMode: "difference",
          pointerEvents: "none",
          x: smoothX,
          y: smoothY,
          zIndex: 9999,
        }}
      />
    </>
  );
}
