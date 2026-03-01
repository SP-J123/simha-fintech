"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Code,
    Handshake,
    Lightning,
} from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer, {
    staggerItemVariants,
} from "@/components/ui/StaggerContainer";
import CounterAnimation from "@/components/ui/CounterAnimation";
import { milestones, coreValues, companyStats } from "@/lib/data/company";

const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Code,
    Handshake,
    Lightning,
};

export default function AboutPageClient() {
    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero">
                <Container>
                    <AnimatedSection variant="fade-up">
                        <h1 style={{ marginBottom: "1.25rem" }}>
                            About <span className="gradient-text">Simha Fintech</span>
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection variant="fade-up" delay={0.15}>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.7,
                                color: "var(--text-muted)",
                                maxWidth: "700px",
                                marginBottom: "0",
                            }}
                        >
                            Headquartered in Kraków, Poland, Simha Fintech sp. z o.o. is an
                            EU-regulated blockchain technology company delivering
                            institutional-grade solutions for the digital asset economy. We
                            combine deep technical expertise with regulatory compliance to help
                            enterprises, funds, and startups navigate the blockchain landscape
                            with confidence.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Stats Bar ════════ */}
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
                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                            gap: "2rem",
                            textAlign: "center",
                        }}
                    >
                        {companyStats.map((stat) => (
                            <motion.div key={stat.label} variants={staggerItemVariants}>
                                <div
                                    style={{
                                        fontSize: "2.5rem",
                                        fontWeight: 700,
                                        color: "var(--brand-primary)",
                                        lineHeight: 1,
                                        marginBottom: "0.5rem",
                                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                                    }}
                                >
                                    <CounterAnimation
                                        target={stat.value}
                                        suffix={stat.suffix}
                                        duration={1.5}
                                    />
                                </div>
                                <span style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Vision ════════ */}
            <section className="section">
                <Container>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "4rem",
                            alignItems: "start",
                        }}
                        className="split-layout"
                    >
                        <div>
                            <SectionHeading
                                eyebrow="Our Vision"
                                heading="Bridging Traditional Finance and"
                                gradientText="Decentralized Innovation"
                                align="left"
                            />
                            <AnimatedSection variant="fade-up" delay={0.2}>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        lineHeight: 1.8,
                                        color: "var(--text-muted)",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    The future of finance is being built on blockchain technology
                                    — but institutional adoption requires more than innovative
                                    protocols. It requires compliance, security, and the
                                    operational reliability that enterprises demand. That&apos;s
                                    why we exist.
                                </p>
                            </AnimatedSection>
                            <AnimatedSection variant="fade-up" delay={0.3}>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        lineHeight: 1.8,
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    Simha Fintech bridges the gap between the potential of
                                    decentralized technology and the requirements of institutional
                                    finance. Our 21 services span the entire blockchain value chain
                                    — from exchange infrastructure and custody to smart contract
                                    development and regulatory compliance — all delivered with the
                                    transparency and governance expected by regulated institutions.
                                </p>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection variant="slide-right" delay={0.2}>
                            <div
                                className="glass-card"
                                style={{ padding: "2rem" }}
                            >
                                <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>
                                    🇵🇱 EU-Registered Entity
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                                    {[
                                        ["KRS", "0001138948"],
                                        ["NIP", "7252349639"],
                                        ["REGON", "540205675"],
                                        ["Headquarters", "Kraków, Poland"],
                                        ["Legal Form", "sp. z o.o."],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                paddingBottom: "0.75rem",
                                                borderBottom: "1px solid var(--border)",
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            <span style={{ color: "var(--text-dim)" }}>{label}</span>
                                            <span
                                                style={{
                                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                                    color: "var(--text-primary)",
                                                    fontWeight: 500,
                                                }}
                                            >
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

            {/* ════════ Core Values ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="What Drives Us"
                        heading="Core"
                        gradientText="Values"
                        subtitle="Four principles that guide every decision, every service, and every client partnership."
                    />
                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {coreValues.map((value) => {
                            const Icon = iconMap[value.icon] || ShieldCheck;
                            return (
                                <motion.div
                                    key={value.title}
                                    variants={staggerItemVariants}
                                    className="glass-card"
                                    style={{ padding: "2rem" }}
                                >
                                    <div
                                        style={{
                                            width: "3rem",
                                            height: "3rem",
                                            borderRadius: "14px",
                                            background: "rgba(99, 102, 241, 0.1)",
                                            border: "1px solid rgba(99, 102, 241, 0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "1.25rem",
                                        }}
                                    >
                                        <Icon size={24} weight="duotone" color="var(--brand-primary)" />
                                    </div>
                                    <h4 style={{ marginBottom: "0.75rem" }}>{value.title}</h4>
                                    <p
                                        style={{
                                            fontSize: "0.9rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.65,
                                        }}
                                    >
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Timeline ════════ */}
            <section className="section">
                <Container>
                    <SectionHeading
                        eyebrow="Our Journey"
                        heading="Milestones &"
                        gradientText="Growth"
                        subtitle="From founding in Poland to serving clients worldwide — key moments in our story."
                    />
                    <div
                        style={{
                            position: "relative",
                            maxWidth: "900px",
                            margin: "0 auto",
                        }}
                    >
                        <div className="timeline-line" />
                        {milestones.map((item, i) => (
                            <AnimatedSection
                                key={i}
                                variant={item.side === "left" ? "slide-left" : "slide-right"}
                                delay={i * 0.08}
                                style={{
                                    display: "flex",
                                    justifyContent:
                                        item.side === "left" ? "flex-start" : "flex-end",
                                    paddingBottom: "2.5rem",
                                    position: "relative",
                                }}
                            >
                                {/* Dot on timeline */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "8px",
                                        transform: "translateX(-50%)",
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        background: "var(--brand-primary)",
                                        border: "2px solid var(--bg-primary)",
                                        zIndex: 1,
                                    }}
                                />
                                <div
                                    className="glass-card"
                                    style={{
                                        padding: "1.5rem",
                                        maxWidth: "380px",
                                        width: "calc(50% - 40px)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            fontWeight: 700,
                                            color: "var(--brand-primary)",
                                            fontFamily:
                                                "var(--font-jetbrains-mono, monospace)",
                                        }}
                                    >
                                        {item.year}
                                    </span>
                                    <h4 style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                                        {item.title}
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ════════ CTA ════════ */}
            <CTABanner
                heading="Ready to Partner with"
                gradientText="Simha Fintech?"
                subtitle="Whether you're an institution exploring digital assets, a startup building crypto infrastructure, or an enterprise seeking blockchain integration — we have the expertise and regulatory grounding to help."
                primaryLabel="Contact Us"
                primaryHref="/contact"
                secondaryLabel="Our Services"
                secondaryHref="/services"
            />
        </>
    );
}
