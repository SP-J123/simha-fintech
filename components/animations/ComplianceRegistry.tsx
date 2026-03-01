"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TypewriterField {
    label: string;
    value: string;
}

const fields: TypewriterField[] = [
    { label: "KRS", value: "0001138948" },
    { label: "NIP", value: "7252349639" },
    { label: "REGON", value: "540205675" },
    { label: "Address", value: "Łódź, Poland" },
    { label: "e-Delivery", value: "AE:PL-55004-94640-IGCES-27" },
];

export default function ComplianceRegistry() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });
    const [visibleChars, setVisibleChars] = useState<number[]>(
        fields.map(() => 0)
    );
    const [checkedFields, setCheckedFields] = useState<boolean[]>(
        fields.map(() => false)
    );

    useEffect(() => {
        if (!isInView) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            setVisibleChars(fields.map((f) => f.value.length));
            setCheckedFields(fields.map(() => true));
            return;
        }

        let fieldIndex = 0;
        let charIndex = 0;

        const interval = setInterval(() => {
            if (fieldIndex >= fields.length) {
                clearInterval(interval);
                return;
            }

            const currentField = fields[fieldIndex];
            if (charIndex < currentField.value.length) {
                charIndex++;
                setVisibleChars((prev) => {
                    const next = [...prev];
                    next[fieldIndex] = charIndex;
                    return next;
                });
            } else {
                // Field done — show checkmark
                setCheckedFields((prev) => {
                    const next = [...prev];
                    next[fieldIndex] = true;
                    return next;
                });
                fieldIndex++;
                charIndex = 0;
            }
        }, 40);

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div ref={containerRef} style={{ position: "relative", maxWidth: "480px", width: "100%" }}>
            {/* Ambient glow */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120%",
                    height: "120%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                    zIndex: -1,
                }}
            />

            {/* Terminal Window */}
            <div
                style={{
                    background: "rgba(13, 17, 23, 0.9)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    backdropFilter: "blur(12px)",
                }}
            >
                {/* Window Chrome */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                >
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                    <span
                        style={{
                            marginLeft: "auto",
                            fontSize: "0.7rem",
                            color: "var(--text-dim)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                        }}
                    >
                        compliance-registry
                    </span>
                </div>

                {/* Fields */}
                <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        {fields.map((field, i) => (
                            <div
                                key={field.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "0.82rem",
                                }}
                            >
                                <span style={{ color: "var(--text-dim)", minWidth: "90px" }}>
                                    {field.label}:
                                </span>
                                <span style={{ color: "var(--text-primary)" }}>
                                    {field.value.substring(0, visibleChars[i])}
                                    {visibleChars[i] < field.value.length && (
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "7px",
                                                height: "14px",
                                                background: "var(--brand-primary)",
                                                animation: "blink 0.7s step-end infinite",
                                                verticalAlign: "text-bottom",
                                                marginLeft: "2px",
                                            }}
                                        />
                                    )}
                                </span>
                                {/* Checkmark */}
                                {checkedFields[i] && (
                                    <motion.span
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                        style={{
                                            color: "#22c55e",
                                            fontWeight: 700,
                                            marginLeft: "auto",
                                        }}
                                    >
                                        ✓
                                    </motion.span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* GDPR Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                            checkedFields.every(Boolean)
                                ? { scale: 1, opacity: 1 }
                                : { scale: 0, opacity: 0 }
                        }
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                        style={{
                            marginTop: "20px",
                            padding: "10px 16px",
                            background: "rgba(34, 197, 94, 0.08)",
                            border: "1px solid rgba(34, 197, 94, 0.2)",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "#22c55e",
                        }}
                    >
                        🛡️ GDPR & MiCA Compliant
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
