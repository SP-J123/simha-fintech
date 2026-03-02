import React from "react";
import Link from "next/link";
import {
    Coins,
    ChartLineUp,
    Users,
    PiggyBank,
    Gift,
    Graph,
    ChartPieSlice,
    Fire,
    ArrowsClockwise,
    LockKey,
    Storefront
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import ParticleNetwork from "@/components/animations/ParticleNetwork";

const features = [
    {
        icon: ChartLineUp,
        title: "Exchange Fee Reductions",
        desc: "Holders of the Simha token receive up to a 50% discount on spot and derivative trading fees across the Simha CEX and DEX platforms automatically."
    },
    {
        icon: Gift,
        title: "Ecosystem Airdrops",
        desc: "Staking the Simha token grants priority allocation for new projects launched through our CaaS (Crypto-as-a-Service) white-label platform."
    },
    {
        icon: Users,
        title: "Governance Rights",
        desc: "Participate in shaping the future of Simha Fintech. Vote on key protocol upgrades, new token listings, and ecosystem development grants."
    },
    {
        icon: PiggyBank,
        title: "High-Yield Staking",
        desc: "Lock your tokens in our audited smart contracts to earn protocol-generated revenue share. APYs scale with lock duration and ecosystem volume."
    },
    {
        icon: Coins,
        title: "Deflationary Mechanics",
        desc: "20% of net quarterly profits from the Simha Exchange and Consulting verticals are used to buy back and permanently burn the Simha token supply."
    },
    {
        icon: Graph,
        title: "API & VIP Tiers",
        desc: "Institutional token holdings unlock VIP API rate limits, dedicated account management, and priority technical support for enterprise deployments."
    },
    {
        icon: LockKey,
        title: "LP Staking Multipliers",
        desc: "Liquidity providers on the Simha DEX who lock their LP tokens alongside Simha Coin receive boosted yield multipliers, driving deep sustainable liquidity."
    },
    {
        icon: Storefront,
        title: "Merchant Gateway Integration",
        desc: "Use the Simha token to settle cross-border B2B payments through our enterprise merchant gateway with zero processing fees and instant finality."
    }
];

export const metadata = {
    title: "Simha Coin Ecosystem | The Utility Token",
    description: "Explore the utility, tokenomics, and benefits of the native Simha token. Powering governance, fee discounts, and high-yield staking across the Simha ecosystem.",
    keywords: [
        "crypto utility tokenomics",
        "exchange fee discount token",
        "deflationary digital asset",
        "staking rewards ecosystem",
        "crypto platform token",
        "Simha coin utility",
        "enterprise blockchain governance"
    ],
    openGraph: {
        title: "Simha Coin Ecosystem | The Utility Token",
        description: "Explore the utility, tokenomics, and benefits of the native Simha token.",
        type: "website",
    },
};

export default function CoinProductPage() {
    return (
        <>
            {/* ──────────────── HERO ──────────────── */}
            <section style={{ paddingTop: "var(--navbar-height)", position: "relative", minHeight: "80vh", display: "flex", alignItems: "center" }}>

                {/* Full-width interactive network background */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.6 }}>
                    <ParticleNetwork />
                </div>

                {/* Subtle dark overlay for readability */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, var(--bg-primary))", zIndex: 1, pointerEvents: "none" }} />

                <Container style={{ position: "relative", zIndex: 10 }}>
                    <div className="section" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: "99px", color: "#f59e0b", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Coins size={16} weight="bold" /> Product Suite
                            </span>

                            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Simha <span className="gradient-text" style={{ background: "linear-gradient(to right, #f59e0b, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Coin</span> Ecosystem
                            </h1>

                            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                The deflationary utility token designed specifically to capture and distribute value across all 21 Simha Fintech services, exchange platforms, and institutional verticals.
                            </p>

                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                                <Link href="/contact" className="btn-primary" style={{ background: "linear-gradient(to right, #f59e0b, #fbbf24)", boxShadow: "0 4px 14px 0 rgba(245, 158, 11, 0.39)", color: "#000" }}>Participate in Pre-Sale</Link>
                                <Link href="/services" className="btn-secondary">Read Tokenomics</Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── FEATURES GRID ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)", position: "relative", zIndex: 10 }}>
                <Container>
                    <SectionHeading
                        eyebrow="Token Utility"
                        heading="Engineered for"
                        gradientText="Value Accrual"
                        subtitle="Unlike governance-only tokens, the Simha token integrates deeply into our institutional product suite, creating a powerful flywheel of demand and utility."
                        align="center"
                    />

                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "1.5rem",
                            marginTop: "4rem"
                        }}
                    >
                        {features.map((feature, idx) => (
                            <AnimatedSection key={idx} variant="fade-up">
                                <div className="glass-card product-card-hover" style={{ padding: "2rem", height: "100%" }}>
                                    <div style={{
                                        width: "3rem",
                                        height: "3rem",
                                        borderRadius: "12px",
                                        background: "rgba(245, 158, 11, 0.1)",
                                        border: "1px solid rgba(245, 158, 11, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <feature.icon size={24} color="#f59e0b" weight="duotone" />
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{feature.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ──────────────── TOKENOMICS ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                        <AnimatedSection variant="slide-right">
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: "99px", color: "#f59e0b", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <ChartPieSlice size={16} weight="bold" /> Sustainable Distribution
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                Tokenomics <br /><span className="gradient-text" style={{ background: "linear-gradient(to right, #f59e0b, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Breakdown</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                A capped supply of 1 Billion tokens guarantees scarcity. The distribution schedule is structured to align long-term incentives between the core team, early investors, and the community.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                    <span style={{ color: "var(--text-primary)" }}>Ecosystem & Staking Rewards</span>
                                    <span style={{ color: "#f59e0b", fontWeight: 600 }}>40%</span>
                                </li>
                                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                    <span style={{ color: "var(--text-primary)" }}>Treasury & Liquid Reserves</span>
                                    <span style={{ color: "#f59e0b", fontWeight: 600 }}>25%</span>
                                </li>
                                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                    <span style={{ color: "var(--text-primary)" }}>Core Team & Advisors (4yr vesting)</span>
                                    <span style={{ color: "#f59e0b", fontWeight: 600 }}>20%</span>
                                </li>
                                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                    <span style={{ color: "var(--text-primary)" }}>Public Sale & Liquidity Provision</span>
                                    <span style={{ color: "#f59e0b", fontWeight: 600 }}>15%</span>
                                </li>
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div className="glass-card" style={{ padding: "3rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "350px", position: "relative" }}>
                                {/* Simulated Doughnut Chart using Conic Gradient */}
                                <div style={{
                                    width: "250px", height: "250px", borderRadius: "50%",
                                    background: "conic-gradient(#f59e0b 0% 144deg, rgba(245, 158, 11, 0.7) 144deg 234deg, rgba(245, 158, 11, 0.4) 234deg 306deg, rgba(245, 158, 11, 0.15) 306deg 360deg)",
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)"
                                }}>
                                    <div style={{ width: "160px", height: "160px", borderRadius: "50%", background: "var(--bg-card)", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>1,000M</span>
                                        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Supply</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── FLYWHEEL ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <div className="split-layout-reverse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

                        <AnimatedSection variant="slide-right">
                            <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981" }}>
                                        <ChartLineUp size={28} weight="duotone" />
                                    </div>
                                    <h4 style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>1. Exchange Revenue</h4>
                                    <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>Profits generated from trading fees across retail and B2B pairs.</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}><ArrowsClockwise size={24} color="var(--border-hover)" /></div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6" }}>
                                        <Coins size={28} weight="duotone" />
                                    </div>
                                    <h4 style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>2. Market Buy-Backs</h4>
                                    <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>20% of net profits are deployed to buy Simha tokens on the open market.</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}><ArrowsClockwise size={24} color="var(--border-hover)" /></div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>
                                        <Fire size={28} weight="duotone" />
                                    </div>
                                    <h4 style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>3. Permanent Burn</h4>
                                    <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>Purchased tokens are sent to a verifiable dead-address, reducing circulating supply forever.</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: "99px", color: "#f59e0b", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Fire size={16} weight="bold" /> Hyper-Deflationary
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                The Deflationary <br /><span className="gradient-text" style={{ background: "linear-gradient(to right, #f59e0b, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Flywheel</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                Unlike inflationary reward tokens, the Simha Coin is engineered to become increasingly scarce over time. We have instituted a programmatic quarterly buy-and-burn mechanism.
                            </p>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, borderLeft: "4px solid rgba(245,158,11,0.5)", paddingLeft: "1rem" }}>
                                &quot;Every trade executed on the Simha Exchange directly contributes to reducing the global circulating supply of the token.&quot;
                            </p>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <div style={{ position: "relative", zIndex: 10 }}>
                <CTABanner
                    heading="Join the Simha"
                    gradientText="Ecosystem"
                    subtitle="Be among the first to participate in the foundation of Europe's premier institutional digital asset platform. Early access opportunities are currently open for qualified entities."
                    primaryLabel="Apply for Whitelist"
                    primaryHref="/contact"
                    secondaryLabel="Review Whitepaper"
                    secondaryHref="/services"
                />
            </div>
        </>
    );
}
