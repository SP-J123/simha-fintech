import React from "react";
import Link from "next/link";
import {
    GlobeHemisphereWest,
    Target,
    Users,
    Handshake,
    Lightbulb,
    ShieldCheck,
    ArrowRight
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import CounterAnimation from "@/components/ui/CounterAnimation";

const stats = [
    { value: 5, suffix: "+", label: "Years of Excellence", color: "var(--brand-primary)" },
    { value: 3, suffix: "B+", label: "Volume Processed ($)", color: "var(--brand-secondary)" },
    { value: 120, suffix: "+", label: "Enterprise Clients", color: "var(--brand-electric)" },
    { value: 24, suffix: "/7", label: "Global Support", color: "#22c55e" }
];

const values = [
    {
        icon: ShieldCheck,
        title: "Uncompromising Security",
        desc: "We treat every digital asset and piece of data as mission-critical. Our infrastructure is built on military-grade encryption, zero-trust architecture, and continuous threat monitoring."
    },
    {
        icon: Handshake,
        title: "Regulatory Integrity",
        desc: "We don't look for loopholes. We build within frameworks. Our commitment to full KYC/AML compliance and European regulations (MiCA, GDPR) protects our partners long-term."
    },
    {
        icon: Lightbulb,
        title: "Engineering Excellence",
        desc: "We write clean, efficient, and heavily audited code. Our high-performance matching engines and smart contracts are designed to scale to millions of concurrent operations."
    },
    {
        icon: Users,
        title: "Client-Centric Growth",
        desc: "Our success is entirely dependent on the operational success of our enterprise clients. We don't just hand over software; we partner for the entire lifecycle of the business."
    }
];

const milestones = [
    { year: "2021", quarter: "Q1", title: "Inception & Registration", side: "left", desc: "Simha Fintech sp. z o.o. is officially registered in Kraków, Poland. The foundational team begins architecting the core matching engine." },
    { year: "2021", quarter: "Q4", title: "First Custody Integration", side: "right", desc: "Successfully integrated our first institutional-grade MPC cold storage solution, achieving SOC2 Type I compliance readiness." },
    { year: "2022", quarter: "Q2", title: "CaaS Platform Launch", side: "left", desc: "Launched our flagship Crypto-as-a-Service white-label exchange platform, onboarding our first three enterprise B2B clients in Europe." },
    { year: "2022", quarter: "Q4", title: "Regulatory Milestone", side: "right", desc: "Secured full VASP (Virtual Asset Service Provider) registration approvals across multiple key European jurisdictions." },
    { year: "2023", quarter: "Q3", title: "Consulting Division Formed", side: "left", desc: "Expanded our offerings beyond software by launching the Simha Consulting vertical, providing legal structuring, tokenomics, and market entry advisory." },
    { year: "2023", quarter: "Q4", title: "1 Billion processed", side: "right", desc: "Surpassed $1 Billion in cumulative trading volume processed exclusively through Simha-powered exchange infrastructure." },
    { year: "2024", quarter: "Q1", title: "DeFi & Protocol Expansion", side: "left", desc: "Began development on the Simha DEX protocol and non-custodial smart contract infrastructure focusing on concentrated capital efficiency." },
    { year: "2024", quarter: "Q4", title: "Institutional Product Suite", side: "right", desc: "Unveiled the unified vision of 21 integrated services across Financial, Technical, and Consulting verticals." },
    { year: "2025", quarter: "Q2", title: "Simha Coin Generation Event", side: "left", desc: "The targeted launch window for the Simha Ecosystem utility token, bridging value across the entire suite of institutional products." },
    { year: "2028+", quarter: "Beyond", title: "The Standard in Digital Finance", side: "right", desc: "Our long-term vision is to become the underlying infrastructure for 20% of all newly regulated digital asset entities in the European Union." }
];

export const metadata = {
    title: "About Us | Simha Fintech",
    description: "Learn about the mission, vision, and history of Simha Fintech. We are the premier institutional partner for blockchain and digital asset solutions in Europe.",
};

export default function AboutPage() {
    return (
        <>
            {/* ──────────────── PAGE HERO ──────────────── */}
            <section className="page-hero">
                <Container>
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "99px", color: "var(--brand-primary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Target size={16} weight="bold" /> Our Story
                            </span>

                            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Building the <span className="gradient-text">Infrastructure</span> of the Future
                            </h1>

                            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                Simha Fintech is a European technology company dedicated to bridging traditional institutional finance with the decentralized digital asset economy. We provide the compliant rails, the secure treasury custody, and the high-performance trading engines that power the next generation of financial institutions.
                            </p>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── STATS BANNER ──────────────── */}
            <section style={{ paddingBottom: "4rem", position: "relative", zIndex: 20 }}>
                <Container>
                    <AnimatedSection variant="fade-up" delay={0.2}>
                        <div className="glass-card" style={{
                            padding: "2.5rem",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                            textAlign: "center",
                            background: "var(--bg-card)",
                            borderColor: "var(--border)"
                        }}>
                            {stats.map((stat, idx) => (
                                <div key={idx} style={{ padding: "1rem" }}>
                                    <div style={{
                                        fontSize: "2.5rem",
                                        fontWeight: 700,
                                        color: stat.color,
                                        lineHeight: 1,
                                        marginBottom: "0.75rem",
                                        fontFamily: "var(--font-space-grotesk, sans-serif)"
                                    }}>
                                        <CounterAnimation target={stat.value} suffix={stat.suffix} duration={2} />
                                    </div>
                                    <div style={{ fontSize: "0.95rem", color: "var(--text-dim)", fontWeight: 500 }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ──────────────── VISION & GLOBE ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
                {/* Subtle mesh behind globe */}
                <div style={{ position: "absolute", top: "50%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)", filter: "blur(60px)", pointerEvents: "none", transform: "translateY(-50%)" }} />

                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem", alignItems: "center" }}>

                        <AnimatedSection variant="fade-up">
                            <SectionHeading
                                eyebrow="Our Vision"
                                heading="Regulatory Clarity Meets"
                                gradientText="Global Execution"
                                subtitle="We believe that the next trillion dollars of value entering the digital asset space will require absolute regulatory certainty and institutional-grade security. We are building the unified platform that makes that transition seamless."
                                align="left"
                            />

                            <div style={{ marginTop: "2rem" }}>
                                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                    Headquartered in the technological hub of Kraków, Poland, Simha Fintech operates at the intersection of European regulatory frameworks and cutting-edge decentralized technology.
                                </p>
                                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                                    Rather than forcing enterprises to piece together fragmented solutions from multiple vendors across different jurisdictions, we provide a cohesive, end-to-end ecosystem of 21 services across Financial, Technical, and Consulting verticals.
                                </p>
                                <Link href="/compliance" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--brand-secondary)", fontWeight: 600, fontSize: "1.05rem" }}>
                                    Explore our Compliance Framework <ArrowRight size={18} weight="bold" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Static Globe Representation until interactive component is built */}
                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "1",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.15))",
                                border: "1px solid rgba(255,255,255,0.05)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "inset 0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(6, 182, 212, 0.1)"
                            }}>
                                {/* Decorative rings */}
                                <div style={{ position: "absolute", inset: "10%", borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.1)", animation: "spin 60s linear infinite" }} />
                                <div style={{ position: "absolute", inset: "25%", borderRadius: "50%", border: "1px solid rgba(6, 182, 212, 0.2)", animation: "spin 40s linear infinite reverse" }} />

                                <GlobeHemisphereWest size={200} color="var(--brand-secondary)" weight="thin" opacity={0.7} />

                                {/* Connection points */}
                                <div style={{ position: "absolute", top: "30%", left: "40%", width: "8px", height: "8px", borderRadius: "50%", background: "var(--brand-secondary)", boxShadow: "0 0 10px var(--brand-secondary)" }} />
                                <div style={{ position: "absolute", top: "45%", right: "30%", width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand-primary)", boxShadow: "0 0 10px var(--brand-primary)" }} />
                                <div style={{ position: "absolute", bottom: "35%", left: "55%", width: "10px", height: "10px", borderRadius: "50%", background: "var(--brand-electric)", boxShadow: "0 0 15px var(--brand-electric)" }} />
                            </div>
                        </AnimatedSection>

                    </div>
                </Container>
            </section>

            {/* ──────────────── CORE VALUES ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Our Culture"
                        heading="Core Operational"
                        gradientText="Values"
                        subtitle="The fundamental principles that guide our architecture, our hiring, and our client relationships."
                        align="center"
                    />

                    <StaggerContainer
                        stagger={0.15}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                            marginTop: "4rem"
                        }}
                    >
                        {values.map((value, idx) => (
                            <AnimatedSection key={idx} variant="fade-up">
                                <div className="glass-card product-card-hover" style={{ padding: "2rem", height: "100%", background: "var(--bg-card)" }}>
                                    <div style={{
                                        width: "3.5rem",
                                        height: "3.5rem",
                                        borderRadius: "14px",
                                        background: "rgba(99, 102, 241, 0.1)",
                                        border: "1px solid rgba(99, 102, 241, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <value.icon size={28} color="var(--brand-primary)" weight="duotone" />
                                    </div>
                                    <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>{value.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.65, fontSize: "0.95rem" }}>
                                        {value.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ──────────────── MILESTONE TIMELINE ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Our Journey"
                        heading="Milestones &"
                        gradientText="Roadmap"
                        subtitle="Tracing our growth from a boutique Polish startup to a comprehensive European enterprise infrastructure provider."
                        align="center"
                    />

                    <div style={{ position: "relative", maxWidth: "1000px", margin: "5rem auto 0" }}>
                        {/* Central Line */}
                        <div style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: "50%",
                            width: "2px",
                            background: "linear-gradient(to bottom, rgba(255,255,255,0.05), var(--brand-primary), rgba(255,255,255,0.05))",
                            transform: "translateX(-50%)",
                            zIndex: 0
                        }} className="timeline-center-line" />

                        <StaggerContainer stagger={0.15} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {milestones.map((item, idx) => (
                                <div key={idx} style={{
                                    display: "flex",
                                    justifyContent: item.side === "left" ? "flex-start" : "flex-end",
                                    width: "100%",
                                    position: "relative",
                                    zIndex: 10
                                }} className={`timeline-row ${item.side}`}>

                                    {/* Timeline Dot */}
                                    <div style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "1.5rem",
                                        transform: "translate(-50%, -50%)",
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "50%",
                                        background: "var(--bg-primary)",
                                        border: "3px solid var(--brand-primary)",
                                        boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
                                        zIndex: 20
                                    }} className="timeline-dot" />

                                    {/* Content Card */}
                                    <AnimatedSection variant={item.side === "left" ? "slide-left" : "slide-right"} style={{ width: "45%" }} className="timeline-content">
                                        <div className="glass-card" style={{ padding: "1.75rem", position: "relative", overflow: "visible" }}>

                                            {/* Connecting Arrow */}
                                            <div style={{
                                                position: "absolute",
                                                top: "1.5rem",
                                                [item.side === "left" ? "right" : "left"]: "-10px",
                                                width: "10px",
                                                height: "10px",
                                                background: "var(--border)",
                                                transform: "translateY(-50%) rotate(45deg)",
                                                borderLeft: item.side === "right" ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                borderBottom: item.side === "right" ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                borderRight: item.side === "left" ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                borderTop: item.side === "left" ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                zIndex: -1
                                            }} className="timeline-arrow" />

                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                                <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk, sans-serif)" }}>{item.year}</span>
                                                <span style={{ fontSize: "0.8rem", padding: "0.2rem 0.6rem", background: "rgba(99, 102, 241, 0.15)", color: "var(--brand-primary)", borderRadius: "6px", fontWeight: 600 }}>{item.quarter}</span>
                                            </div>
                                            <h4 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>{item.title}</h4>
                                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                                        </div>
                                    </AnimatedSection>
                                </div>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Mobile responsive fix for timeline */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
            @media (max-width: 768px) {
              .timeline-center-line {
                left: 20px !important;
                transform: none !important;
              }
              .timeline-row {
                justify-content: flex-end !important;
              }
              .timeline-content {
                width: calc(100% - 60px) !important;
              }
              .timeline-dot {
                left: 20px !important;
              }
              .timeline-arrow {
                left: -10px !important;
                right: auto !important;
                border: 1px solid rgba(255,255,255,0.1) !important;
                border-right: none !important;
                border-top: none !important;
              }
            }
          `}} />

                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <CTABanner
                heading="Partner with the"
                gradientText="Infrastructure Experts"
                subtitle="Behind every great decentralized exchange, enterprise custody solution, and custom blockchain network is a team of dedicated engineers. Let's build your next project together."
                primaryLabel="Schedule Architecture Review"
                primaryHref="/contact"
                secondaryLabel="Explore Careers"
                secondaryHref="/careers"
            />
        </>
    );
}
