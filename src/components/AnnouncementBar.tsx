"use client";



import { useEffect, useState } from "react";

import styles from "./AnnouncementBar.module.css";



const messages = [

  "THE SOURCE — MMXXVI",

  "Complimentary U.S. Shipping",

  "Third-Party Tested",

  "20% Off Your First Order — Code WELCOME20",

];



export default function AnnouncementBar() {

  const [paused, setPaused] = useState(false);



  useEffect(() => {

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) setPaused(true);

  }, []);



  return (

    <div className={styles.bar} role="region" aria-label="Announcements">

      <div className={styles.track} data-paused={paused}>

        {[...messages, ...messages].map((msg, i) => (

          <span key={`${msg}-${i}`} className={styles.item}>

            <span className={styles.diamond} aria-hidden="true" />

            {msg}

          </span>

        ))}

      </div>

      <button

        type="button"

        className={styles.pause}

        aria-label={paused ? "Resume the announcement ribbon" : "Pause the announcement ribbon"}

        onClick={() => setPaused(!paused)}

      >

        {paused ? "▶" : "❚❚"}

      </button>

    </div>

  );

}

