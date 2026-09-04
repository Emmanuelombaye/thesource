import type { Metadata } from "next";

import Link from "next/link";

import PageHero from "@/components/PageHero";

import CertificateLookup from "@/components/CertificateLookup";

import styles from "./standard.module.css";



export const metadata: Metadata = {

  title: "The Standard",

  description: "Precision. Purity. Performance. — The house standards of The Source.",

};



const standards = [

  {

    numeral: "I",

    title: "American Laboratories",

    body: [

      "Every certificate the house holds was issued by an independent American laboratory — Vanguard Laboratory, Kovera Labs, or Freedom Diagnostics — named on the document, published as issued, never re-rendered.",

    ],

    link: { href: "mailto:admin@thesource.gold", label: "Request a certificate of analysis" },

  },

  {

    numeral: "II",

    title: "Third-Party Tested",

    body: [

      "Every batch is independently assayed for identity and purity before it carries the mark. The certificate of analysis names the lot it certifies — purity here is a document, not a claim.",

    ],

    link: { href: "mailto:admin@thesource.gold", label: "Request a certificate of analysis" },

  },

  {

    numeral: "III",

    title: "Dispatch",

    body: [

      "Orders leave the house within 24 to 48 hours — sealed, tracked, and unopened in transit. The vial that arrives is the vial that was tested.",

    ],

    link: { href: "/support", label: "See shipping & payments" },

  },

];



const badges = [

  { title: "Analytically Verified", text: "Assayed against a reference standard, lot by lot." },

  { title: "Third-Party Tested", text: "Every batch assayed for purity and potency." },

  { title: "Research Use Only", text: "Supplied strictly for laboratory research." },

  { title: "Fast Dispatch", text: "Out the door within 24 to 48 hours." },

  { title: "Secure Packaging", text: "Integrity protected from house to bench." },

  { title: "Precision Formulated", text: "Held to one specification, run to run." },

];



const vialStandard = [

  { title: "The gold-foil mark", text: "The interlocked TS, foil-stamped on every label." },

  { title: "Name & strength", text: "Clean, bold typography — the compound reads at arm's length." },

  { title: "The color pill", text: "The strength sits in a pill of the compound's own registry color — instant identification across the line." },

  { title: "Research use only", text: "Marked on every front label, without exception." },

  { title: "The back label", text: "Lot, manufacture, and expiry — with a QR code that resolves the batch." },

];



const faqs = [

  {

    q: "Are your compounds third-party tested?",

    a: "Yes. Every batch is independently tested by a third-party laboratory, and certificates of analysis are available on request. Purity is not a claim in this house — it is a document.",

  },

  {

    q: "How quickly will my order ship?",

    a: "Orders ship from the USA within 24 to 48 hours of payment confirmation. You will receive tracking by email as soon as your order is dispatched.",

  },

  {

    q: "Which payment methods do you accept?",

    a: "Card, Zelle, Venmo, and Cash App. Card orders use a secure card checkout. Zelle, Venmo, and Cash App orders are confirmed instantly — send payment from your app with your order number in the memo, and your order ships once payment is received, usually the same day.",

  },

  {

    q: "Do you offer volume pricing?",

    a: "Yes — quietly, and automatically. Five or more units of an item earn 5% off that line; ten or more earn 10%. Volume pricing stacks with sale pricing up to the house ceiling of 30% off the list price. No codes are required; the rate applies at checkout.",

  },

  {

    q: "What is your research-use policy?",

    a: "All The Source research compounds are supplied strictly for laboratory research use only and are not for human consumption. By placing an order you confirm that you are a qualified researcher and that products will be used exclusively for research purposes.",

  },

];



