"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer, {
    staggerItemVariants,
} from "@/components/ui/StaggerContainer";

const whyJoin = [
    { icon: "🚀", title: "Work on Cutting-Edge Tech", desc: "Build with blockchain, DeFi, smart contracts, and institutional-grade trading infrastructure. Every project pushes the boundaries of what's possible in finance." },
    { icon: "🇪🇺", title: "EU-Based & Compliant", desc: "Work for a regulated EU company with transparent governance. Skip the regulatory uncertainty — we do things by the book." },
    { icon: "📈", title: "Growth & Impact", desc: "Join an early-stage company where every contributor makes a real difference. Shape architecture decisions, define processes, and build from the ground up." },
    { icon: "🌍", title: "Remote-Friendly", desc: "Headquartered in Kraków with a remote-first culture. Work from anywhere in Europe with flexible hours and async communication." },
];

const perks = [
    { emoji: "💰", label: "Competitive Salary" },
    { emoji: "🏠", label: "Remote / Hybrid" },
    { emoji: "📚", label: "Learning Budget" },
    { emoji: "🏖️", label: "Flexible PTO" },
    { emoji: "💻", label: "Equipment Stipend" },
    { emoji: "🎯", label: "Equity Options" },
];

const techStack = [
    { name: "TypeScript", color: "#3178c6" },
    { name: "React / Next.js", color: "#61dafb" },
    { name: "Solidity", color: "#363636" },
    { name: "Rust", color: "#dea584" },
    { name: "Node.js", color: "#339933" },
    { name: "PostgreSQL", color: "#4169e1" },
    { name: "Docker", color: "#2496ed" },
    { name: "AWS / GCP", color: "#ff9900" },
];

const openPositions = [
    { title: "Senior Blockchain Engineer", team: "Engineering", location: "Remote (EU)", type: "Full-time" },
    { title: "Smart Contract Developer (Solidity)", team: "Engineering", location: "Kraków / Remote", type: "Full-time" },
    { title: "DeFi Protocol Engineer", team: "Engineering", location: "Remote (EU)", type: "Full-time" },
    { title: "Full-Stack Developer (Next.js)", team: "Product", location: "Kraków / Remote", type: "Full-time" },
    { title: "Compliance Analyst", team: "Legal & Compliance", location: "Kraków", type: "Full-time" },
    { title: "Business Development Manager", team: "Growth", location: "Remote (EU)", type: "Full-time" },
];

export default function CareersPageClient() {
    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero">
                <Container>
                    <AnimatedSection variant="fade-up">
                        <h1 style={{ marginBottom: "1.25rem" }}>
                            Join <span className="gradient-text">Simha Fintech</span>
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection variant="fade-up" delay={0.15}>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.7,
                                color: "var(--text-muted)",
                                maxWidth: "650px",
                            }}
                        >
                            Build the infrastructure that connects traditional finance to the
                            decentralized future. We&apos;re looking for passionate engineers,
                            compliance experts, and business leaders who want to make an
                            institutional-grade impact.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Why Join Us ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Why Join Us"
                        heading="Build the Future of"
                        gradientText="Digital Finance"
                    />
                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {whyJoin.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={staggerItemVariants}
                                className="glass-card"
                                style={{ padding: "2rem" }}
                            >
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                                <h4 style={{ marginBottom: "0.75rem" }}>{item.title}</h4>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Perks + Tech Stack ════════ */}
            <section className="section">
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
                        <div>
                            <SectionHeading eyebrow="Benefits" heading="Perks &" gradientText="Benefits" align="left" />
                            <StaggerContainer stagger={0.08} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                                {perks.map((perk) => (
                                    <motion.div
                                        key={perk.label}
                                        variants={staggerItemVariants}
                                        style={{
                                            padding: "1rem",
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            fontSize: "0.9rem",
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        <span style={{ fontSize: "1.3rem" }}>{perk.emoji}</span>
                                        {perk.label}
                                    </motion.div>
                                ))}
                            </StaggerContainer>
                        </div>

                        <div>
                            <SectionHeading eyebrow="Our Stack" heading="Tech" gradientText="Stack" align="left" />
                            <StaggerContainer stagger={0.08} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                {techStack.map((tech) => (
                                    <motion.span
                                        key={tech.name}
                                        variants={staggerItemVariants}
                                        style={{
                                            padding: "0.5rem 1rem",
                                            background: `${tech.color}12`,
                                            border: `1px solid ${tech.color}30`,
                                            borderRadius: "8px",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            color: tech.color,
                                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                                        }}
                                    >
                                        {tech.name}
                                    </motion.span>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ════════ Open Positions ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Open Positions"
                        heading="Current"
                        gradientText="Openings"
                        subtitle="We're actively hiring across engineering, compliance, and business development."
                    />
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <StaggerContainer stagger={0.08} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                            {openPositions.map((pos) => (
                                <motion.div
                                    key={pos.title}
                                    variants={staggerItemVariants}
                                    className="glass-card"
                                    style={{
                                        padding: "1.5rem 1.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: "1rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div>
                                        <h4 style={{ fontSize: "1rem", marginBottom: "0.375rem" }}>{pos.title}</h4>
                                        <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "var(--text-dim)" }}>
                                            <span>{pos.team}</span>
                                            <span>•</span>
                                            <span>{pos.location}</span>
                                            <span>•</span>
                                            <span>{pos.type}</span>
                                        </div>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            color: "var(--brand-primary)",
                                        }}
                                    >
                                        Apply →
                                    </span>
                                </motion.div>
                            ))}
                        </StaggerContainer>
                    </div>
                </Container>
            </section>

            {/* ════════ CTA ════════ */}
            <CTABanner
                heading="Don't See Your"
                gradientText="Perfect Role?"
                subtitle="We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to the future of institutional blockchain."
                primaryLabel="Send Open Application"
                primaryHref="/contact"
            />
        </>
    );
}
