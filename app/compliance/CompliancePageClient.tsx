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
import ComplianceRegistry from "@/components/animations/ComplianceRegistry";

const compliancePillars = [
    {
        title: "MiCA Readiness",
        desc: "Preparing for the EU's Markets in Crypto-Assets Regulation across all service lines. Our compliance team monitors regulatory developments and implements required changes proactively.",
        icon: "🏛️",
        color: "var(--brand-primary)",
    },
    {
        title: "AML/KYC Framework",
        desc: "Comprehensive Anti-Money Laundering and Know Your Customer programs aligned with 5AMLD/6AMLD directives. Risk-based customer due diligence, transaction monitoring, and suspicious activity reporting.",
        icon: "🔍",
        color: "var(--brand-secondary)",
    },
    {
        title: "GDPR Data Protection",
        desc: "Full compliance with the General Data Protection Regulation. Data minimization, purpose limitation, encryption at rest and in transit, and documented data processing agreements.",
        icon: "🛡️",
        color: "var(--brand-electric)",
    },
    {
        title: "Transparent Governance",
        desc: "Publicly verifiable company registration (KRS, NIP, REGON), regular audits, and clear organizational structure. Every compliance measure is documented and available for regulatory review.",
        icon: "📋",
        color: "#22c55e",
    },
];

const complianceChecklist = [
    "EU-registered company (KRS: 0001138948) with full public transparency",
    "Risk-based AML/KYC programs per 5AMLD/6AMLD directives",
    "GDPR-compliant data processing with encryption and DPIAs",
    "Transaction monitoring with automated sanctions screening",
    "Dedicated Compliance Officer and internal audit procedures",
    "Regular third-party audits of security and compliance controls",
];

export default function CompliancePageClient() {
    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero">
                <Container>
                    <AnimatedSection variant="fade-up">
                        <h1 style={{ marginBottom: "1.25rem" }}>
                            Compliance &{" "}
                            <span className="gradient-text">Regulation</span>
                        </h1>
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
                            Licensed, transparent, and built on EU regulatory standards. Our
                            compliance framework ensures every service operates within the
                            bounds of European law — giving our clients the institutional trust
                            they need to operate with confidence.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Registry + Typewriter ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "4rem",
                            alignItems: "center",
                        }}
                        className="split-layout"
                    >
                        <div>
                            <SectionHeading
                                eyebrow="Company Registry"
                                heading="Licensed &"
                                gradientText="Transparent"
                                subtitle="Simha Fintech sp. z o.o. is a registered Polish company with publicly verifiable credentials. All our registration data is available in the Polish National Court Register."
                                align="left"
                            />
                            <AnimatedSection variant="fade-up" delay={0.3}>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        lineHeight: 1.7,
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    Transparency isn&apos;t just a value statement — it&apos;s how
                                    we operate. Every piece of our corporate identity is verifiable
                                    through official EU and Polish government registries. Our
                                    e-Delivery address (Adres do e-Doręczeń) provides a secure
                                    electronic communication channel recognized by Polish courts
                                    and administrative bodies.
                                </p>
                            </AnimatedSection>
                        </div>

                        {/* Typewriter Animation */}
                        <AnimatedSection variant="fade-in" delay={0.2}>
                            <ComplianceRegistry />
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ════════ Compliance Pillars ════════ */}
            <section className="section">
                <Container>
                    <SectionHeading
                        eyebrow="Our Framework"
                        heading="Four Pillars of"
                        gradientText="Compliance"
                        subtitle="A multi-layered compliance framework designed for the complex regulatory landscape of digital assets in the European Union."
                    />
                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {compliancePillars.map((pillar) => (
                            <motion.div
                                key={pillar.title}
                                variants={staggerItemVariants}
                                className="glass-card"
                                style={{ padding: "2rem" }}
                            >
                                <div
                                    style={{
                                        width: "3rem",
                                        height: "3rem",
                                        borderRadius: "14px",
                                        background: `${pillar.color}12`,
                                        border: `1px solid ${pillar.color}25`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.25rem",
                                        fontSize: "1.3rem",
                                    }}
                                >
                                    {pillar.icon}
                                </div>
                                <h4 style={{ marginBottom: "0.75rem" }}>{pillar.title}</h4>
                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "var(--text-muted)",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Compliance Checklist ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="At a Glance"
                        heading="Compliance"
                        gradientText="Checklist"
                        subtitle="Key compliance measures implemented across all Simha Fintech service lines."
                    />
                    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <StaggerContainer
                            stagger={0.1}
                            style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
                        >
                            {complianceChecklist.map((item, i) => (
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
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#22c55e",
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            flexShrink: 0,
                                        }}
                                    >
                                        ✓
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </StaggerContainer>
                    </div>
                </Container>
            </section>

            {/* ════════ CTA ════════ */}
            <CTABanner
                heading="Questions About"
                gradientText="Compliance?"
                subtitle="Our compliance team is available to discuss regulatory requirements, provide documentation, and answer any questions about our governance framework."
                primaryLabel="Contact Compliance Team"
                primaryHref="/contact"
                secondaryLabel="View Legal Documents"
                secondaryHref="/legal/terms"
            />
        </>
    );
}
