"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
    { label: "Financial", color: "#6366f1", satellites: 6, angle: 270 },
    { label: "Technical", color: "#06b6d4", satellites: 6, angle: 30 },
    { label: "Consulting", color: "#a855f7", satellites: 9, angle: 150 },
];

const nodePositions = [
    { cx: 50, cy: 22 }, // Top center (Financial)
    { cx: 82, cy: 75 }, // Bottom right (Technical)
    { cx: 18, cy: 75 }, // Bottom left (Consulting)
];

export default function ServiceConstellation() {
    return (
        <div
            style={{
                position: "sticky",
                top: "100px",
                width: "100%",
                minHeight: "500px",
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
                    width: "70%",
                    height: "70%",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                {/* Connection lines between nodes */}
                {nodePositions.map((from, i) =>
                    nodePositions.slice(i + 1).map((to, j) => (
                        <motion.line
                            key={`line-${i}-${j}`}
                            x1={from.cx}
                            y1={from.cy}
                            x2={to.cx}
                            y2={to.cy}
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="0.3"
                            strokeDasharray="1 1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    ))
                )}

                {/* Category nodes */}
                {categories.map((cat, i) => {
                    const pos = nodePositions[i];
                    return (
                        <g key={cat.label}>
                            {/* Pulse ring */}
                            <circle
                                cx={pos.cx}
                                cy={pos.cy}
                                r="6"
                                fill="none"
                                stroke={cat.color}
                                strokeWidth="0.3"
                                opacity="0.3"
                            >
                                <animate
                                    attributeName="r"
                                    values="6;9;6"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.3;0.05;0.3"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {/* Main node */}
                            <motion.circle
                                cx={pos.cx}
                                cy={pos.cy}
                                r="5"
                                fill={`${cat.color}20`}
                                stroke={cat.color}
                                strokeWidth="0.5"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            />

                            {/* Label */}
                            <motion.text
                                x={pos.cx}
                                y={pos.cy + (i === 0 ? -8 : 10)}
                                textAnchor="middle"
                                fill={cat.color}
                                fontSize="2.5"
                                fontWeight="600"
                                fontFamily="var(--font-space-grotesk, sans-serif)"
                                initial={{ opacity: 0, y: 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                            >
                                {cat.label}
                            </motion.text>

                            {/* Satellite dots */}
                            {Array.from({ length: cat.satellites }).map((_, si) => {
                                const angle =
                                    (360 / cat.satellites) * si + cat.angle;
                                const rad = (angle * Math.PI) / 180;
                                const orbitR = 12;
                                const sx = pos.cx + Math.cos(rad) * orbitR;
                                const sy = pos.cy + Math.sin(rad) * orbitR;
                                return (
                                    <motion.circle
                                        key={`sat-${i}-${si}`}
                                        cx={sx}
                                        cy={sy}
                                        r="0.8"
                                        fill={cat.color}
                                        opacity="0.6"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 0.6 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.5 + i * 0.15 + si * 0.05,
                                        }}
                                    >
                                        <animate
                                            attributeName="opacity"
                                            values="0.6;0.3;0.6"
                                            dur={`${2 + si * 0.3}s`}
                                            repeatCount="indefinite"
                                        />
                                    </motion.circle>
                                );
                            })}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
