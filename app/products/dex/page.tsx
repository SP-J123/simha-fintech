import React from "react";
import Link from "next/link";
import {
    CloudArrowUp,
    CurrencyCircleDollar,
    LockKey,
    Network,
    Robot,
    Code,
    ChartLineUp,
    ArrowsOut,
    Hexagon,
    ChartPieSlice,
    Handshake
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import DexVisual from "@/components/animations/DexVisual";

const features = [
    {
        icon: CurrencyCircleDollar,
        title: "Concentrated Liquidity AMM",
        desc: "Maximize capital efficiency with custom price ranges. LPs earn higher fees on lower capital deposits while traders get deeper liquidity around active market prices."
    },
    {
        icon: LockKey,
        title: "Non-Custodial & Audited",
        desc: "Users remain in full control of their private keys. Smart contracts are fully audited by top-tier security firms, ensuring enterprise-grade safety against exploits."
    },
    {
        icon: Network,
        title: "Cross-Chain Interoperability",
        desc: "Natively integrated bridging infrastructure supports instant swaps across Ethereum, Binance Smart Chain, Polygon, Arbitrum, and custom Subnets."
    },
    {
        icon: Code,
        title: "Developer API & SDK",
        desc: "Easily integrate our DEX liquidity routing into your own DApps, wallets, or yield aggregators using our comprehensive TypeScript SDK."
    },
    {
        icon: Robot,
        title: "MEV Protection",
        desc: "Built-in protection against front-running and sandwich attacks. Private transaction routing ensures users always get the price they expect."
    },
    {
        icon: CloudArrowUp,
        title: "Gas-Optimized Routing",
        desc: "Smart order routing splits trades across multiple pools to secure the best average entry price with minimal slippage and optimal gas consumption."
    },
    {
        icon: ChartPieSlice,
        title: "Dynamic Fee Tiers",
        desc: "LPs can select from multiple fee tiers (0.01%, 0.05%, 0.3%, 1.0%) to properly align their risk/reward profile with the volatility of the underlying asset pair."
    },
    {
        icon: Handshake,
        title: "Permissioned Pools",
        desc: "Launch KYC-gated liquidity pools tailored for institutional participants. Enforce whitelists at the smart contract level to guarantee regulatory compliance in DeFi."
    }
];

export const metadata = {
    title: "Simha DEX Protocol | Decentralized Trading",
    description: "Non-custodial, cross-chain decentralized trading protocol with concentrated liquidity and MEV protection. Build the future of scalable DeFi.",
    keywords: [
        "concentrated liquidity AMM",
        "cross-chain DEX protocol",
        "MEV protection decentralized exchange",
        "non-custodial trading",
        "DeFi platform",
        "smart contract exchange",
        "gas-optimized routing"
    ],
    openGraph: {
        title: "Simha DEX Protocol | Decentralized Trading",
        description: "Non-custodial, cross-chain decentralized trading protocol with concentrated liquidity and MEV protection.",
        type: "website",
    },
};

export default function DexProductPage() {
    return (
        <>
            {/* ──────────────── HERO ──────────────── */}
            <section style={{ paddingTop: "var(--navbar-height)", position: "relative", overflow: "hidden" }}>

                {/* Abstract Background Glow */}
                <div style={{ position: "absolute", top: "10%", left: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 60%)", filter: "blur(60px)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "-10%", right: "10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <Container>
                    <div className="section" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", textAlign: "center" }}>

                        <div style={{ position: "relative", zIndex: 10, maxWidth: "800px", margin: "0 auto" }}>
                            <AnimatedSection variant="fade-up">
                                <span style={{
                                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "99px", color: "var(--brand-secondary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                                }}>
                                    <CloudArrowUp size={16} weight="bold" /> Product Suite
                                </span>

                                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                    Simha <span className="gradient-text" style={{ background: "linear-gradient(to right, #06b6d4, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DEX</span> Protocol
                                </h1>

                                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                    A next-generation decentralized trading protocol featuring concentrated liquidity, MEV protection, and seamless cross-chain interoperability. Non-custodial, permissionless, and hyper-efficient.
                                </p>

                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                                    <Link href="/contact" className="btn-primary" style={{ background: "linear-gradient(to right, #06b6d4, #3b82f6)", boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.39)" }}>Explore Protocol</Link>
                                    <Link href="/services" className="btn-secondary">Read Documentation</Link>
                                </div>

                                <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--brand-secondary)" }}>$4.2B+</div>
                                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Volume</div>
                                    </div>
                                    <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--brand-primary)" }}>$850M</div>
                                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Value Locked</div>
                                    </div>
                                    <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>&lt; 0.1%</div>
                                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Avg Slippage</div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* DEX Visual */}
                        <div style={{ marginTop: "2rem" }}>
                            <AnimatedSection variant="fade-up" delay={0.2}>
                                <DexVisual />
                            </AnimatedSection>
                        </div>

                    </div>
                </Container>
            </section>

            {/* ──────────────── FEATURES GRID ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Protocol Features"
                        heading="Efficiency Meets"
                        gradientText="Decentralization"
                        subtitle="The Simha DEX Protocol is architected from the ground up to solve the liquidity fragmentation and capital inefficiency problems plaguing legacy AMMs."
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
                                        background: "rgba(6, 182, 212, 0.1)",
                                        border: "1px solid rgba(6, 182, 212, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <feature.icon size={24} color="var(--brand-secondary)" weight="duotone" />
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

            {/* ──────────────── MECHANICS ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                        <AnimatedSection variant="slide-right">
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "99px", color: "var(--brand-secondary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <ChartLineUp size={16} weight="bold" /> Capital Efficiency
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                Concentrated <br /><span className="gradient-text-cyan">Liquidity Mechanics</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                Unlike traditional AMMs where liquidity is spread infinitely from zero to infinity, the Simha DEX allows Liquidity Providers (LPs) to allocate capital within customized price ranges.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ padding: "0.5rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "8px", color: "var(--brand-secondary)" }}>
                                        <ArrowsOut size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Reduced Slippage</h4>
                                        <p style={{ color: "var(--text-dim)", fontSize: "0.95rem" }}>Denser liquidity around the active trading price means massive trades execute with near-zero slippage.</p>
                                    </div>
                                </li>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ padding: "0.5rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "8px", color: "var(--brand-secondary)" }}>
                                        <CurrencyCircleDollar size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Maximized Yield</h4>
                                        <p style={{ color: "var(--text-dim)", fontSize: "0.95rem" }}>LPs earn up to 400x the trading fees on the same capital deposit by concentrating it where the volume actually happens.</p>
                                    </div>
                                </li>
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ position: "relative", width: "100%", height: "200px", background: "linear-gradient(to top, rgba(6, 182, 212, 0.1), transparent)", borderBottom: "2px solid var(--border)", display: "flex", alignItems: "flex-end", justifyItems: "flex-end", justifyContent: "center", gap: "4px" }}>
                                    {/* Simulated Bar Chart for Liquidity */}
                                    <div style={{ width: "8%", height: "10%", background: "var(--bg-card-hover)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "15%", background: "var(--bg-card-hover)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "25%", background: "var(--bg-card-hover)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "45%", background: "var(--brand-primary)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "85%", background: "var(--brand-secondary)", borderRadius: "4px 4px 0 0", position: "relative" }}>
                                        <div style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "var(--text-primary)", color: "var(--bg-primary)", fontSize: "0.75rem", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>PRICE</div>
                                        <div style={{ position: "absolute", top: "0px", bottom: "0px", left: "50%", width: "2px", background: "var(--text-primary)" }} />
                                    </div>
                                    <div style={{ width: "8%", height: "65%", background: "var(--brand-primary)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "35%", background: "var(--bg-card-hover)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "20%", background: "var(--bg-card-hover)", borderRadius: "4px 4px 0 0" }} />
                                    <div style={{ width: "8%", height: "10%", background: "var(--bg-card-hover)", borderRadius: "4px 4px 0 0" }} />
                                </div>
                                <p style={{ marginTop: "1rem", color: "var(--text-dim)", fontSize: "0.9rem", textAlign: "center" }}>
                                    Traditional AMM vs Concentrated Liquidity Profile
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── NETWORKS ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)", textAlign: "center" }}>
                <Container>
                    <AnimatedSection variant="fade-up">
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "99px", color: "var(--brand-primary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                        }}>
                            <Network size={16} weight="bold" /> Interoperability
                        </span>
                        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>
                            Omnichain <span className="gradient-text">Routing</span>
                        </h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 3rem auto" }}>
                            Swap assets seamlessly across isolated ecosystems without relying on centralized bridges or wrapped tokens.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "1rem",
                            maxWidth: "900px",
                            margin: "0 auto"
                        }}
                    >
                        {["Ethereum", "Arbitrum", "Optimism", "Polygon", "Binance Smart Chain", "Avalanche", "Solana", "Base"].map((network, i) => (
                            <AnimatedSection key={i} variant="fade-up">
                                <div className="glass-card" style={{ padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "0.75rem", borderRadius: "100px" }}>
                                    <Hexagon size={24} color="var(--brand-secondary)" weight="duotone" />
                                    <span style={{ fontWeight: 500, color: "var(--text-primary)" }}>{network}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}

            <CTABanner
                heading="Ready to Integrate"
                gradientText="Deep Liquidity?"
                subtitle="Route your cross-chain swaps through the Simha DEX Protocol or fork our battle-tested smart contracts to launch your own decentralized trading venue."
                primaryLabel="Talk to our Engineers"
                primaryHref="/contact"
                secondaryLabel="View Smart Contracts"
                secondaryHref="/services"
            />
        </>
    );
}
