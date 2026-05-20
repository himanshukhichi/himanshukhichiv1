"use client";

import { useEffect, useState } from "react";

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  );
}
