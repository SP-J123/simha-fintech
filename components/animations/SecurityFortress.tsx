"use client";

import React from "react";
import { motion } from "framer-motion";

const layers = [
    { label: "2FA Authentication", delay: 0 },
    { label: "Cold Storage", delay: 0.3 },
    { label: "Multi-Sig Wallets", delay: 0.6 },
    { label: "Penetration Testing", delay: 0.9 },
    { label: "24/7 SOC Monitoring", delay: 1.2 },
];

export default function SecurityFortress() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "1",
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
                    width: "60%",
                    height: "60%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                {/* Radar sweep */}
                <motion.line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="10"
                    stroke="url(#radarGrad)"
                    strokeWidth="0.5"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                />
                <defs>
                    <linearGradient id="radarGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(99,102,241,0)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0.6)" />
                    </linearGradient>
                </defs>

                {/* Concentric rings */}
                {layers.map((layer, i) => {
                    const r = 10 + i * 8;
                    return (
                        <g key={layer.label}>
                            <motion.circle
                                cx="50"
                                cy="50"
                                r={r}
                                fill="none"
                                stroke="rgba(99,102,241,0.15)"
                                strokeWidth="0.3"
                                strokeDasharray="2 2"
                                initial={{ scale: 0.3, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: layer.delay }}
                                style={{ transformOrigin: "50px 50px" }}
                            />
                            {/* Label */}
                            <motion.text
                                x="50"
                                y={50 - r - 1.5}
                                textAnchor="middle"
                                fill="var(--text-dim)"
                                fontSize="1.8"
                                fontFamily="var(--font-jetbrains-mono, monospace)"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.7 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: layer.delay + 0.3 }}
                            >
                                {layer.label}
                            </motion.text>
                        </g>
                    );
                })}

                {/* Center shield icon */}
                <motion.path
                    d="M50 38 L56 41 L56 48 C56 52 53 55 50 57 C47 55 44 52 44 48 L44 41 Z"
                    fill="none"
                    stroke="var(--brand-primary)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                />
                {/* Checkmark in shield */}
                <motion.path
                    d="M47.5 47 L49.5 49 L53 45"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                />

                {/* Threat dots  */}
                {[
                    { cx: 30, cy: 25 },
                    { cx: 72, cy: 30 },
                    { cx: 25, cy: 65 },
                    { cx: 78, cy: 70 },
                ].map((dot, i) => (
                    <g key={`threat-${i}`}>
                        <motion.circle
                            cx={dot.cx}
                            cy={dot.cy}
                            r="1.2"
                            initial={{ fill: "#ff4d6a" }}
                            whileInView={{ fill: "#22c55e" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 1.5 + i * 0.3 }}
                        />
                        {/* Sonar ring */}
                        <circle cx={dot.cx} cy={dot.cy} r="1.2" fill="none" stroke="#22c55e" strokeWidth="0.3" opacity="0">
                            <animate
                                attributeName="r"
                                values="1.2;4;1.2"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${1.5 + i * 0.3}s`}
                            />
                            <animate
                                attributeName="opacity"
                                values="0.4;0;0.4"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${1.5 + i * 0.3}s`}
                            />
                        </circle>
                    </g>
                ))}
            </svg>
        </div>
    );
}
