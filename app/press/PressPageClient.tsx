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
import CounterAnimation from "@/components/ui/CounterAnimation";
import { pressAnnouncements } from "@/lib/data/company";

const facts = [
    { value: 21, suffix: "", label: "Services" },
    { value: 3, suffix: "", label: "Verticals" },
    { value: 2021, suffix: "", label: "Founded" },
    { value: 50, suffix: "+", label: "Token Support" },
];

export default function PressPageClient() {
    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero">
                <Container>
                    <AnimatedSection variant="fade-up">
                        <h1 style={{ marginBottom: "1.25rem" }}>
                            Press & <span className="gradient-text">Media</span>
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection variant="fade-up" delay={0.15}>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.7,
                                color: "var(--text-muted)",
                                maxWidth: "600px",
                            }}
                        >
                            Company news, media resources, and brand assets for journalists
                            and media partners. For press enquiries, contact us at{" "}
                            <a
                                href="mailto:contact@simhafintech.com"
                                style={{ color: "var(--brand-primary)" }}
                            >
                                contact@simhafintech.com
                            </a>
                            .
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Facts Bar ════════ */}
            <section
                style={{
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    padding: "3rem 0",
                }}
            >
                <Container>
                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                            gap: "2rem",
                            textAlign: "center",
                        }}
                    >
                        {facts.map((fact) => (
                            <motion.div key={fact.label} variants={staggerItemVariants}>
                                <div
                                    style={{
                                        fontSize: "2.25rem",
                                        fontWeight: 700,
                                        color: "var(--brand-primary)",
                                        lineHeight: 1,
                                        marginBottom: "0.5rem",
                                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                                    }}
                                >
                                    <CounterAnimation target={fact.value} suffix={fact.suffix} duration={1.5} />
                                </div>
                                <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
                                    {fact.label}
                                </span>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Media Cards ════════ */}
            <section className="section">
                <Container>
                    <StaggerContainer
                        stagger={0.12}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        <motion.div
                            variants={staggerItemVariants}
                            className="glass-card"
                            style={{ padding: "2rem" }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📰</div>
                            <h3 style={{ marginBottom: "0.75rem" }}>Media Enquiries</h3>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                                For interviews, quotes, and press features, please contact our
                                communications team. We respond within 24 hours and can arrange
                                spokesperson availability for blockchain and fintech topics.
                            </p>
                            <a
                                href="mailto:contact@simhafintech.com"
                                style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    color: "var(--brand-primary)",
                                }}
                            >
                                contact@simhafintech.com →
                            </a>
                        </motion.div>

                        <motion.div
                            variants={staggerItemVariants}
                            className="glass-card"
                            style={{ padding: "2rem" }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎨</div>
                            <h3 style={{ marginBottom: "0.75rem" }}>Brand Assets</h3>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                                Download our logo, brand guidelines, and approved imagery for
                                press coverage. All assets are available in SVG, PNG, and PDF
                                formats with light and dark variations.
                            </p>
                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "0.375rem 0.875rem",
                                    background: "rgba(99,102,241,0.1)",
                                    border: "1px solid rgba(99,102,241,0.25)",
                                    borderRadius: "8px",
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "var(--brand-primary)",
                                }}
                            >
                                Coming Soon
                            </span>
                        </motion.div>
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Announcements ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Latest News"
                        heading="Company"
                        gradientText="Announcements"
                        subtitle="Key updates from Simha Fintech."
                    />
                    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <StaggerContainer stagger={0.12} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {pressAnnouncements.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItemVariants}
                                    className="glass-card"
                                    style={{ padding: "1.75rem" }}
                                >
                                    <span
                                        style={{
                                            display: "inline-block",
                                            padding: "0.25rem 0.625rem",
                                            background: "rgba(99,102,241,0.1)",
                                            border: "1px solid rgba(99,102,241,0.25)",
                                            borderRadius: "6px",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            color: "var(--brand-primary)",
                                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                                            marginBottom: "0.875rem",
                                        }}
                                    >
                                        {item.date}
                                    </span>
                                    <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>{item.title}</h4>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </StaggerContainer>
                    </div>
                </Container>
            </section>

            {/* ════════ CTA ════════ */}
            <CTABanner
                heading="Want to Feature"
                gradientText="Simha Fintech?"
                subtitle="We're happy to provide expert commentary on blockchain technology, EU crypto regulations, DeFi, and institutional digital asset adoption."
                primaryLabel="Contact Press Team"
                primaryHref="/contact"
            />
        </>
    );
}
