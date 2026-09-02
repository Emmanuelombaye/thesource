import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollRow from "@/components/ScrollRow";
import HeroFilm from "@/components/HeroFilm";
import CampaignModule from "@/components/CampaignModule";
import CampaignImage from "@/components/CampaignImage";
import ClarityStrip from "@/components/home/ClarityStrip";
import HomeCertificate from "@/components/home/HomeCertificate";
import ResearchSupport from "@/components/home/ResearchSupport";
import InvitationForm from "@/components/InvitationForm";
import { collectionProducts, atelierProducts } from "@/data/products";
import styles from "./page.module.css";

const pillars = [
  { title: "Research Use Only", text: "Supplied strictly for laboratory research." },
  { title: "Third-Party Tested", text: "Every batch tested for purity & potency." },
  { title: "Secure & Discreet", text: "Your privacy is our priority." },
  { title: "Fast Dispatch", text: "Out the door within 24 to 48 hours." },
];

const standardPillars = [
  { numeral: "I", title: "Precision", text: "One specification, held run to run — American labs, American paperwork." },
  { numeral: "II", title: "Purity", text: "Third-party HPLC verified before any compound carries the mark." },
  { numeral: "III", title: "Performance", text: "Studied for those who treat themselves as the asset." },
];

const atelierRows = [
  { label: "Row I", title: "Premium T-Shirt Collection", slugs: ["monogram-tee", "emblem-tee", "wordmark-tee", "crest-tee", "box-logo-tee"] },
  { label: "Row II", title: "Premium Hoodie Collection", slugs: ["monogram-hoodie", "wordmark-hoodie", "crest-hoodie"] },
  { label: "Row III", title: "The Source Essentials", slugs: ["beanie", "duffel", "tumbler", "shaker", "mug", "towel", "umbrella", "challenge-coin"] },
];

const foundationsCompounds = ["GLP3-R", "KLOW", "Adamax", "MOTS-C"];

export default function HomePage() {
  return (
    <>
      {/* Aesop — full-bleed editorial image; copy overlaid lower-left */}
      <section className={styles.hero}>
        <div className={styles.heroScene}>
          <HeroFilm />
        </div>
        <div className={styles.heroScrim} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <h1 className={`${styles.heroTitle} reveal`}>
              You found <em>The Source.</em>
            </h1>
            <p className={`${styles.heroTagline} reveal`}>Precision. Purity. Performance.</p>
            <p className={`${styles.heroSub} reveal`}>
              Research materials. Every batch accounted for.
            </p>
            <div className={`${styles.heroCtas} reveal`}>
              <Link href="/the-foundations" className="btn-text">
                The Foundations Kit
              </Link>
              <Link href="/collection" className="btn-text">
                Or build your own protocol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF p.17 — what / who / proof, directly below the image hero */}
      <ClarityStrip />

      <section className={styles.pillars}>
        <div className="container">
          <p className={styles.pillarsLead}>— THE SOURCE —</p>
          <div className={styles.pillarGrid}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarRule} aria-hidden="true" />
                <h2 className={styles.pillarTitle}>{p.title}</h2>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immortals — title, short intro, product preview (live site order) */}
      <section className={`section ${styles.collection}`}>
        <div className="container">
          <div className={styles.collectionHeader}>
            <div>
              <p className="label">The Collection</p>
              <h2 className={styles.sectionTitle}>Held to one standard.</h2>
              <p className={styles.collectionLead}>
                One master vial governs the entire line — identity carried by the label,
                consistency as the first form of trust.
              </p>
            </div>
            <Link href="/collection" className="btn-text">View All</Link>
          </div>

          <div className={styles.productGrid}>
            {collectionProducts.map((p, index) => (
              <ProductCard key={p.slug} product={p} variant="grid" priority={index < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Rhode — large campaign modules, then compact product rows */}
      <CampaignModule
        label="The Foundations Kit"
        title="Where the new habits begin."
        text="Four compounds studied together — metabolic, repair, cognitive, cellular. One stack under the mark."
        href="/the-foundations"
        action="Discover The Kit"
        secondaryHref="#invitation"
        secondaryAction="Join the Waitlist"
        listItems={foundationsCompounds}
        imageFill
        visual={<CampaignImage src="/brand/kit-open.jpg" label="The Foundations Kit" />}
      />

      <CampaignModule
        label="The Atelier"
        title="Drop 001 — MMXXVI"
        text="A quiet capsule for the ritual — worn, carried, kept. By invitation."
        href="/atelier"
        action="Enter The Atelier"
        reverse
        imageFill
        visual={<CampaignImage src="/atelier/hoodie-1.png" label="Drop 001" />}
      />

      {atelierRows.map((row) => {
        const products = atelierProducts.filter((p) => row.slugs.includes(p.slug));
        return (
          <ScrollRow key={row.label} label={row.label} title={row.title}>
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} variant="carousel" />
            ))}
          </ScrollRow>
        );
      })}

      <HomeCertificate />

      <section className={`section ${styles.invitation}`} id="invitation">
        <div className="container">
          <div className={styles.invitationInner}>
            <p className="label label-gold">The Invitation</p>
            <h2 className={styles.invitationTitle}>
              20% off your <span className={styles.invitationAccent}>first order.</span>
            </h2>
            <p className={styles.invitationIntro}>
              Join the house list — first sight of new compounds and batch certificates.
            </p>
            <InvitationForm />
            <p className={styles.invitationNote}>One email when something matters. Never sold.</p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.standard}`}>
        <div className="container">
          <div className={styles.standardHeader}>
            <p className="label">The Standard</p>
            <h2 className={styles.sectionTitle}>Precision. Purity. Performance.</h2>
          </div>
          <div className={styles.standardGrid}>
            {standardPillars.map((s) => (
              <article key={s.numeral} className={styles.standardCard}>
                <span className={styles.standardNumeral}>{s.numeral}</span>
                <h3>{s.title.toUpperCase()}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.standardRuo}>
            For laboratory research use only. Not for human consumption.
          </p>
          <Link href="/the-standard" className="btn" style={{ marginTop: "2rem" }}>The House</Link>
        </div>
      </section>

      <ResearchSupport />

      <section className={styles.founder}>
        <div className="container">
          <blockquote>
            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
            <p>You do not chase the standard. You return to it.</p>
            <footer>
              <span className="label">Casey Christopher</span>
              <span>Founder</span>
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
