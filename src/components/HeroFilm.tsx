"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./HeroFilm.module.css";

/** Aesop editorial hero — generated still with live-site fallback */
const HERO_STILL = "/brand/hero-editorial.jpg";
const HERO_FALLBACK = "/brand/hero.jpg";

export default function HeroFilm() {
  const [stillSrc, setStillSrc] = useState(HERO_STILL);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <Image
        src={stillSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.still}
        onError={() => setStillSrc(HERO_FALLBACK)}
      />
    </div>
  );
}
