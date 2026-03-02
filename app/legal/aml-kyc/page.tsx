import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
    title: "AML/KYC Policy | Simha Fintech",
    description: "Anti-Money Laundering & Know Your Customer policy frameworks for Simha Fintech institutional clients.",
};

export default function AMLPage() {
    return (
        <div style={{ paddingBottom: "6rem" }}>
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
                                AML & KYC <span className="gradient-text">Policy</span>
                            </h1>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            <Container>
                <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <AnimatedSection variant="fade-up" delay={0.2}>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2rem" }}>1. European Compliance Framework</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Simha Fintech sp. z o.o., as a registered entity within Poland, operates in strict compliance with the European Union&apos;s Fifth and Sixth Anti-Money Laundering Directives (5AMLD / 6AMLD), the Markets in Crypto-Assets (MiCA) regulation framework, and FATF (Financial Action Task Force) guidelines. Preventative measures against money laundering and counter-terrorism financing (CTF) are hardcoded into our enterprise architecture.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>2. B2B Corporate Onboarding (KYB)</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Prior to utilizing any Simha Fintech exchange APIs, CaaS white-labels, or custodial vaults, all enterprise clients must undergo exhaustive Know Your Business (KYB) procedures. This includes, but is not limited to:
                        </p>
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                            <li style={{ marginBottom: "0.5rem" }}>Verification of corporate standing via local registries (e.g., KRS, Companies House).</li>
                            <li style={{ marginBottom: "0.5rem" }}>Identification of all Ultimate Beneficial Owners (UBOs) holding &gt;10% equity.</li>
                            <li style={{ marginBottom: "0.5rem" }}>Source of Funds and Source of Wealth documentation.</li>
                            <li style={{ marginBottom: "0.5rem" }}>Board resolution approving the opening of the digital asset account.</li>
                        </ul>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Ongoing Transaction Monitoring</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Through integrated partnerships with leading blockchain forensics firms (Chainalysis, Elliptic), every digital asset deposit and withdrawal running through Simha Fintech infrastructure is screened in real-time. Transactions linked to known darknet markets, sanctioned entities (OFAC, EU Consolidated List), or mixers/tumblers are automatically quarantined and reported to the relevant Polish and EU Financial Intelligence Units (FIU).
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>4. Non-Cooperative Jurisdictions</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Simha Fintech will not establish enterprise relationships with entities registered in jurisdictions blacklisted by FATF, or countries subject to comprehensive European Union embargoes.
                        </p>

                    </AnimatedSection>
                </div>
            </Container>
        </div>
    );
}
