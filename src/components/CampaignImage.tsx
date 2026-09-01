"use client";

import { useState } from "react";
import styles from "./CampaignImage.module.css";

interface CampaignImageProps {
  src: string;
  alt?: string;
  label?: string;
}

export default function CampaignImage({ src, alt = "", label }: CampaignImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.fallback} aria-hidden={!label}>
        {label && <p className="label label-gold">{label}</p>}
        <p className={styles.fallbackWord}>THE SOURCE</p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={() => setFailed(true)} />
  );
}
