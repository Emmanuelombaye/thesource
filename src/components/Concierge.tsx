"use client";



import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import { useFocusTrap } from "@/hooks/useFocusTrap";

import styles from "./Concierge.module.css";



export default function Concierge() {

  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const panelRef = useRef<HTMLDivElement>(null);

  const closeRef = useRef<HTMLButtonElement>(null);



  useFocusTrap(panelRef, open, triggerRef);



  useEffect(() => {

    const onKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") setOpen(false);

    };

    if (open) window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);

  }, [open]);



  return (

    <>

      <button

        ref={triggerRef}

        type="button"

        className={styles.trigger}

        onClick={() => setOpen(true)}

        aria-label="Concierge"

      >

        Concierge

      </button>



      {open && (

        <div

          className={styles.panel}

          ref={panelRef}

          role="dialog"

          aria-modal="true"

          aria-label="The Source Concierge"

        >

          <div className={styles.header}>

            <p className="label label-gold">The Source Concierge</p>

            <button

              ref={closeRef}

              type="button"

              onClick={() => setOpen(false)}

              aria-label="Close concierge"

              className={styles.close}

            >

              ×

            </button>

          </div>

          <p className={styles.welcome}>Welcome to The Source. How may we assist you?</p>

          <nav className={styles.links}>

            <Link href="/support" onClick={() => setOpen(false)}>Order Assistance</Link>

            <Link href="/collection" onClick={() => setOpen(false)}>Product Information</Link>

            <Link href="/support" onClick={() => setOpen(false)}>Shipping & Delivery</Link>

            <Link href="/certificates" onClick={() => setOpen(false)}>COA & Testing</Link>

            <a href="mailto:admin@thesource.gold">Speak With Client Care</a>

          </nav>

          <p className={styles.note}>Replies within 24 hours — usually much sooner.</p>

        </div>

      )}

    </>

  );

}

