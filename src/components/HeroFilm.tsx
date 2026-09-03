"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroFilm.module.css";

/** Live-site still + film; editorial still as fallback. PDF: slow, restrained hero movement. */
const HERO_STILL = "/brand/hero.jpg";
const HERO_EDITORIAL = "/brand/hero-editorial.jpg";
const HERO_FILM = "/brand/hero.mp4";

export default function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stillSrc, setStillSrc] = useState(HERO_STILL);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [filmReady, setFilmReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const reduced = mq.matches;
      setReduceMotion(reduced);
      if (reduced) {
        videoRef.current?.pause();
        setFilmReady(false);
      }
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    video.playbackRate = 0.55;
    const play = () => {
      video.playbackRate = 0.55;
      video
        .play()
        .then(() => setFilmReady(true))
        .catch(() => setFilmReady(false));
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });

    return () => video.removeEventListener("canplay", play);
  }, [reduceMotion]);

  return (
    <div
      className={styles.wrap}
      data-motion={!reduceMotion && !filmReady ? "still" : !reduceMotion && filmReady ? "film" : "static"}
      aria-hidden="true"
    >
      <Image
        src={stillSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.still}
        onError={() => setStillSrc(HERO_EDITORIAL)}
      />
      {!reduceMotion && (
        <video
          ref={videoRef}
          className={`${styles.film} ${filmReady ? styles.filmVisible : ""}`}
          src={HERO_FILM}
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_STILL}
          onError={() => setFilmReady(false)}
        />
      )}
    </div>
  );
}
