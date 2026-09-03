"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Monogram from "./Monogram";
import AnnouncementBar from "./AnnouncementBar";
import SearchOverlay from "./SearchOverlay";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

/** PDF p.17 — THE SOURCE · Collection · Certificates · Cart; house pages in primary. */
const primaryLinks = [
  { href: "/collection", label: "The Collection" },
  { href: "/the-foundations", label: "The Foundations" },
  { href: "/the-standard", label: "The Standard" },
  { href: "/atelier", label: "Atelier" },
];

const mobileLinks = [
  { href: "/certificates", label: "Certificates" },
  ...primaryLinks,
  { href: "/support", label: "Client Advisor" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string) {
    if (href === "/collection") {
      return pathname === "/collection" || pathname.startsWith("/product/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className={`${styles.header} ${isHome ? styles.headerHome : ""}`}>
      <div className={styles.ribbon}>
        <AnnouncementBar />
      </div>

      <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
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
            <Monogram mode="monogram" variant="gold" size={32} priority />
            <span className={styles.wordmark}>THE SOURCE</span>
          </Link>

          <nav className={styles.primary} aria-label="Primary">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.utility}>
            <button type="button" className={styles.utilityLink} onClick={() => setSearchOpen(true)}>
              Search
            </button>
            <Link
              href="/certificates"
              className={`${styles.utilityLink} ${isActive("/certificates") ? styles.utilityActive : ""}`}
            >
              Certificates
            </Link>
            <button
              type="button"
              className={styles.utilityLink}
              aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ", empty"}`}
              onClick={() => setCartOpen(true)}
            >
              Cart{itemCount > 0 ? ` (${itemCount})` : ""}
            </button>
          </div>

          <div className={styles.mobileActions}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Search the collection"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
            <button
              type="button"
              className={styles.iconBtn}
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
          <button
            type="button"
            className={styles.mobileSearch}
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
          >
            Search
          </button>
        </nav>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
