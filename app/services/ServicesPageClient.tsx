"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer, {
    staggerItemVariants,
} from "@/components/ui/StaggerContainer";
import { services, categoryMeta } from "@/lib/data/services";
import type { ServiceCategory } from "@/lib/data/types";

const categories: ServiceCategory[] = ["financial", "technical", "consulting"];

export default function ServicesPageClient() {
    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero">
                <Container>
                    <AnimatedSection variant="fade-up">
                        <h1 style={{ marginBottom: "1.25rem" }}>
                            Our <span className="gradient-text">Services</span>
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection variant="fade-up" delay={0.15}>
                        <p
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.7,
                                color: "var(--text-primary)",
                                maxWidth: "700px",
                            }}
                        >
                            21 blockchain and cryptocurrency solutions across three categories
                            — Financial, Technical, and Consulting. Every service built to
                            institutional standards with EU regulatory compliance.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Category Sections ════════ */}
            {categories.map((catKey) => {
                const meta = categoryMeta[catKey];
                const catServices = services.filter((s) => s.category === catKey);

                return (
                    <section
                        key={catKey}
                        className="section"
                        style={{ borderTop: "1px solid var(--border)" }}
                    >
                        <Container>
                            <SectionHeading
                                eyebrow={`${catServices.length} Services`}
                                heading={meta.label}
                                subtitle={meta.description}
                                align="left"
                            />

                            <StaggerContainer
                                stagger={0.08}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                                    gap: "1.25rem",
                                }}
                            >
                                {catServices.map((service) => (
                                    <motion.div
                                        key={service.slug}
                                        variants={staggerItemVariants}
                                    >
                                        <div
                                            className="glass-card"
                                            style={{
                                                padding: "1.75rem",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    marginBottom: "0.75rem",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        borderRadius: "50%",
                                                        background: meta.color,
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        fontSize: "0.75rem",
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.08em",
                                                        color: meta.color,
                                                    }}
                                                >
                                                    {meta.label}
                                                </span>
                                            </div>

                                            <h3
                                                style={{
                                                    fontSize: "1.1rem",
                                                    marginBottom: "0.625rem",
                                                }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: "0.9rem",
                                                    color: "var(--text-primary)",
                                                    lineHeight: 1.6,
                                                    flex: 1,
                                                }}
                                            >
                                                {service.shortDescription}
                                            </p>

                                            <Link
                                                href={`/services/${service.slug}`}
                                                style={{
                                                    display: "inline-block",
                                                    marginTop: "1rem",
                                                    fontSize: "0.85rem",
                                                    fontWeight: 600,
                                                    color: meta.color,
                                                    padding: "0.5rem 1rem",
                                                    background: `${meta.color}15`,
                                                    borderRadius: "8px",
                                                    border: `1px solid ${meta.color}30`
                                                }}
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </StaggerContainer>
                        </Container>
                    </section>
                );
            })}

            {/* ════════ CTA ════════ */}
            <CTABanner
                heading="Need a Custom"
                gradientText="Solution?"
                subtitle="Our 21 services cover the full blockchain value chain — but we also build bespoke solutions tailored to your specific market, regulatory environment, and growth targets."
                primaryLabel="Request a Consultation"
                primaryHref="/contact"
                secondaryLabel="About Our Team"
                secondaryHref="/about"
            />
        </>
    );
}
