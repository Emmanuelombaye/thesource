import type { Metadata } from "next";

import PageHero from "@/components/PageHero";

import styles from "./support.module.css";



export const metadata: Metadata = {
  title: "Client Advisor",
  description: "Research support, shipping, payments, and frequently asked questions.",
};



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



export default function SupportPage() {

  return (

    <>

      <PageHero
        label="Concierge"
        title="Research support."
        subtitle="Questions about orders, certificates, shipping, or payments."
      />



      <section className="section">

        <div className="container">

          <div className={styles.contact}>

            <p className="label label-gold">Direct Contact</p>

            <p>

              <a href="mailto:admin@thesource.gold" className={styles.email}>

                admin@thesource.gold

              </a>

            </p>

            <p className={styles.contactNote}>

              Certificate requests, order inquiries, and lot verification.

            </p>

          </div>



          <div className={styles.shipping} id="shipping">

            <p className="label">Shipping & Payments</p>

            <div className={styles.shipGrid}>

              <div>

                <h3>Ships from the USA</h3>

                <p>24–48 hour dispatch. Tracking by email.</p>

              </div>

              <div>

                <h3>Complimentary Shipping</h3>

                <p>Complimentary U.S. shipping on every order.</p>

              </div>

              <div>

                <h3>Payments</h3>

                <p>Card · Zelle · Venmo · Cash App</p>

              </div>

            </div>

          </div>



          <div className={styles.faq} id="faq">

            <p className="label label-gold">Questions</p>

            <h2 className={styles.faqTitle}>Asked & answered.</h2>

            <dl>

              {faqs.map((f) => (

                <div key={f.q} className={styles.faqItem}>

                  <dt>{f.q}</dt>

                  <dd>{f.a}</dd>

                </div>

              ))}

            </dl>

          </div>

        </div>

      </section>



      <p className={styles.ruo}>

        All The Source research compounds are for laboratory research use only — not for human consumption.

      </p>

    </>

  );

}

