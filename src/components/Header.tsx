"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Monogram from "./Monogram";
import AnnouncementBar from "./AnnouncementBar";
import SearchOverlay from "./SearchOverlay";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

/**
 * PDF p.17 exact bar:
 * THE SOURCE · CATALOG · CERTIFICATES · CART
 * Catalog → The Collection. Search = Aesop utility. House pages under The House (p.22).
 */
const primaryLinks = [
  { href: "/collection", label: "The Collection" },
  { href: "/certificates", label: "Certificates" },
];

const houseLinks = [
  { href: "/the-foundations", label: "The Foundations" },
  { href: "/the-standard", label: "The Standard" },
  { href: "/atelier", label: "Atelier" },
];

const mobileLinks = [
  ...primaryLinks,
  ...houseLinks,
  { href: "/support", label: "Client Advisor" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [houseOpen, setHouseOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [homeSolid, setHomeSolid] = useState(false);
  const houseRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const houseActive = houseLinks.some(
    (l) => pathname === l.href || pathname.startsWith(`${l.href}/`)
  );

  useEffect(() => {
    setMenuOpen(false);
    setHouseOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setHomeSolid(false);
      return;
    }
    function onScroll() {
      setHomeSolid(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!houseOpen) return;
    function onPointerDown(e: MouseEvent) {
      if (houseRef.current && !houseRef.current.contains(e.target as Node)) {
        setHouseOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [houseOpen]);

  function isActive(href: string) {
    if (href === "/collection") {
      return pathname === "/collection" || pathname.startsWith("/product/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`${styles.header} ${isHome ? styles.headerHome : ""} ${isHome && homeSolid ? styles.headerHomeSolid : ""}`}
    >
      {!isHome && (
        <div className={styles.ribbon}>
          <AnnouncementBar />
        </div>
      )}

      <div className={styles.main}>
        <div className={`container ${styles.bar}`}>
          <button
            type="button"
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <Link href="/" className={styles.brand} aria-label="The Source — home">
            <Monogram mode="monogram" variant="gold" size={36} priority />
            <span className={styles.wordmark}>THE SOURCE</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className={styles.link}
              aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ", empty"}`}
              onClick={() => setCartOpen(true)}
            >
              Cart{itemCount > 0 ? ` (${itemCount})` : ""}
            </button>

            <div className={styles.house} ref={houseRef}>
              <button
                type="button"
                className={`${styles.link} ${houseActive ? styles.active : ""}`}
                aria-expanded={houseOpen}
                aria-haspopup="true"
                onClick={() => setHouseOpen((o) => !o)}
              >
                The House
              </button>
              {houseOpen && (
                <div className={styles.housePanel} role="menu">
                  {houseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className={`${styles.houseItem} ${isActive(link.href) ? styles.active : ""}`}
                      onClick={() => setHouseOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className={styles.utility} aria-label="Utility">
            <button type="button" className={styles.util} onClick={() => setSearchOpen(true)}>
              Search
            </button>
          </div>

          <div className={styles.mobileActions}>
            <button
              type="button"
              className={styles.util}
              aria-label="Search the collection"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
            <button
              type="button"
              className={styles.util}
              aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ", empty"}`}
              onClick={() => setCartOpen(true)}
            >
              Cart{itemCount > 0 ? ` (${itemCount})` : ""}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
