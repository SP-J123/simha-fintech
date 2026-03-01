import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
    title: "Privacy Policy | Simha Fintech",
    description: "Learn how Simha Fintech collects, processes, and protects your data in accordance with GDPR.",
};

export default function PrivacyPage() {
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
                                Privacy <span className="gradient-text">Policy</span> & GDPR
                            </h1>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CONTENT ──────────────── */}
            <Container>
                <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <AnimatedSection variant="fade-up" delay={0.2}>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2rem" }}>1. Introduction & Scope</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Simha Fintech sp. z o.o. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Polish laws. This policy explains how we collect, process, manage, and safeguard your data when you visit our website or utilize our B2B exchange and custody infrastructure.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>2. Data Controller Information</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            The Data Controller for any personal information processed under this policy is:<br />
                            <strong>Simha Fintech sp. z o.o.</strong><br />
                            KRS: 0001017042<br />
                            Registered Address: Kraków, Poland<br />
                            For all privacy-related inquiries, contact our Data Protection Officer (DPO) at: <a href="mailto:privacy@simhafintech.com" style={{ color: "var(--brand-primary)" }}>privacy@simhafintech.com</a>.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Data Collection Minimalization</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            We adhere strictly to data minimization principles. We collect only what is legally necessary to onboard B2B enterprise entities and what is required to fulfill our strict AML/KYC regulatory obligations. We do not sell user data to third-party marketing firms under any circumstances. Data collected during the corporate due diligence process is encrypted and stored exclusively on secure servers located within the European Economic Area (EEA).
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>4. Your Rights Under GDPR</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            As a Data Subject, you possess the right to:
                        </p>
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                            <li style={{ marginBottom: "0.5rem" }}>Request access to your personal data.</li>
                            <li style={{ marginBottom: "0.5rem" }}>Request correction or erasure of your data (the &quot;Right to be Forgotten&quot;), subject to our overriding legal or regulatory retention obligations regarding financial transactions.</li>
                            <li style={{ marginBottom: "0.5rem" }}>Object to processing or request restriction of processing.</li>
                            <li style={{ marginBottom: "0.5rem" }}>Data portability.</li>
                        </ul>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>5. Data Retention</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Personal and corporate data collected for AML/KYC purposes is legally required to be retained for a minimum of 5 years following the cessation of the business relationship, as mandated by the Fifth Anti-Money Laundering Directive (5AMLD). Server logs and anonymized telemetry data are purged automatically after 90 days.
                        </p>

                    </AnimatedSection>
                </div>
            </Container>
        </div>
    );
}
