"use client";

import React from "react";
import { motion } from "framer-motion";

/*  ─────────────────────────────────────────────────────────
    BlockchainPipeline — animated isometric-style visualization
    showing 3 service layers stacking up with flowing transactions,
    block confirmations, and live data streams between layers.
    ───────────────────────────────────────────────────────── */

const layers = [
    {
        label: "Financial",
        color: "#6366f1",
        services: ["Exchange", "OTC", "Custody", "Liquidity", "Payments", "Brokerage"],
        y: 32,
    },
    {
        label: "Technical",
        color: "#06b6d4",
        services: ["Blockchain", "Smart Contracts", "DeFi", "Tokens", "Security", "CaaS"],
        y: 68,
    },
    {
        label: "Consulting",
        color: "#a855f7",
        services: ["Compliance", "Strategy", "Tokenomics", "Advisory", "Legal", "Web3"],
        y: 104,
    },
];

/* Isometric helper: convert grid x,y to iso x,y */
const isoX = (gx: number, gy: number) => 50 + (gx - gy) * 8;
const isoY = (gy: number, gx: number, baseY: number) =>
    baseY + (gx + gy) * 4;

export default function BlockchainPipeline() {
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
                    width: "90%",
                    height: "80%",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    pointerEvents: "none",
                }}
            />

            <svg viewBox="0 0 100 140" style={{ width: "100%", height: "100%" }}>
                <defs>
                    <linearGradient id="pipeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="pipeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="pipeGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
                    </linearGradient>
                    <filter id="blockGlow">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
                    </filter>
                </defs>

                {/* ─── Vertical data streams between layers ─── */}
                {[30, 50, 70].map((x, si) => (
                    <g key={`stream-${si}`}>
                        {/* Stream line */}
                        <line
                            x1={x}
                            y1={30}
                            x2={x}
                            y2={130}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="0.3"
                            strokeDasharray="1 2"
                        />
                        {/* Flowing particles up the stream */}
                        {[0, 1, 2].map((pi) => (
                            <circle
                                key={`sp-${si}-${pi}`}
                                r="0.6"
                                fill={layers[si].color}
                                opacity="0"
                            >
                                <animateMotion
                                    dur={`${3.5 + si * 0.3}s`}
                                    repeatCount="indefinite"
                                    begin={`${pi * 1 + si * 0.3}s`}
                                    path={`M${x},130 L${x},30`}
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0;0.8;0.8;0"
                                    dur={`${3.5 + si * 0.3}s`}
                                    repeatCount="indefinite"
                                    begin={`${pi * 1 + si * 0.3}s`}
                                />
                            </circle>
                        ))}
                    </g>
                ))}

                {/* ─── Layer blocks (bottom to top: Financial → Technical → Consulting) ─── */}
                {layers.map((layer, li) => {
                    const gradId = `pipeGrad${li + 1}`;
                    return (
                        <g key={layer.label}>
                            {/* Layer platform — isometric parallelogram */}
                            <motion.g
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: li * 0.25 }}
                            >
                                {/* Platform base */}
                                <path
                                    d={`M10,${layer.y + 10} L50,${layer.y + 18} L90,${layer.y + 10} L50,${layer.y + 2} Z`}
                                    fill={`url(#${gradId})`}
                                    stroke={`${layer.color}40`}
                                    strokeWidth="0.2"
                                />
                                {/* Platform side left */}
                                <path
                                    d={`M10,${layer.y + 10} L10,${layer.y + 13} L50,${layer.y + 21} L50,${layer.y + 18} Z`}
                                    fill={`${layer.color}10`}
                                    stroke={`${layer.color}20`}
                                    strokeWidth="0.15"
                                />
                                {/* Platform side right */}
                                <path
                                    d={`M90,${layer.y + 10} L90,${layer.y + 13} L50,${layer.y + 21} L50,${layer.y + 18} Z`}
                                    fill={`${layer.color}08`}
                                    stroke={`${layer.color}15`}
                                    strokeWidth="0.15"
                                />

                                {/* Service blocks on the platform */}
                                {layer.services.map((service, si) => {
                                    const col = si % 3;
                                    const row = Math.floor(si / 3);
                                    const bx = isoX(col, row);
                                    const by = isoY(row, col, layer.y);

                                    return (
                                        <motion.g
                                            key={service}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: li * 0.25 + 0.3 + si * 0.08,
                                            }}
                                        >
                                            {/* Block */}
                                            <rect
                                                x={bx - 3.5}
                                                y={by - 1.5}
                                                width="7"
                                                height="3"
                                                rx="0.5"
                                                fill={`${layer.color}15`}
                                                stroke={`${layer.color}40`}
                                                strokeWidth="0.2"
                                            />
                                            {/* Block label */}
                                            <text
                                                x={bx}
                                                y={by + 0.5}
                                                textAnchor="middle"
                                                fill={layer.color}
                                                fontSize="1.4"
                                                fontWeight="500"
                                                fontFamily="var(--font-space-grotesk, sans-serif)"
                                                opacity="0.9"
                                            >
                                                {service}
                                            </text>
                                            {/* Pulse dot */}
                                            <circle cx={bx + 3} cy={by - 1} r="0.4" fill={layer.color}>
                                                <animate
                                                    attributeName="opacity"
                                                    values="1;0.3;1"
                                                    dur={`${2 + si * 0.4}s`}
                                                    repeatCount="indefinite"
                                                />
                                            </circle>
                                        </motion.g>
                                    );
                                })}

                                {/* Layer label */}
                                <motion.text
                                    x={92}
                                    y={layer.y + 10}
                                    textAnchor="start"
                                    fill={layer.color}
                                    fontSize="2.2"
                                    fontWeight="700"
                                    fontFamily="var(--font-space-grotesk, sans-serif)"
                                    initial={{ opacity: 0, x: -3 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: li * 0.25 + 0.5 }}
                                >
                                    {/* Omit label if too crowded — show as small tag */}
                                </motion.text>

                                {/* Side label pill */}
                                <motion.g
                                    initial={{ opacity: 0, x: -2 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: li * 0.25 + 0.6 }}
                                >
                                    <rect
                                        x="1"
                                        y={layer.y + 7}
                                        width={layer.label.length * 1.6 + 2}
                                        height="3.5"
                                        rx="1.5"
                                        fill={`${layer.color}18`}
                                        stroke={`${layer.color}35`}
                                        strokeWidth="0.2"
                                    />
                                    <text
                                        x={layer.label.length * 0.8 + 2}
                                        y={layer.y + 9.4}
                                        textAnchor="middle"
                                        fill={layer.color}
                                        fontSize="1.8"
                                        fontWeight="700"
                                        fontFamily="var(--font-space-grotesk, sans-serif)"
                                    >
                                        {layer.label}
                                    </text>
                                </motion.g>
                            </motion.g>
                        </g>
                    );
                })}

                {/* ─── Cross-layer transaction arcs ─── */}
                {[
                    { from: { x: 35, y: 40 }, to: { x: 40, y: 75 }, color: "#6366f1", delay: 0 },
                    { from: { x: 60, y: 75 }, to: { x: 55, y: 112 }, color: "#06b6d4", delay: 1.5 },
                    { from: { x: 45, y: 40 }, to: { x: 65, y: 112 }, color: "#a855f7", delay: 3 },
                ].map((arc, i) => (
                    <g key={`arc-${i}`}>
                        <motion.path
                            d={`M${arc.from.x},${arc.from.y} C${arc.from.x - 5},${(arc.from.y + arc.to.y) / 2
                                } ${arc.to.x + 5},${(arc.from.y + arc.to.y) / 2} ${arc.to.x},${arc.to.y
                                }`}
                            fill="none"
                            stroke={`${arc.color}20`}
                            strokeWidth="0.3"
                            strokeDasharray="1 1.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                        />
                        {/* Moving dot along the arc */}
                        <circle r="0.7" fill={arc.color} opacity="0">
                            <animateMotion
                                dur="4s"
                                repeatCount="indefinite"
                                begin={`${arc.delay}s`}
                                path={`M${arc.from.x},${arc.from.y} C${arc.from.x - 5},${(arc.from.y + arc.to.y) / 2
                                    } ${arc.to.x + 5},${(arc.from.y + arc.to.y) / 2} ${arc.to.x},${arc.to.y
                                    }`}
                            />
                            <animate
                                attributeName="opacity"
                                values="0;0.9;0.9;0"
                                dur="4s"
                                repeatCount="indefinite"
                                begin={`${arc.delay}s`}
                            />
                        </circle>
                    </g>
                ))}

                {/* ─── Decorative: small floating blocks ─── */}
                {[
                    { x: 8, y: 35, size: 1.5, color: "#6366f1", dur: 5 },
                    { x: 92, y: 50, size: 1.2, color: "#06b6d4", dur: 6 },
                    { x: 5, y: 80, size: 1, color: "#a855f7", dur: 4.5 },
                    { x: 95, y: 95, size: 1.3, color: "#22c55e", dur: 5.5 },
                    { x: 7, y: 110, size: 1.2, color: "#f59e0b", dur: 5 },
                    { x: 93, y: 120, size: 1.4, color: "#ec4899", dur: 6.5 },
                ].map((fb, i) => (
                    <rect
                        key={`fb-${i}`}
                        x={fb.x - fb.size}
                        y={fb.y - fb.size}
                        width={fb.size * 2}
                        height={fb.size * 2}
                        rx="0.3"
                        fill={`${fb.color}12`}
                        stroke={`${fb.color}25`}
                        strokeWidth="0.15"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values={`0,0; 0,${-1.5}; 0,0`}
                            dur={`${fb.dur}s`}
                            repeatCount="indefinite"
                        />
                    </rect>
                ))}

                {/* ─── Bottom: "21 services" counter badge ─── */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
                >
                    <rect
                        x="35"
                        y="130"
                        width="30"
                        height="5"
                        rx="2.5"
                        fill="rgba(99,102,241,0.12)"
                        stroke="rgba(99,102,241,0.3)"
                        strokeWidth="0.2"
                    />
                    <text
                        x="50"
                        y="133.3"
                        textAnchor="middle"
                        fill="#6366f1"
                        fontSize="2"
                        fontWeight="700"
                        fontFamily="var(--font-jetbrains-mono, monospace)"
                    >
                        21 SERVICES
                    </text>
                </motion.g>
            </svg>
        </div>
    );
}
