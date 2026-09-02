"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Monogram from "./Monogram";
import AnnouncementBar from "./AnnouncementBar";
import SearchOverlay from "./SearchOverlay";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

const leftLinks = [
  { href: "/collection", label: "The Collection" },
  { href: "/certificates", label: "Certificates" },
];

const rightLinks = [
  { href: "/the-foundations", label: "The Foundations" },
  { href: "/the-standard", label: "The Standard" },
  { href: "/atelier", label: "Atelier" },
];

const primaryLinks = [...leftLinks, ...rightLinks];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const isHome = pathname === "/";

  function isActive(href: string) {
    if (href === "/collection") {
      return pathname === "/collection" || pathname.startsWith("/product/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className={`${styles.header} ${isHome ? styles.headerOverlay : ""}`}>
      <AnnouncementBar />

      {/* Aesop / PDF — utility layer separated from primary nav */}
      <div className={styles.utilityBar}>
        <div className={`container ${styles.utilityInner}`}>
          <span className={styles.utilityMark} aria-hidden="true">
            Precision · Purity · Performance
          </span>
          <div className={styles.utilityNav}>
            <button
              type="button"
              className={styles.utilityLink}
              aria-label="Search the collection"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
            <Link
              href="/support"
              className={`${styles.utilityLink} ${pathname === "/support" ? styles.active : ""}`}
            >
              Client Advisor
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
        </div>
      </div>

      <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          <nav className={styles.leftNav} aria-label="Primary left">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className={styles.brand} aria-label="The Source — home">
            <Monogram mode="monogram" variant="gold" size={44} />
            <span className={styles.wordmark}>THE SOURCE</span>
          </Link>

          <nav className={styles.rightNav} aria-label="Primary right">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {primaryLinks.map((link) => (
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
          <Link href="/support" onClick={() => setMenuOpen(false)}>Client Advisor</Link>
          <button type="button" onClick={() => { setMenuOpen(false); setCartOpen(true); }}>
            Cart{itemCount > 0 ? ` (${itemCount})` : ""}
          </button>
        </nav>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
