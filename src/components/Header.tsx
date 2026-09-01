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

const shopLinks = [
  { href: "/collection", label: "The Collection" },
  { href: "/certificates", label: "Certificates" },
];

const primaryLinks = [
  { href: "/the-foundations", label: "Foundations" },
  { href: "/the-standard", label: "The Standard" },
  { href: "/atelier", label: "Atelier" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const shopActive =
    pathname === "/collection" ||
    pathname.startsWith("/product/") ||
    pathname === "/certificates" ||
    pathname.startsWith("/certificates/");

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <header className={`${styles.header} ${isHome ? styles.headerOverlay : ""}`}>
      <AnnouncementBar />

      <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          <Link href="/" className={styles.brand} aria-label="The Source — home">
            <Monogram mode="mark" size={56} />
            <span className={styles.wordmark}>THE SOURCE</span>
          </Link>

          <nav className={styles.primaryNav} aria-label="Primary">
            <div className={styles.navLinks} ref={shopRef}>
              <div className={styles.shopWrap}>
                <button
                  type="button"
                  className={`${styles.navLink} ${shopActive ? styles.active : ""}`}
                  aria-expanded={shopOpen}
                  aria-haspopup="true"
                  onClick={() => setShopOpen(!shopOpen)}
                >
                  Shop
                  <span className={styles.chevron} aria-hidden="true">▾</span>
                </button>
                {shopOpen && (
                  <div className={styles.dropdown} role="menu">
                    {shopLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className={pathname === link.href ? styles.active : ""}
                        onClick={() => setShopOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.utilityNav}>
              <button
                type="button"
                className={styles.iconBtn}
                aria-label="Search the collection"
                onClick={() => setSearchOpen(true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <Link
                href="/support"
                className={`${styles.navLink} ${pathname === "/support" ? styles.active : ""}`}
              >
                Client Advisor
              </Link>
              <button
                type="button"
                className={styles.iconBtn}
                aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ", empty"}`}
                onClick={() => setCartOpen(true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M6 6L5 3H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
              </button>
            </div>
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
          <p className={styles.mobileSection}>Shop</p>
          {shopLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : ""}
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
