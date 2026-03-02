import React from "react";
import Link from "next/link";
import {
    Megaphone,
    Envelope,
    DownloadSimple,
    Newspaper,
    Calendar,
    ArrowRight
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import CounterAnimation from "@/components/ui/CounterAnimation";

const facts = [
    { value: 2021, suffix: "", label: "Year Founded", color: "var(--brand-primary)" },
    { value: 21, suffix: "", label: "Enterprise Services", color: "var(--brand-secondary)" },
    { value: 3, suffix: "B+", label: "Trading Volume ($)", color: "var(--brand-electric)" },
    { value: 120, suffix: "+", label: "B2B Clients", color: "#22c55e" }
];

const pressContacts = [
    {
        icon: Envelope,
        title: "Media Enquiries",
        desc: "For interview requests, expert commentary on digital asset regulations (MiCA, GDPR), or general press questions.",
        action: "press@simhafintech.com",
        href: "mailto:press@simhafintech.com",
        color: "var(--brand-primary)"
    },
    {
        icon: DownloadSimple,
        title: "Brand Assets",
        desc: "Download official high-resolution logos, executive headshots, product screenshots, and the Simha Fintech brand guidelines.",
        action: "Download Media Kit (.zip)",
        href: "#",
        color: "var(--brand-secondary)"
    }
];

const announcements = [
    {
        date: "Q4 2024",
        title: "Simha Fintech Unveils 21-Service Institutional Suite",
        desc: "Consolidating Financial, Technical, and Consulting verticals into a single cohesive ecosystem to eliminate vendor fragmentation for enterprise clients.",
        link: "#"
    },
    {
        date: "Q3 2024",
        title: "SOC2 Type II Compliance Readiness Achieved",
        desc: "Independent auditing firm verifies that Simha's MPC custody and exchange matching engine infrastructure meets stringent security and availability standards.",
        link: "#"
    },
    {
        date: "Q1 2024",
        title: "Launch of Simha Digital Wallet Beta",
        desc: "Private invite-only rollout begins for the enterprise-grade MPC digital wallet, featuring biometric quorum approvals and automated cold tiering.",
        link: "#"
    },
    {
        date: "Q4 2023",
        title: "Simha Surpasses $1 Billion in Processed Volume",
        desc: "A major milestone reached for the Crypto-as-a-Service white-label platform, highlighting the robustness of the core matching engine under high load.",
        link: "#"
    }
];

export const metadata = {
    title: "Press & Media | Simha Fintech",
    description: "Official news, announcements, company facts, and brand assets for Simha Fintech. Contact our media relations team for enquiries.",
};

export default function PressPage() {
    return (
        <>
            {/* ──────────────── PAGE HERO ──────────────── */}
            <section className="page-hero" style={{ paddingBottom: "3rem" }}>
                <Container>
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "99px", color: "var(--brand-primary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Megaphone size={16} weight="bold" /> Media Relations
                            </span>

                            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Company <span className="gradient-text">News &</span> Announcements
                            </h1>

                            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                The latest official updates from Simha Fintech. Find company facts, download our brand assets, or get in touch with our media relations team.
                            </p>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── COMPANY FACTS BAR ──────────────── */}
            <section style={{ paddingBottom: "4rem" }}>
                <Container>
                    <AnimatedSection variant="fade-up" delay={0.2}>
                        <div className="glass-card" style={{
                            padding: "2rem",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                            background: "var(--bg-surface)",
                            borderColor: "var(--border)"
                        }}>
                            {facts.map((stat, idx) => (
                                <div key={idx} style={{
                                    padding: "1rem",
                                    borderRight: idx === facts.length - 1 ? "none" : "1px solid var(--border)",
                                    textAlign: "center"
                                }}>
                                    <div style={{
                                        fontSize: "2rem",
                                        fontWeight: 700,
                                        color: stat.color,
                                        lineHeight: 1,
                                        marginBottom: "0.5rem",
                                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        {stat.value > 2000 ? stat.value : <CounterAnimation target={stat.value} suffix={stat.suffix} duration={1.5} />}
                                    </div>
                                    <div style={{ fontSize: "0.85rem", color: "var(--text-dim)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1px" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ──────────────── MEDIA CONTACT CARDS ──────────────── */}
            <section className="section" style={{ paddingTop: "0" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                        {pressContacts.map((contact, idx) => (
                            <AnimatedSection key={idx} variant={idx === 0 ? "slide-right" : "slide-left"}>
                                <div className="glass-card product-card-hover" style={{ padding: "2.5rem", height: "100%", display: "flex", flexDirection: "column" }}>
                                    <div style={{
                                        width: "3.5rem",
                                        height: "3.5rem",
                                        borderRadius: "14px",
                                        background: `${contact.color}15`,
                                        border: `1px solid ${contact.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <contact.icon size={28} color={contact.color} weight="duotone" />
                                    </div>
                                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{contact.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem", marginBottom: "2rem", flexGrow: 1 }}>
                                        {contact.desc}
                                    </p>
                                    <div>
                                        <a href={contact.href}
                                            className="press-action-btn"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                padding: "0.75rem 1.5rem",
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "10px",
                                                color: "var(--text-primary)",
                                                fontWeight: 500,
                                                transition: "all 0.2s ease"
                                            }}
                                        >
                                            {contact.action} <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ──────────────── ANNOUNCEMENTS TIMELINE ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Chronicle"
                        heading="Recent"
                        gradientText="Announcements"
                        subtitle="Follow the execution of our roadmap as we build out the premier European institutional digital asset platform."
                        align="center"
                    />

                    <div style={{ maxWidth: "800px", margin: "4rem auto 0" }}>
                        <StaggerContainer stagger={0.15} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {announcements.map((news, idx) => (
                                <AnimatedSection key={idx} variant="fade-up">
                                    <div className="glass-card product-card-hover" style={{
                                        padding: "2rem",
                                        display: "flex",
                                        gap: "2rem",
                                        alignItems: "flex-start",
                                        background: "var(--bg-card)",
                                        cursor: "pointer"
                                    }}>
                                        {/* Date Box */}
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "1rem",
                                            background: "rgba(255,255,255,0.03)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "12px",
                                            minWidth: "100px",
                                            flexShrink: 0
                                        }}>
                                            <Calendar size={24} color="var(--brand-primary)" weight="duotone" style={{ marginBottom: "0.5rem" }} />
                                            <span style={{ fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--font-jetbrains-mono, monospace)", color: "var(--text-primary)" }}>
                                                {news.date}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div style={{ flexGrow: 1 }}>
                                            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                                {news.title}
                                            </h3>
                                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                                                {news.desc}
                                            </p>
                                            <Link href={news.link} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--brand-secondary)", fontWeight: 600, fontSize: "0.9rem" }}>
                                                <Newspaper size={16} /> Read Full Release
                                            </Link>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </StaggerContainer>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <CTABanner
                heading="Never Miss an"
                gradientText="Update"
                subtitle="Subscribe to the Simha Fintech newsletter to receive quarterly enterprise reports, regulatory analyses, and major product announcements directly to your corporate inbox."
                primaryLabel="Subscribe Now"
                primaryHref="/contact"
                secondaryLabel="Follow on LinkedIn"
                secondaryHref="#"
            />
        </>
    );
}
