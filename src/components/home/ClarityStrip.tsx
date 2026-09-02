import Link from "next/link";
import styles from "./ClarityStrip.module.css";

const items = [
  {
    label: "What",
    title: "Research materials",
    text: "Research compounds — The Collection, The Foundations Kit, and Atelier essentials. Clear identity, current documentation, and direct research support.",
    href: "/collection",
    action: "Explore the Collection",
  },
  {
    label: "Who",
    title: "Qualified researchers",
    text: "Supplied strictly for laboratory research. Not for human consumption. By order, you confirm research-use intent.",
    href: "/legal/research-use",
    action: "Research Use Policy",
  },
  {
    label: "Proof",
    title: "Batch documentation",
    text: "Certificate of analysis available on request. Verify any lot by number.",
    href: "/certificates",
    action: "Certificate Lookup",
  },
];

interface ClarityStripProps {
  /** Render inside homepage hero — PDF first-screen What/Who/Proof */
  embedded?: boolean;
}

export default function ClarityStrip({ embedded = false }: ClarityStripProps) {
  const grid = (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.label} className={styles.item}>
          <p className="label label-gold">{item.label}</p>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.text}>{item.text}</p>
          <Link href={item.href} className={styles.action}>
            {item.action} →
          </Link>
        </article>
      ))}
    </div>
  );

  if (embedded) {
    return (
      <div className={styles.embedded} aria-label="What The Source offers">
        {grid}
      </div>
    );
  }

  return (
    <section className={styles.strip} aria-label="What The Source offers">
      <div className="container">{grid}</div>
    </section>
  );
}
