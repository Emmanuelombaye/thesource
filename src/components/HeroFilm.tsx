"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroFilm.module.css";

/** Live-site still + film. PDF: slow, restrained hero movement — clearly slow-mo, not sluggish. */
const HERO_STILL = "/brand/hero.jpg";
const HERO_EDITORIAL = "/brand/hero-editorial.jpg";
const HERO_FILM = "/brand/hero.mp4";
/** ~72% speed — readable as slow motion, a touch faster than half-speed. */
const SLOW_MO_RATE = 0.72;

export default function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stillSrc, setStillSrc] = useState(HERO_STILL);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [allowFilm, setAllowFilm] = useState(false);
  const [filmReady, setFilmReady] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
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
      // Phones included — muted + playsInline. Skip only reduced-motion / save-data / very slow net.
      const useFilm = !reduced && !saveData && !slowNet;
      setAllowFilm(useFilm);
      if (!useFilm) {
        videoRef.current?.pause();
        setFilmReady(false);
      }
    };

    update();
    mqMotion.addEventListener("change", update);
    connection?.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !allowFilm) return;

    const applyRate = () => {
      video.playbackRate = SLOW_MO_RATE;
    };

    applyRate();
    const play = () => {
      applyRate();
      video
        .play()
        .then(() => {
          applyRate();
          setFilmReady(true);
        })
        .catch(() => setFilmReady(false));
    };

    video.addEventListener("ratechange", applyRate);
    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });

    return () => {
      video.removeEventListener("ratechange", applyRate);
      video.removeEventListener("canplay", play);
    };
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
