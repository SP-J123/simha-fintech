"use client";

import React from "react";
import { motion } from "framer-motion";
import CounterAnimation from "@/components/ui/CounterAnimation";

const stats = [
    { label: "24/7 Operations", value: 100, suffix: "%", color: "#6366f1" },
    { label: "Supported Tokens", value: 100, suffix: "+", color: "#06b6d4" },
    { label: "Trading Pairs", value: 50, suffix: "+", color: "#a855f7" },
    { label: "Multi-Sig Security", value: 100, suffix: "%", color: "#22c55e" },
];

export default function StatsDashboard() {
    return (
        <div
            style={{
                position: "relative",
                maxWidth: "600px",
                width: "100%",
                margin: "0 auto",
            }}
        >
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
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                    zIndex: -1,
                }}
            />

            {/* Terminal Window */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
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
                        padding: "16px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                >
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                    <span
                        style={{
                            marginLeft: "auto",
                            fontSize: "0.8rem",
                            color: "var(--text-dim)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                        }}
                    >
                        simha-fintech — system-monitor
                    </span>
                </div>

                {/* Terminal Body */}
                <div style={{ padding: "32px", position: "relative" }}>
                    {/* Scanning Line */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "1px",
                            background:
                                "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
                            animation: "scanLine 3s ease-in-out infinite",
                        }}
                    />

                    {/* Stats */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "6px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "var(--text-muted)",
                                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                                        }}
                                    >
                                        {stat.label}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            color: stat.color,
                                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                                        }}
                                    >
                                        <CounterAnimation target={stat.value} suffix={stat.suffix} duration={1.5} />
                                    </span>
                                </div>
                                <div
                                    style={{
                                        height: "4px",
                                        borderRadius: "2px",
                                        background: "rgba(255,255,255,0.05)",
                                        overflow: "hidden",
                                    }}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stat.value}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                                        style={{
                                            height: "100%",
                                            borderRadius: "2px",
                                            background: `linear-gradient(90deg, ${stat.color}, ${stat.color}88)`,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom counters */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                            paddingTop: "16px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "0.75rem",
                        }}
                    >
                        <span style={{ color: "var(--brand-primary)" }}>
                            <CounterAnimation target={21} /> Services
                        </span>
                        <span style={{ color: "var(--brand-secondary)" }}>
                            <CounterAnimation target={3} /> Categories
                        </span>
                        <span style={{ color: "var(--brand-electric)" }}>
                            <CounterAnimation target={1} /> Partner
                        </span>
                    </motion.div>

                    {/* Blinking cursor */}
                    <div
                        style={{
                            marginTop: "12px",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "0.75rem",
                            color: "var(--text-dim)",
                        }}
                    >
                        <span style={{ color: "#22c55e" }}>$</span>{" "}
                        <span
                            style={{
                                display: "inline-block",
                                width: "7px",
                                height: "14px",
                                background: "var(--brand-primary)",
                                animation: "blink 1s step-end infinite",
                                verticalAlign: "text-bottom",
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
