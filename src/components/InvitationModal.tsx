"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import InvitationForm from "./InvitationForm";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import styles from "./InvitationModal.module.css";

const DISMISS_KEY = "thesource-invitation-dismissed";
const AGE_KEY = "thesource-age-verified";

export default function InvitationModal() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    try {
      localStorage.setItem(DISMISS_KEY, "true");
    } catch {
      /* ignore */
    }
    setVisible(false);
    if (window.location.hash === "#invitation") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const open = useCallback(() => {
    try {
      if (localStorage.getItem(AGE_KEY) !== "true") return;
      if (localStorage.getItem(DISMISS_KEY) === "true") return;
    } catch {
      return;
    }
    setVisible(true);
  }, []);

  useFocusTrap(panelRef, visible);

  useEffect(() => {
    function onHash() {
      if (window.location.hash === "#invitation") open();
    }

    function scheduleOpen() {
      try {
        const ageOk = localStorage.getItem(AGE_KEY) === "true";
        const dismissed = localStorage.getItem(DISMISS_KEY) === "true";
        if (ageOk && !dismissed && window.location.hash !== "#invitation") {
          return window.setTimeout(open, 2200);
        }
      } catch {
        /* ignore */
      }
      return undefined;
    }

    onHash();
    window.addEventListener("hashchange", onHash);

    let timer = scheduleOpen();
    const onAgeVerified = () => {
      if (timer) clearTimeout(timer);
      timer = scheduleOpen();
    };
    window.addEventListener("thesource-age-verified", onAgeVerified);

    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("thesource-age-verified", onAgeVerified);
      if (timer) clearTimeout(timer);
    };
  }, [open]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, close]);

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={close}>
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="invitation-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={close} aria-label="Close">
          ×
        </button>

        <p className={styles.eyebrow}>The Invitation</p>
        <h2 id="invitation-modal-title" className={styles.title}>
          20% off your <span className={styles.titleAccent}>first order.</span>
        </h2>
        <p className={styles.intro}>
          Join the house list — first sight of new compounds and batch certificates.
        </p>

        <InvitationForm compact onSubmit={close} />

        <p className={styles.note}>One email when something matters. Never sold.</p>
      </div>
    </div>
  );
}
