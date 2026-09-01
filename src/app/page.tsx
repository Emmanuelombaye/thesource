import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollRow from "@/components/ScrollRow";
import HeroFilm from "@/components/HeroFilm";
import CampaignModule from "@/components/CampaignModule";
import CampaignImage from "@/components/CampaignImage";
import ClarityStrip from "@/components/home/ClarityStrip";
import { CollectionCategoryLinks } from "@/components/CollectionGuide";
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
      <section className={styles.hero}>
        <div className={styles.heroScene}>
          <HeroFilm />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className={`${styles.heroTitle} reveal`}>
              You found <em>The Source.</em>
            </h1>
            <p className={`${styles.heroTagline} reveal`}>Precision. Purity. Performance.</p>
            <div className={`${styles.heroCtas} reveal`}>
              <Link href="/collection" className="btn">
                Explore the Collection
              </Link>
              <Link href="/the-foundations" className="btn-text">
                The Foundations Kit
              </Link>
              <Link href="/collection" className="btn-text">
                Or build your own protocol
              </Link>
            </div>
          </div>
          <ClarityStrip embedded />
        </div>

        <div className={styles.heroFade} aria-hidden="true" />
      </section>

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

      <section className={`section ${styles.collection}`}>
        <div className="container">
          <div className={styles.collectionIntro}>
            <p className="label label-gold">The Collection</p>
            <h2 className={styles.sectionTitle}>Held to one standard.</h2>
            <p className={styles.sectionIntro}>
              One master vial governs the entire line — the same clear glass, the same
              brushed-gold cap, the same weight in the hand. Identity is carried by the
              label. Consistency is the first form of trust.
            </p>
            <p className={styles.sectionIntro}>
              Browse by category — metabolic, recovery, longevity, radiance, growth — or
              open any card for amount, price, lot status, and certificate access.
            </p>
            <p className={styles.collectionRuo}>
              For laboratory research use only. Not for human consumption.
            </p>
            <p className={`label ${styles.collectionGuideLabel}`}>Select a research focus</p>
            <CollectionCategoryLinks />
            <Link href="/collection" className="btn">
              View The Collection
            </Link>
          </div>
          <div className={styles.productGrid}>
            {collectionProducts.map((p) => (
              <ProductCard key={p.slug} product={p} variant="homepage" />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.invitation}`} id="invitation">
        <div className="container">
          <div className={styles.invitationInner}>
            <p className="label label-gold">The Invitation</p>
            <h2 className={styles.sectionTitle}>Twenty percent off your first order.</h2>
            <p className={styles.sectionIntro}>
              Join the house list for first sight of new compounds, batch certificates, and Drop 001.
            </p>
            <form className={styles.invitationForm} action="#" method="post">
              <input type="text" className="input" placeholder="First name" aria-label="First name" />
              <input type="email" className="input" placeholder="Email address" aria-label="Email address" required />
              <button type="submit" className="btn">Claim 20% off</button>
            </form>
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
