"use client";



import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { allProducts } from "@/data/products";

import { useFocusTrap } from "@/hooks/useFocusTrap";

import styles from "./SearchOverlay.module.css";



interface SearchOverlayProps {

  open: boolean;

  onClose: () => void;

}



export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {

  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const panelRef = useRef<HTMLDivElement>(null);

  const closeRef = useRef<HTMLButtonElement>(null);



  useFocusTrap(panelRef, open, closeRef);



  useEffect(() => {

    if (open) {

      setQuery("");

      setTimeout(() => inputRef.current?.focus(), 100);

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }

    return () => {

      document.body.style.overflow = "";

    };

  }, [open]);



  useEffect(() => {

    const onKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") onClose();

    };

    if (open) window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);

  }, [open, onClose]);



  if (!open) return null;



  const q = query.trim().toLowerCase();

  const results = q

    ? allProducts.filter(

        (p) =>

          p.name.toLowerCase().includes(q) ||

          p.categoryLabel?.toLowerCase().includes(q) ||

          p.description.toLowerCase().includes(q)

      )

    : [];



  return (

    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Search the collection">

      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />

      <div className={styles.panel} ref={panelRef}>

        <div className={styles.header}>

          <p className="label label-gold">Search</p>

          <button

            ref={closeRef}

            type="button"

            className={styles.close}

            onClick={onClose}

            aria-label="Close search"

          >

            ×

          </button>

        </div>

        <input

          ref={inputRef}

          type="search"

          className="input"

          placeholder="Search compounds, kits, atelier…"

          value={query}

          onChange={(e) => setQuery(e.target.value)}

          aria-label="Search the collection"

        />

        <div className={styles.results}>

          {q && results.length === 0 && (

            <p className={styles.empty}>No results for &ldquo;{query}&rdquo;</p>

          )}

          {results.map((p) => (

            <Link

              key={p.slug}

              href={`/product/${p.slug}`}

              className={styles.result}

              onClick={onClose}

            >

              <span className={styles.resultCategory}>

                {p.categoryLabel ?? p.category}

              </span>

              <span className={styles.resultName}>{p.name}</span>

              <span className={styles.resultMeta}>

                {p.status === "sold_out" ? "Sold Out · " : ""}

                {p.amount} · {p.price}

              </span>

            </Link>

          ))}

          {!q && (

            <p className={styles.hint}>Search by compound name or category.</p>

          )}

        </div>

      </div>

    </div>

  );

}

