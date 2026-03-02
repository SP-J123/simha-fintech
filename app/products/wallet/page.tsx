import React from "react";
import Link from "next/link";
import {
    ShieldCheck,
    Fingerprint,
    Key,
    UserFocus,
    CirclesFour,
    Vault,
    HardDrives,
    Cpu,
    FlowArrow,
    UsersThree,
    Clock,
    Bank
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import SecurityFortress from "@/components/animations/SecurityFortress";

const features = [
    {
        icon: Key,
        title: "Multi-Party Computation",
        desc: "Private keys are never constructed in full. Distributed key shares ensure there's no single point of failure and protect against both external hacks and internal collusion."
    },
    {
        icon: Vault,
        title: "Automated Cold Tiering",
        desc: "Smart treasury management automatically sweeps excess funds into air-gapped cold storage while maintaining sufficient operational liquidity in warm and hot wallets."
    },
    {
        icon: UserFocus,
        title: "Granular Policy Engine",
        desc: "Define custom transaction approval workflows. Set limits based on time, token, geography, or destination, requiring multiple physical approvals for large transfers."
    },
    {
        icon: Fingerprint,
        title: "Hardware & Biometrics",
        desc: "Approvals require biometric authentication (FaceID/TouchID) or physical security keys (YubiKey/Ledger/Trezor) mapped to specific corporate roles."
    },
    {
        icon: CirclesFour,
        title: "Chain Agnostic",
        desc: "Natively support Bitcoin, Ethereum, EVM-compatibles, Solana, and Substrate networks from a single unified dashboard without managing separate node infrastructure."
    },
    {
        icon: ShieldCheck,
        title: "Insured Custody Partner",
        desc: "Optionally back your operational and cold-storage funds with comprehensive digital asset insurance fully underwritten by top European underwriters."
    },
    {
        icon: Clock,
        title: "Time-Locked Recovery",
        desc: "In the event of lost shares or personnel changes, initiate secure, time-delayed social recovery protocols that give your organization ample time to verify or veto the process."
    },
    {
        icon: Bank,
        title: "Integrated Fiat Off-Ramps",
        desc: "Move directly from digital assets to corporate bank accounts without routing through external exchanges. Supported by institutional OTC and banking partnerships."
    }
];

export const metadata = {
    title: "Simha Digital Wallet | Institutional Custody",
    description: "Enterprise-grade cryptocurrency wallet and custody solution. Secure your digital assets with multi-party computation, physical biometrics, and custom approval quorums.",
    keywords: [
        "institutional crypto custody",
        "MPC wallet enterprise",
        "cold storage digital assets",
        "multi-party computation security",
        "crypto treasury management",
        "enterprise crypto wallet",
        "corporate digital asset custody"
    ],
    openGraph: {
        title: "Simha Digital Wallet | Institutional Custody",
        description: "Enterprise-grade cryptocurrency wallet and custody solution. Secure your digital assets.",
        type: "website",
    },
};

export default function WalletProductPage() {
    return (
        <>
            {/* ──────────────── HERO ──────────────── */}
            <section style={{ paddingTop: "var(--navbar-height)", position: "relative", overflow: "hidden" }}>

                {/* Abstract Background Glow */}
                <div style={{ position: "absolute", top: "0%", left: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 60%)", filter: "blur(70px)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "-20%", right: "0%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%)", filter: "blur(70px)", pointerEvents: "none" }} />

                <Container>
                    <div className="section" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", textAlign: "center" }}>

                        <div style={{ position: "relative", zIndex: 10, maxWidth: "800px", margin: "0 auto" }}>
                            <AnimatedSection variant="fade-up">
                                <span style={{
                                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", borderRadius: "99px", color: "var(--brand-electric)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                                }}>
                                    <ShieldCheck size={16} weight="bold" /> Product Suite
                                </span>

                                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                    Simha <span className="gradient-text" style={{ background: "linear-gradient(to right, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Digital Wallet</span>
                                </h1>

                                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                    Military-grade security meets enterprise usability. Protect your treasury, execute operations, and manage corporate digital assets with our MPC-powered institutional custody solution.
                                </p>

                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                                    <Link href="/contact" className="btn-primary" style={{ background: "linear-gradient(to right, #a855f7, #6366f1)", boxShadow: "0 4px 14px 0 rgba(168, 85, 247, 0.39)" }}>Request Access</Link>
                                    <Link href="/services" className="btn-secondary">View Security Specs</Link>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Wallet Visual */}
                        <div style={{ marginTop: "1rem" }}>
                            <AnimatedSection variant="fade-up" delay={0.2}>
                                <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2rem", overflow: "hidden" }}>
                                    <SecurityFortress />
                                </div>
                            </AnimatedSection>
                        </div>

                    </div>
                </Container>
            </section>

            {/* ──────────────── FEATURES GRID ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Custody Capabilities"
                        heading="Compromise is Not"
                        gradientText="an Option"
                        subtitle="The Simha Digital Wallet eliminates the tradeoff between security and operational efficiency. Designed specifically for institutional treasuries and professional trading desks."
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
                                        background: "rgba(168, 85, 247, 0.1)",
                                        border: "1px solid rgba(168, 85, 247, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <feature.icon size={24} color="var(--brand-electric)" weight="duotone" />
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

            {/* ──────────────── ARCHITECTURE ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                        <AnimatedSection variant="slide-right">
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", borderRadius: "99px", color: "var(--brand-electric)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <HardDrives size={16} weight="bold" /> Defense in Depth
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                Tiered Storage <br /><span className="gradient-text">Architecture</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                Eliminate single points of failure with our multi-tier infrastructure. Automatically sweep excess operational funds into offline cold storage vaults while maintaining API liquidity.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ padding: "0.5rem", background: "rgba(168, 85, 247, 0.1)", borderRadius: "8px", color: "var(--brand-electric)" }}>
                                        <Cpu size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Hot Tier (MPC)</h4>
                                        <p style={{ color: "var(--text-dim)", fontSize: "0.95rem" }}>Sub-second transaction signing for operational wallets interacting with exchanges and DeFi protocols.</p>
                                    </div>
                                </li>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ padding: "0.5rem", background: "rgba(168, 85, 247, 0.1)", borderRadius: "8px", color: "var(--brand-electric)" }}>
                                        <Vault size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Cold Tier (Air-gapped)</h4>
                                        <p style={{ color: "var(--text-dim)", fontSize: "0.95rem" }}>90% of assets stored offline in deeply nested physical vaults requiring multi-person geographical quorums.</p>
                                    </div>
                                </li>
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {/* Visualization of tiers */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <div style={{ background: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.2)", borderRadius: "8px", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ color: "#fca5a5", fontWeight: 600 }}>Hot Wallet</span>
                                        <span style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>10% Allocation | Instant</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ width: "2px", height: "16px", background: "var(--border)" }} />
                                    </div>
                                    <div style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.2)", borderRadius: "8px", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ color: "#fcd34d", fontWeight: 600 }}>Warm Vault</span>
                                        <span style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>20% Allocation | 2hr SLA</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ width: "2px", height: "16px", background: "var(--border)" }} />
                                    </div>
                                    <div style={{ background: "rgba(37, 99, 235, 0.1)", border: "1px solid rgba(37, 99, 235, 0.2)", borderRadius: "8px", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ color: "#93c5fd", fontWeight: 600 }}>Deep Cold Storage</span>
                                        <span style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>70% Allocation | 24hr SLA</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── GOVERNANCE ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <div className="split-layout-reverse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

                        <AnimatedSection variant="slide-right">
                            <div className="glass-card" style={{ padding: "2rem", borderRadius: "12px", background: "#050d1a" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                                        <ShieldCheck size={24} color="var(--brand-electric)" />
                                        <div>
                                            <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>CEO Approval <span style={{ color: "var(--brand-electric)", fontSize: "0.8rem", marginLeft: "0.5rem" }}>Required</span></h4>
                                            <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>Transfers &gt; $1,000,000</p>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                                        <UserFocus size={24} color="var(--brand-primary)" />
                                        <div>
                                            <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>Treasury Team <span style={{ color: "var(--brand-primary)", fontSize: "0.8rem", marginLeft: "0.5rem" }}>2 of 3</span></h4>
                                            <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>Hardware YubiKey Signature</p>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                                        <FlowArrow size={24} color="var(--text-dim)" />
                                        <div>
                                            <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>Time-Lock Delay</h4>
                                            <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>24-hour cooling period initiated</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", borderRadius: "99px", color: "var(--brand-electric)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <UsersThree size={16} weight="bold" /> Access Control
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                Corporate <br /><span className="gradient-text">Governance Workflows</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                Map your real-world corporate hierarchy onto crypto transactions. The Simha Custom Policy Engine enforces rigid spending limits, time-locks, and multi-signature requirements.
                            </p>
                            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-dim)" }}>
                                <li>Set granular limits based on token, destination, or time-of-day.</li>
                                <li>Enforce biometric and hardware security key confirmations.</li>
                                <li>Mandate video-verification for profound treasury maneuvers.</li>
                            </ul>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <CTABanner
                heading="Never Lose a"
                gradientText="Private Key Again"
                subtitle="Secure your enterprise treasury with our institutional MPC wallet. Set custom approval logic, integrate hardware keys, and manage digital assets with total peace of mind."
                primaryLabel="Schedule Demo"
                primaryHref="/contact"
                secondaryLabel="Learn About Custody"
                secondaryHref="/services"
            />
        </>
    );
}
