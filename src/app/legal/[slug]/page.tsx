import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import styles from "./legal.module.css";

const legalPages: Record<
  string,
  { title: string; label: string; content: string[] }
> = {
  "research-use": {
    title: "Research Use Policy",
    label: "Legal",
    content: [
      "All The Source research compounds are supplied strictly for laboratory research use only and are not for human consumption.",
      "By placing an order you confirm that you are a qualified researcher and that products will be used exclusively for research purposes.",
      "The Source does not provide dosing guidance, personal protocols, or body-outcome information. Product intent and research-use language require specialized legal review.",
      "A footer disclaimer does not correct contradictory merchandising or page copy.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    label: "Legal",
    content: [
      "The Source respects your privacy. Order and contact information is used solely to fulfill orders and provide research support.",
      "We do not sell personal information. Payment details are processed through secure third-party providers.",
      "For privacy inquiries, contact admin@thesource.gold.",
    ],
  },
  terms: {
    title: "Terms of Service",
    label: "Legal",
    content: [
      "By using this website and placing an order, you agree to these terms.",
      "All products are sold for laboratory research use only. The Source makes no claims regarding outcomes, benefits, or suitability for any purpose beyond approved research use.",
      "Pricing, availability, and product specifications are subject to change. Volume pricing applies automatically at checkout where applicable.",
      "Orders ship from the USA within 24–48 hours of payment confirmation. Complimentary U.S. shipping applies to all orders.",
      "For questions, contact admin@thesource.gold.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) return { title: "Legal" };
  return { title: page.title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHero label={page.label} title={page.title} />
      <section className="section">
        <div className={`container ${styles.content}`}>
          {page.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
