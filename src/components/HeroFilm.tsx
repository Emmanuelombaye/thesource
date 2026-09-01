"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroFilm.module.css";

export default function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const [useImage, setUseImage] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  return (
    <div className={styles.wrap} aria-hidden="true">
      {useVideo ? (
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/brand/hero.jpg"
          onError={() => setUseVideo(false)}
        >
          <source src="/brand/hero.mp4" type="video/mp4" />
        </video>
      ) : useImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/brand/hero.jpg"
          alt=""
          className={styles.video}
          onError={() => setUseImage(false)}
        />
      ) : (
        <div className={styles.fallback} />
      )}
      <button
        type="button"
        className={styles.pause}
        aria-label={paused ? "Play the hero film" : "Pause the hero film"}
        onClick={() => {
          const v = videoRef.current;
          if (!v) return;
          if (paused) {
            void v.play();
            setPaused(false);
          } else {
            v.pause();
            setPaused(true);
          }
        }}
      >
        {paused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}
