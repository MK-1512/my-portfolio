import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorSize = 32; // A single, consistent size for the cursor

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-50 bg-black/10 border border-black/20"
      style={{ width: cursorSize, height: cursorSize }}
      animate={{
        x: cursorPosition.x - cursorSize / 2,
        y: cursorPosition.y - cursorSize / 2,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}