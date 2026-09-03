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
  const [allowFilm, setAllowFilm] = useState(false);
  const [filmReady, setFilmReady] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqNarrow = window.matchMedia("(max-width: 700px)");
    const connection = (
      typeof navigator !== "undefined"
        ? (navigator as Navigator & {
            connection?: EventTarget & {
              saveData?: boolean;
              effectiveType?: string;
            };
          }).connection
        : undefined
    );

    const update = () => {
      const reduced = mqMotion.matches;
      setReduceMotion(reduced);
      const saveData = Boolean(connection?.saveData);
      const slowNet = /2g/.test(connection?.effectiveType ?? "");
      const useFilm = !reduced && !mqNarrow.matches && !saveData && !slowNet;
      setAllowFilm(useFilm);
      if (!useFilm) {
        videoRef.current?.pause();
        setFilmReady(false);
      }
    };

    update();
    mqMotion.addEventListener("change", update);
    mqNarrow.addEventListener("change", update);
    connection?.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqNarrow.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !allowFilm) return;

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
  }, [allowFilm]);

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
        quality={75}
        className={styles.still}
        onError={() => setStillSrc(HERO_EDITORIAL)}
      />
      {allowFilm && (
        <video
          ref={videoRef}
          className={`${styles.film} ${filmReady ? styles.filmVisible : ""}`}
          src={HERO_FILM}
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_STILL}
          onError={() => setFilmReady(false)}
        />
      )}
    </div>
  );
}