export default function TheStandardPage() {

  return (

    <>

      <PageHero

        label="Est. MMXXV"

        title="The Standard."

        subtitle="Precision. Purity. Performance."

      />



      <section className={`section ${styles.story}`}>

        <div className="container">

          <p className="label">The Story</p>

          <h2 className={styles.heading}>The gold standard, made a house.</h2>

          <div className={styles.prose}>

            <p>

              The Source was founded in MMXXV by Casey Christopher on a single

              conviction: the research world deserves what the luxury world takes

              for granted. Provenance. Precision. Presentation. The care you

              would expect of a house, applied to a vial.

            </p>

            <p>

              So the house begins where most stop. One master vial governs the

              entire line — the same clear glass, the same brushed-gold cap, the

              same weight in the hand. Identity is carried by the label, never by

              the photograph. Consistency is the first form of trust.

            </p>

            <p>

              Testing is done by independent American laboratories, and every

              certificate the house holds is published beside the vial it

              certifies. Every detail — from the rigid white box to the engraved

              travel vessel — is held to one line, repeated without exception. We

              call it the gold standard because nothing less would carry the name.

            </p>

          </div>

          <blockquote className={styles.quote}>

            <p>&ldquo;You are your greatest investment.&rdquo;</p>

            <footer>Casey Christopher, Founder</footer>

          </blockquote>

        </div>

      </section>



      <section className={`section ${styles.standards}`}>

        <div className="container">

          <p className="label label-gold">The House Standards</p>

          <h2 className={styles.heading}>Three lines, never crossed.</h2>

          <div className={styles.standardList}>

            {standards.map((s) => (

              <article key={s.numeral} className={styles.standardItem}>

                <span className={styles.numeral}>{s.numeral}</span>

                <div>

                  <h3>{s.title}</h3>

                  {s.body.map((paragraph) => (

                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>

                  ))}

                  <a href={s.link.href}>{s.link.label} →</a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      <section className={styles.badges}>

        <div className="container">

          <div className={styles.badgeGrid}>

            {badges.map((b) => (

              <div key={b.title} className={styles.badge}>

                <p className="label label-gold">{b.title}</p>

                <p className={styles.badgeText}>{b.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section className={`section ${styles.verify}`}>

        <div className="container" style={{ maxWidth: 560 }}>

          <p className="label">Verification</p>

          <h2 className={styles.heading}>Verify your vial.</h2>

          <p className={styles.verifyText}>

            Enter the lot or report number from your label. Where the laboratory

            recorded one, its certificate opens straight away; otherwise the house

            will confirm the record within 24 hours.

          </p>

          <div style={{ marginTop: "2rem" }}>

            <CertificateLookup compact inputId="lot-standard" />

          </div>

        </div>

      </section>



      <section className={`section ${styles.vialStandard}`}>

        <div className="container">

          <p className="label label-gold">The Vial Standard</p>

          <h2 className={styles.heading}>Every vial, to the letter.</h2>

          <div className={styles.vialGrid}>

            {vialStandard.map((item) => (

              <article key={item.title} className={styles.vialItem}>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </article>

            ))}

          </div>

          <p className={styles.vialNote}>

            3ml vial · matte soft-touch label · water &amp; oil resistant · store 2–8°C (36–46°F)

          </p>

        </div>

      </section>



      <section className={`section ${styles.mark}`}>

        <div className="container">

          <p className="label label-gold">The Mark</p>

          <h2 className={styles.heading}>A standard is a thing you can hold.</h2>

          <p className={styles.markText}>

            The engraved vessel carries the whole idea in one object: machined gold,

            a single monogram, nothing extra. It is the standard made tangible — the

            reason the house exists, small enough to travel.

          </p>

        </div>

      </section>



      <section className={`section ${styles.shipping}`}>

        <div className="container">

          <p className="label label-gold">Shipping & Payments</p>

          <h2 className={styles.heading}>Handled with the same care.</h2>

          <div className={styles.shipGrid}>

            <div>

              <span className={styles.numeral}>I</span>

              <h3>Ships from the USA</h3>

              <p>Every order is prepared and dispatched from the United States within 24–48 hours. Tracking follows by email.</p>

            </div>

            <div>

              <span className={styles.numeral}>II</span>

              <h3>Complimentary Shipping</h3>

              <p>Complimentary U.S. shipping on every order — applied automatically at checkout.</p>

            </div>

            <div>

              <span className={styles.numeral}>III</span>

              <h3>Payments</h3>

              <p>Card · Zelle · Venmo · Cash App. Manual rails confirm your order instantly; it ships once payment is received.</p>

            </div>

          </div>

        </div>

      </section>



      <section className={`section ${styles.faq}`}>

        <div className="container">

          <p className="label label-gold">Questions</p>

          <h2 className={styles.heading}>Asked &amp; answered.</h2>

          <dl className={styles.faqList}>

            {faqs.map((f) => (

              <div key={f.q} className={styles.faqItem}>

                <dt>{f.q}</dt>

                <dd>{f.a}</dd>

              </div>

            ))}

          </dl>

        </div>

      </section>



      <p className={styles.ruo}>

        All The Source research compounds are for laboratory research use only — not for human consumption.

      </p>

    </>

  );

}

