import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us — Simha Fintech | Get in Touch",
    description:
        "Contact Simha Fintech for institutional blockchain solutions, regulatory compliance consulting, and crypto infrastructure services. EU-based team available for consultations.",
    keywords: [
        "contact Simha Fintech",
        "blockchain consultation",
        "crypto services contact",
        "fintech Poland contact",
    ],
    openGraph: {
        title: "Contact Simha Fintech",
        description: "Get in touch with our team for blockchain and crypto solutions.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
