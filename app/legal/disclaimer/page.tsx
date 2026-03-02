import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
    title: "Risk Disclaimer | Simha Fintech",
    description: "Institutional risk declarations regarding digital assets and exchange execution.",
};

export default function RiskDisclaimerPage() {
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
                                Risk <span className="gradient-text">Disclaimer</span>
                            </h1>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            <Container>
                <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <AnimatedSection variant="fade-up" delay={0.2}>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2rem" }}>1. General Institutional Risk</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Digital assets, cryptocurrencies, and derived financial instruments are subject to extreme market volatility. The value of your enterprise treasury or client portfolios may fluctuate significantly over short periods. Simha Fintech provides the technological liquidity infrastructure and matching engines, but we do not provide financial advice, guarantees of returns, or protection against systemic market failure.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>2. Smart Contract & Protocol Risks</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Interaction with the Simha DEX, CaaS platforms, or any decentralized protocols carries inherent technological risks. While our codebase undergoes rigorous third-party institutional audits and is written to the highest standards, zero-day vulnerabilities in underlying blockchains (e.g., Ethereum, Solana) or unforeseen smart contract exploits cannot be entirely ruled out.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Custodial and Key Management Risk</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            For clients utilizing non-custodial software configurations or generating their own key shares in our MPC architecture, the final responsibility for securing the physical access to those keys rests entirely with the client organization. Loss of access to your cryptographic key shard may result in the permanent and irreversible loss of funds. Simha Fintech cannot recover assets if the client-side quorum is compromised or deleted.
                        </p>

                    </AnimatedSection>
                </div>
            </Container>
        </div>
    );
}
