
"use client";

import { useEffect, useState } from "react";
import ClickSpark from "@/components/ClickSpark";

export default function ThemeClickSpark({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sparkColor, setSparkColor] = useState("#000");

  useEffect(() => {
    const updateSparkColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setSparkColor(isDark ? "#fff" : "#000");
    };

    // Set the initial color
    updateSparkColor();

    // Watch for dark/light theme changes
    const observer = new MutationObserver(updateSparkColor);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ClickSpark
      sparkColor={sparkColor}
      shape="line"
      sparkCount={10}
      sparkSize={14}
      sparkRadius={22}
      duration={380}
    >
      {children}
    </ClickSpark>
  );
}
