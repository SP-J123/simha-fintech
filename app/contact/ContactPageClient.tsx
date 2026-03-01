"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer, {
    staggerItemVariants,
} from "@/components/ui/StaggerContainer";

const infoCards = [
    {
        icon: "🏢",
        title: "Headquarters",
        lines: ["Simha Fintech sp. z o.o.", "Kraków, Poland"],
        color: "var(--brand-primary)",
    },
    {
        icon: "📧",
        title: "Email",
        lines: ["contact@simhafintech.com", "Response within 24 hours"],
        color: "var(--brand-secondary)",
    },
    {
        icon: "📬",
        title: "e-Delivery (ADE)",
        lines: ["AE:PL-55004-94640-IGCES-27", "Secure gov. channel"],
        color: "var(--brand-electric)",
    },
];

const serviceInterests = [
    "Crypto Exchange Infrastructure",
    "OTC Trading Desk",
    "Smart Contract Development",
    "DeFi Protocol Development",
    "Token Creation",
    "Regulatory Compliance",
    "Security Audit",
    "Crypto-as-a-Service",
    "Institutional Advisory",
    "Other",
];

export default function ContactPageClient() {
    const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
        "idle"
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");
        setTimeout(() => setFormState("sent"), 1500);
    };

    return (
        <>
            {/* ════════ Hero ════════ */}
            <section className="page-hero">
                <Container>
                    <AnimatedSection variant="fade-up">
                        <h1 style={{ marginBottom: "1.25rem" }}>
                            Get in <span className="gradient-text">Touch</span>
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
                            Ready to discuss your blockchain project? Our team is available
                            for consultations on any of our 21 services. Reach out and
                            we&apos;ll respond within 24 hours.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ════════ Info Cards ════════ */}
            <section style={{ paddingBottom: "3rem" }}>
                <Container>
                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {infoCards.map((card) => (
                            <motion.div
                                key={card.title}
                                variants={staggerItemVariants}
                                className="glass-card"
                                style={{ padding: "1.75rem", textAlign: "center" }}
                            >
                                <div
                                    style={{
                                        width: "3rem",
                                        height: "3rem",
                                        borderRadius: "14px",
                                        background: `${card.color}12`,
                                        border: `1px solid ${card.color}25`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 1rem",
                                        fontSize: "1.3rem",
                                    }}
                                >
                                    {card.icon}
                                </div>
                                <h4 style={{ marginBottom: "0.5rem" }}>{card.title}</h4>
                                {card.lines.map((line, i) => (
                                    <p
                                        key={i}
                                        style={{
                                            fontSize: "0.9rem",
                                            color: i === 0 ? "var(--text-primary)" : "var(--text-dim)",
                                            lineHeight: 1.5,
                                            fontFamily:
                                                i === 0
                                                    ? "var(--font-jetbrains-mono, monospace)"
                                                    : undefined,
                                        }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ════════ Contact Form ════════ */}
            <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <div style={{ maxWidth: "680px", margin: "0 auto" }}>
                        <AnimatedSection variant="fade-up">
                            <h2 style={{ marginBottom: "0.5rem", textAlign: "center" }}>
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "var(--text-muted)",
                                    marginBottom: "2.5rem",
                                    fontSize: "1rem",
                                }}
                            >
                                Tell us about your project and we&apos;ll get back to you with
                                a tailored proposal.
                            </p>
                        </AnimatedSection>

                        {formState === "sent" ? (
                            <AnimatedSection variant="scale-in">
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "3rem 2rem",
                                        background: "rgba(34, 197, 94, 0.06)",
                                        border: "1px solid rgba(34, 197, 94, 0.2)",
                                        borderRadius: "var(--radius-card)",
                                    }}
                                >
                                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                                    <h3 style={{ marginBottom: "0.5rem" }}>Message Sent!</h3>
                                    <p style={{ color: "var(--text-muted)" }}>
                                        Thank you for reaching out. We&apos;ll respond within 24
                                        hours.
                                    </p>
                                </div>
                            </AnimatedSection>
                        ) : (
                            <AnimatedSection variant="fade-up" delay={0.2}>
                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.25rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "1.25rem",
                                        }}
                                        className="split-layout"
                                    >
                                        <InputField label="Full Name" name="name" required />
                                        <InputField
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            required
                                        />
                                    </div>
                                    <InputField label="Company / Organization" name="company" />
                                    <div>
                                        <label style={labelStyle}>Service Interest</label>
                                        <select
                                            name="service"
                                            style={inputStyle}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Select a service...
                                            </option>
                                            {serviceInterests.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Tell us about your project, timeline, and any specific requirements..."
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                                minHeight: "120px",
                                            }}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "var(--text-dim)",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        By submitting this form, you agree to our{" "}
                                        <Link
                                            href="/legal/privacy"
                                            style={{ color: "var(--brand-primary)" }}
                                        >
                                            Privacy Policy
                                        </Link>
                                        . Your data is processed in accordance with GDPR.
                                    </p>
                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={formState === "sending"}
                                        style={{
                                            width: "100%",
                                            opacity: formState === "sending" ? 0.7 : 1,
                                            cursor:
                                                formState === "sending" ? "wait" : "pointer",
                                        }}
                                    >
                                        {formState === "sending"
                                            ? "Sending..."
                                            : "Send Message"}
                                    </button>
                                </form>
                            </AnimatedSection>
                        )}
                    </div>
                </Container>
            </section>
        </>
    );
}

/* ─── Form Helpers ─── */

const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
};

function InputField({
    label,
    name,
    type = "text",
    required = false,
}: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label style={labelStyle}>{label}</label>
            <input
                type={type}
                name={name}
                required={required}
                placeholder={label}
                style={inputStyle}
            />
        </div>
    );
}
