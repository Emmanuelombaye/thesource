"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Monogram.module.css";

interface MonogramProps {
  variant?: "gold" | "ink" | "white";
  /** Height in px — width follows brand mark ratio */
  size?: number;
  className?: string;
  /** TS square monogram vs vertical logo mark (live site header) */
  mode?: "monogram" | "mark";
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
  mode = "mark",
}: MonogramProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [index, setIndex] = useState(0);

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
          className={`${styles.png} ${loaded ? styles.pngVisible : ""}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (index < candidates.length - 1) {
              setLoaded(false);
              setIndex(index + 1);
            } else {
              setFailed(true);
            }
          }}
        />
      )}
      {(!loaded || failed) && <span className={styles.placeholder} aria-hidden="true" />}
    </span>
  );
}
