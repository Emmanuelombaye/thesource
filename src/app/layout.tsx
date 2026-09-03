import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import ClientOverlays from "@/components/ClientOverlays";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel-loaded",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-loaded",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost-loaded",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thesource.gold"),
  title: {
    default: "THE SOURCE — Precision. Purity. Performance.",
    template: "%s | THE SOURCE",
  },
  description:
    "Research materials. Every batch accounted for. Clear identity, current documentation, and direct research support.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "THE SOURCE — Precision. Purity. Performance.",
    description:
      "Research compounds presented at the gold standard. Precision. Purity. Performance. From The Source.",
    url: "https://thesource.gold",
    siteName: "The Source",
    images: [{ url: "/brand/og.jpg", width: 1200, height: 630, alt: "The Source" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body>
        <CartProvider>
          <AgeGate />
          <ClientOverlays />
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
