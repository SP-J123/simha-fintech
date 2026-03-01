import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
    title: "Terms of Service | Simha Fintech",
    description: "Official Terms of Service for Simha Fintech operational platforms and services.",
};

export default function TermsPage() {
    return (
        <div style={{ paddingBottom: "6rem" }}>
            {/* ──────────────── PAGE HERO ──────────────── */}
            <section className="page-hero" style={{ paddingBottom: "3rem", borderBottom: "1px solid var(--border)", marginBottom: "3rem" }}>
                <Container>
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.4rem 0.8rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "99px", color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                Last Updated: January 15, 2025
                            </span>
                            <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Terms of <span className="gradient-text">Service</span>
                            </h1>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CONTENT ──────────────── */}
            <Container>
                <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <AnimatedSection variant="fade-up" delay={0.2}>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2rem" }}>1. Acceptance of Terms</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            By accessing and using the services provided by Simha Fintech sp. z o.o. (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a limited liability company registered in Kraków, Poland under KRS number 0001017042, you agree to be bound by these Terms of Service (&quot;Terms&quot;). These Terms govern your access to our website, trading platforms, API infrastructure, consulting services, and any related applications. If you do not agree to these Terms, you must not access or use our services.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>2. B2B Services & Institutional Use</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Simha Fintech primarily provides Business-to-Business (B2B) infrastructure. Our CaaS (Crypto-as-a-Service) white-label platform, MPC custody solutions, and institutional matching engines are designed exclusively for registered corporate entities, qualified financial institutions, and professional trading desks. We reserve the right to refuse service to any entity that fails our enterprise due diligence checks.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Regulatory Compliance</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            As an EU-registered entity, Simha Fintech operates strictly within the legal frameworks established by the Republic of Poland and the European Union.
                        </p>
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                            <li style={{ marginBottom: "0.5rem" }}>All clients using our exchange infrastructure must implement robust AML/KYC policies.</li>
                            <li style={{ marginBottom: "0.5rem" }}>We do not solicit users from jurisdictions where digital asset trading is explicitly banned.</li>
                            <li style={{ marginBottom: "0.5rem" }}>We hold the right to freeze accounts or restrict API access if there is reasonable suspicion of illicit activity, pending regulatory investigation.</li>
                        </ul>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>4. Intellectual Property</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            All software, algorithms, matching engines, smart contracts, UI designs, and documentation provided by Simha Fintech remain the exclusive intellectual property of Simha Fintech sp. z o.o. Unless explicitly stated in a signed enterprise licensing agreement, you are granted a limited, non-exclusive, non-transferable license to utilize our software as a service (SaaS). Reverse engineering, decompiling, or duplicating our proprietary systems is strictly prohibited.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>5. Limitation of Liability</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            To the maximum extent permitted by applicable law, Simha Fintech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. This includes, but is not limited to, loss of profits, loss of data, loss of digital assets due to client-side private key mismanagement, or losses resulting from unprecedented market volatility.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>6. Amendments</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            We reserve the right to modify these Terms at any time. Material changes will be communicated to enterprise clients via their registered administrative emails at least 30 days prior to the changes taking effect. Continued use of our infrastructure after changes constitute acceptance of the revised Terms.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>7. Governing Law</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            These Terms shall be governed by and construed in accordance with the laws of the Republic of Poland. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in Kraków, Poland.
                        </p>

                    </AnimatedSection>
                </div>
            </Container>
        </div>
    );
}
