import React from "react";
import Link from "next/link";
import {
    Scales,
    ShieldCheck,
    Bank,
    Fingerprint,
    MagnifyingGlass,
    FileText,
    LockKey,
    GlobeHemisphereWest
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import ComplianceRegistry from "@/components/animations/ComplianceRegistry";

const registryData = [
    { label: "Legal Entity Name", value: "Simha Fintech sp. z o.o." },
    { label: "Country of Registration", value: "Republic of Poland (EU)" },
    { label: "KRS Number", value: "0001017042" },
    { label: "NIP (Tax ID)", value: "6762635441" },
    { label: "REGON", value: "524376440" },
    { label: "Legal Form", value: "Spółka z ograniczoną odpowiedzialnością (LLC)" },
    { label: "Share Capital", value: "Fully Paid" },
    { label: "Registered Address", value: "Kraków, Poland" },
    { label: "e-Delivery (ADE) Address", value: "AE:PL-55004-94640-IGCES-27" },
];

const pillars = [
    {
        icon: GlobeHemisphereWest,
        title: "EU Legal Framework",
        desc: "We operate strictly within the legal boundaries of the European Union, actively preparing for complete MiCA (Markets in Crypto-Assets) compliance reporting.",
        color: "var(--brand-primary)"
    },
    {
        icon: ShieldCheck,
        title: "GDPR Adherence",
        desc: "As an EU-based entity, user data privacy is guaranteed. All personal data is encrypted, processed locally, and subject to strict data-minimization policies.",
        color: "var(--brand-secondary)"
    },
    {
        icon: Fingerprint,
        title: "AML & KYC Automation",
        desc: "Automated real-time transaction monitoring and identity verification via integrations with SumSub, Chainalysis, and European sanction databases.",
        color: "var(--brand-electric)"
    },
    {
        icon: Bank,
        title: "Institutional Custody",
        desc: "Client and corporate funds are strictly segregated. Digital assets are stored in multi-sig MPC cold storage under the jurisdiction of EU-licensed custodians.",
        color: "#22c55e"
    }
];

const checklist = [
    { icon: FileText, text: "Publicly verifiable corporate registry (KRS) data" },
    { icon: MagnifyingGlass, text: "Annual financial audits by independent EU firms" },
    { icon: ShieldCheck, text: "Real-time on-chain transaction monitoring for illicit activity" },
    { icon: Scales, text: "Transparent Terms of Service and Risk Disclosures" },
    { icon: LockKey, text: "Strict access control and biometric multi-factor authentication" },
    { icon: Fingerprint, text: "Enterprise-grade KYC onboarding for B2B partners" }
];

export const metadata = {
    title: "Compliance & Regulation | Simha Fintech",
    description: "View our public corporate registry (KRS), regulatory framework, and compliance pillars. We are a trusted, EU-regulated digital asset infrastructure provider.",
};

export default function CompliancePage() {
    return (
        <>
            {/* ──────────────── PAGE HERO ──────────────── */}
            <section className="page-hero" style={{ paddingBottom: "3rem" }}>
                <Container>
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", borderRadius: "99px", color: "var(--brand-electric)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Scales size={16} weight="bold" /> Enterprise Trust
                            </span>

                            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Radical <span className="gradient-text" style={{ background: "linear-gradient(to right, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Transparency</span> & Compliance
                            </h1>

                            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                Institutional adoption of digital assets requires a foundation of absolute regulatory clarity. Simha Fintech is registered in Poland, operating under strict European Union frameworks to provide the highest level of security and legal protection for our enterprise partners.
                            </p>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── REGISTRY TABLE & VISUAL ──────────────── */}
            <section className="section" style={{ paddingTop: 0 }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

                        <AnimatedSection variant="slide-right">
                            <div style={{ marginBottom: "2rem" }}>
                                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Corporate Registry</h2>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>All operational activities are conducted through our legally registered Polish entity. You can verify our corporate status at any time via the official National Court Register (KRS) of Poland.</p>
                            </div>

                            <div className="glass-card" style={{ padding: "0", background: "var(--bg-surface)", overflow: "hidden" }}>
                                {registryData.map((item, idx) => (
                                    <div key={idx} style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "1rem 1.5rem",
                                        borderBottom: idx === registryData.length - 1 ? "none" : "1px solid var(--border)",
                                        background: idx % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent"
                                    }}>
                                        <span style={{ color: "var(--text-muted)", fontWeight: 500, fontSize: "0.95rem" }}>{item.label}</span>
                                        <span style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.95rem", textAlign: "right" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Compliance Animated Visual */}
                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                {/* Visual backdrop glow */}
                                <div style={{ position: "absolute", top: "50%", left: "50%", width: "80%", height: "80%", transform: "translate(-50%, -50%)", background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />

                                <div style={{ position: "relative", zIndex: 10, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
                                    <ComplianceRegistry />
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── COMPLIANCE PILLARS ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Regulatory Posture"
                        heading="Our Pillars of"
                        gradientText="Compliance"
                        subtitle="Bridging the gap between decentralized protocols and traditional legal requirements through four core operational pillars."
                        align="center"
                    />

                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "1.5rem",
                            marginTop: "4rem"
                        }}
                    >
                        {pillars.map((pillar, idx) => (
                            <AnimatedSection key={idx} variant="fade-up">
                                <div className="glass-card product-card-hover" style={{ padding: "2rem", height: "100%" }}>
                                    <div style={{
                                        width: "3rem",
                                        height: "3rem",
                                        borderRadius: "12px",
                                        background: `${pillar.color}15`,
                                        border: `1px solid ${pillar.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.25rem"
                                    }}>
                                        <pillar.icon size={24} color={pillar.color} weight="duotone" />
                                    </div>
                                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{pillar.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.9rem" }}>
                                        {pillar.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ──────────────── CHECKLIST ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "center" }}>

                        <AnimatedSection variant="fade-up">
                            <SectionHeading
                                eyebrow="Due Diligence"
                                heading="Enterprise"
                                gradientText="Assurance"
                                subtitle="We invite strict scrutiny. Our operations and platforms are built to pass rigorous institutional due diligence checks."
                                align="left"
                            />
                            <div style={{ marginTop: "2rem" }}>
                                <Link href="/contact" className="btn-secondary">Request Due Diligence Pack</Link>
                            </div>
                        </AnimatedSection>

                        <StaggerContainer stagger={0.08} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            {checklist.map((item, idx) => (
                                <AnimatedSection key={idx} variant="slide-left">
                                    <div style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                        padding: "1.25rem",
                                        background: "var(--bg-card)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "12px"
                                    }}>
                                        <div style={{ color: "var(--brand-primary)", marginTop: "0.15rem" }}>
                                            <item.icon size={20} weight="duotone" />
                                        </div>
                                        <span style={{ fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.5, fontWeight: 500 }}>
                                            {item.text}
                                        </span>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </StaggerContainer>

                    </div>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <CTABanner
                heading="Navigate Regulation"
                gradientText="with Confidence"
                subtitle="Let our Consulting division help architect a compliant framework for your digital asset venture. We handle the complexity so you can focus on building."
                primaryLabel="Consult with Experts"
                primaryHref="/contact"
                secondaryLabel="Explore All Policies"
                secondaryHref="/legal/terms"
            />
        </>
    );
}
