import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const handleTextEnter = () => setCursorVariant("text");
  const handleTextLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className="bg-black h-8 w-8 rounded-full fixed top-0 left-0"
        variants={variants}
        animate={cursorVariant}
      />
      <h1 onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave}>
        sadsadsadas
      </h1>
    </>
  );
};

export default Cursor;
