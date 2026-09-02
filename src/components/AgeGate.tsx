"use client";

import { useEffect, useState } from "react";
import Monogram from "./Monogram";
import styles from "./AgeGate.module.css";

const STORAGE_KEY = "thesource-age-verified";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setVisible(true);
    }
  }, []);

  function verify() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event("thesource-age-verified"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
      <div className={styles.panel}>
        <Monogram size={48} />
        <p className={styles.wordmark}>THE SOURCE</p>
        <h1 id="age-gate-title" className={styles.title}>
          You must be 21 or older to enter.
        </h1>
        <p className={styles.text}>
          This site offers research compounds for laboratory research use only. Not for
          human consumption. By entering, you confirm you are at least 21 years of age
          and a qualified researcher.
        </p>
        <button type="button" className="btn" onClick={verify}>
          Enter — I am 21 or older
        </button>
        <p className={styles.exit}>
          <a href="https://www.google.com" rel="noopener noreferrer">
            Exit
          </a>
        </p>
      </div>
    </div>
  );
}
