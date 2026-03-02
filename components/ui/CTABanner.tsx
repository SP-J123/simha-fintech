"use client";

import React from "react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";

interface CTABannerProps {
    heading: string;
    gradientText?: string;
    subtitle: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export default function CTABanner({
    heading,
    gradientText,
    subtitle,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
}: CTABannerProps) {
    return (
        <section className="section">
            <Container>
                <AnimatedSection variant="scale-in">
                    <div
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.08), rgba(6, 182, 212, 0.06))",
                            border: "1px solid var(--border)",
                            borderRadius: "var(--radius-card)",
                            padding: "clamp(2.5rem, 5vw, 4.5rem)",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Ambient glow */}
                        <div
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                top: "-50%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "500px",
                                height: "500px",
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }}
                        />
                        <h2 style={{ marginBottom: "1rem", position: "relative" }}>
                            {heading}{" "}
                            {gradientText && (
                                <span className="gradient-text">{gradientText}</span>
                            )}
                        </h2>
                        <p
                            style={{
                                color: "var(--text-muted)",
                                maxWidth: "560px",
                                marginInline: "auto",
                                marginBottom: "2rem",
                                fontSize: "1.05rem",
                                lineHeight: 1.7,
                                position: "relative",
                            }}
                        >
                            {subtitle}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                position: "relative",
                            }}
                        >
                            <Link href={primaryHref} className="btn-primary">
                                {primaryLabel}
                            </Link>
                            {secondaryLabel && secondaryHref && (
                                <Link href={secondaryHref} className="btn-secondary">
                                    {secondaryLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
