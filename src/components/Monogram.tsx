"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Monogram.module.css";

interface MonogramProps {
  variant?: "gold" | "ink" | "white";
  size?: number;
  className?: string;
  mode?: "monogram" | "mark";
  /** Load immediately — use in the header so the gold TS never flashes as an empty box */
  priority?: boolean;
}

const monogramSrc = {
  gold: ["/logos/The-Source-TS-Monogram-Gold.png", "/brand/logo-mark.png"],
  ink: ["/logos/The-Source-TS-Monogram-Ink-Black.png", "/brand/logo-mark.png"],
  white: ["/logos/The-Source-TS-Monogram-White.png", "/brand/logo-mark.png"],
};

const MARK_RATIO = 52 / 78;

export default function Monogram({
  variant = "gold",
  size = 48,
  className = "",
  mode = "monogram",
  priority = false,
}: MonogramProps) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const candidates = mode === "mark" ? ["/brand/logo-mark.png", ...monogramSrc[variant]] : monogramSrc[variant];
  const height = size;
  const width = mode === "mark" ? Math.round(size * MARK_RATIO) : size;

  return (
    <span
      className={`${styles.wrap} ${mode === "mark" ? styles.mark : ""} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      {!failed && (
        <Image
          key={candidates[index]}
          src={candidates[index]}
          alt=""
          width={width}
          height={height}
          priority={priority}
          className={styles.png}
          onError={() => {
            if (index < candidates.length - 1) {
              setIndex(index + 1);
            } else {
              setFailed(true);
            }
          }}
        />
      )}
    </span>
  );
}
