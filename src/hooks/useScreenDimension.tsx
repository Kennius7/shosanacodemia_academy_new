"use client";

import { useState, useEffect } from "react";

export function useScreenDimension() {
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimension = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return screen;
}
