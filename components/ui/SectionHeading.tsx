"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SectionHeadingProps {
    eyebrow?: string;
    heading: string;
    gradientText?: string;
    subtitle?: string;
    align?: "center" | "left";
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    heading,
    gradientText,
    subtitle,
    align = "center",
    className = "",
}: SectionHeadingProps) {
    return (
        <div
            className={className}
            style={{
                textAlign: align,
                marginBottom: "3.5rem",
                maxWidth: align === "center" ? "720px" : "600px",
                marginInline: align === "center" ? "auto" : undefined,
            }}
        >
            {eyebrow && (
                <AnimatedSection variant="fade-up" delay={0}>
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "var(--brand-primary)",
                            marginBottom: "0.75rem",
                        }}
                    >
                        {eyebrow}
                    </span>
                </AnimatedSection>
            )}
            <AnimatedSection variant="fade-up" delay={0.1}>
                <h2 style={{ marginBottom: subtitle ? "1rem" : 0 }}>
                    {heading}{" "}
                    {gradientText && <span className="gradient-text">{gradientText}</span>}
                </h2>
            </AnimatedSection>
            {subtitle && (
                <AnimatedSection variant="fade-up" delay={0.2}>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.7,
                            maxWidth: "560px",
                            marginInline: align === "center" ? "auto" : undefined,
                        }}
                    >
                        {subtitle}
                    </p>
                </AnimatedSection>
            )}
        </div>
    );
}
