import type { Metadata } from "next";
import Container from "@/components/ui/Container";

const legalPages: Record<string, { title: string; description: string }> = {
    terms: {
        title: "Terms of Service",
        description: "Simha Fintech Terms of Service — the rules governing your use of our platform and services.",
    },
    privacy: {
        title: "Privacy Policy",
        description: "How Simha Fintech collects, uses, and protects your personal data. GDPR-compliant.",
    },
    cookies: {
        title: "Cookie Policy",
        description: "Simha Fintech Cookie Policy — how we use cookies and similar tracking technologies.",
    },
    disclaimer: {
        title: "Risk Disclaimer",
        description: "Important risk information regarding cryptocurrency and blockchain services provided by Simha Fintech.",
    },
    "aml-kyc": {
        title: "AML/KYC Policy",
        description: "Simha Fintech's Anti-Money Laundering and Know Your Customer compliance policies.",
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const page = legalPages[slug];
    return {
        title: page?.title ?? "Legal",
        description: page?.description ?? "Simha Fintech legal information.",
    };
}

export async function generateStaticParams() {
    return Object.keys(legalPages).map((slug) => ({ slug }));
}

export default async function LegalPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const page = legalPages[slug];

    if (!page) {
        return (
            <section className="section">
                <Container>
                    <h1>Page Not Found</h1>
                    <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
                        The legal page you&apos;re looking for does not exist.
                    </p>
                </Container>
            </section>
        );
    }

    return (
        <section className="section">
            <Container>
                <h1>{page.title}</h1>
                <p style={{ color: "var(--text-muted)", marginTop: "1rem", maxWidth: "640px" }}>
                    Full legal content will be added in Phase 3. This is a placeholder for the {page.title} page.
                </p>
            </Container>
        </section>
    );
}
