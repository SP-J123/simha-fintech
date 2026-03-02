"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer, {
    staggerItemVariants,
} from "@/components/ui/StaggerContainer";
import CTABanner from "@/components/ui/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { categoryMeta } from "@/lib/data/services";
import type { Service } from "@/lib/data/services";

interface Props {
    service: Service;
}

export default function ServiceDetailClient({ service }: Props) {
    const meta = categoryMeta[service.category];

    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero" style={{ position: "relative", overflow: "hidden", minHeight: "60vh", display: "flex", alignItems: "center" }}>
                {/* Background Image & Overlay */}
                {service.heroImage && (
                    <>
                        <Image
                            src={service.heroImage}
                            alt={service.title}
                            fill
                            priority
                            style={{ objectFit: "cover", zIndex: 0 }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(to bottom, rgba(10, 15, 25, 0.6) 0%, rgba(10, 15, 25, 0.85) 100%)",
                                zIndex: 1,
                            }}
                        />
                    </>
                )}

                <Container style={{ position: "relative", zIndex: 2 }}>
                    <AnimatedSection variant="fade-up">
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                            <div
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: meta.color,
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    color: meta.color,
                                }}
                            >
                                {meta.label}
                            </span>
                        </div>
                        <h1 style={{ marginBottom: "1.25rem" }}>{service.title}</h1>
                    </AnimatedSection>
                    <AnimatedSection variant="fade-up" delay={0.15}>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.7,
                                color: "var(--text-muted)",
                                maxWidth: "700px",
                            }}
                        >
                            {service.shortDescription}
                        </p>
                    </AnimatedSection>
                    <AnimatedSection variant="fade-up" delay={0.3}>
                        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-primary">
                                Request This Service
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                ← All Services
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection variant="fade-up" delay={0.4}>
                        <div style={{
                            display: "flex",
                            gap: "2.5rem",
                            marginTop: "4rem",
                            paddingTop: "2rem",
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            flexWrap: "wrap"
                        }}>
                            <div>
                                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--brand-primary)", lineHeight: 1 }}>99.99%</div>
                                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Uptime SLA</div>
                            </div>
                            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                            <div>
                                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--brand-secondary)", lineHeight: 1 }}>24/7</div>
                                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Expert Support</div>
                            </div>
                            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                            <div>
                                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>Tier 1</div>
                                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Security Standards</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Overview ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                            gap: "4rem",
                            alignItems: "start",
                        }}
                        className="split-layout"
                    >
                        <div>
                            <SectionHeading
                                eyebrow="Overview"
                                heading="What We"
                                gradientText="Deliver"
                                align="left"
                            />
                            <AnimatedSection variant="fade-up" delay={0.2}>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        lineHeight: 1.8,
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    {service.overview}
                                </p>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <AnimatedSection variant="slide-right" delay={0.3}>
                            <div
                                className="glass-card"
                                style={{ padding: "1.75rem", position: "sticky", top: "100px" }}
                            >
                                <h4 style={{ marginBottom: "1rem", fontSize: "1rem" }}>Quick Info</h4>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                    {[
                                        ["Category", meta.label],
                                        ["Compliance", "EU Regulated"],
                                        ["Support", "24/7 Available"],
                                        ["Deployment", "Customized"],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "0.85rem",
                                                paddingBottom: "0.75rem",
                                                borderBottom: "1px solid var(--border)",
                                            }}
                                        >
                                            <span style={{ color: "var(--text-dim)" }}>{label}</span>
                                            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ════════ Capabilities ════════ */}
            <section className="section">
                <Container>
                    <SectionHeading
                        eyebrow="Capabilities"
                        heading="What's"
                        gradientText="Included"
                        subtitle="Key capabilities and features included in this service offering."
                    />
                    <StaggerContainer
                        stagger={0.06}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "0.875rem",
                            maxWidth: "900px",
                            margin: "0 auto",
                        }}
                    >
                        {service.capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItemVariants}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "0.75rem",
                                    padding: "1rem 1.25rem",
                                    background: "var(--bg-card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "12px",
                                    fontSize: "0.9rem",
                                    color: "var(--text-muted)",
                                }}
                            >
                                <span style={{ color: meta.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                                {cap}
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Process ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Our Process"
                        heading="How We"
                        gradientText="Work"
                        subtitle="A proven four-phase methodology that ensures quality delivery."
                    />
                    <StaggerContainer
                        stagger={0.15}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                            gap: "1.25rem",
                            maxWidth: "1100px",
                            margin: "0 auto",
                        }}
                    >
                        {service.processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItemVariants}
                                className="glass-card"
                                style={{ padding: "1.75rem", position: "relative" }}
                            >
                                <div
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: 800,
                                        color: `${meta.color}20`,
                                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                                        marginBottom: "0.75rem",
                                        lineHeight: 1,
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h4 style={{ marginBottom: "0.625rem", fontSize: "1rem" }}>
                                    {step.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "0.875rem",
                                        color: "var(--text-muted)",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ CTA ════════ */}
            <CTABanner
                heading="Interested in"
                gradientText={`${service.title}?`}
                subtitle="Schedule a consultation with our team to discuss your specific requirements, timeline, and how this service can be tailored to your business."
                primaryLabel="Schedule a Consultation"
                primaryHref="/contact"
                secondaryLabel="Explore Other Services"
                secondaryHref="/services"
            />
        </>
    );
}
