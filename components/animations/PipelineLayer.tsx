"use client";

import React from "react";
import { motion } from "framer-motion";

/*  ─────────────────────────────────────────────────────────
    PipelineLayer — A single layer of the blockchain pipeline.
    By rendering these per-row alongside the HTML cards, we 
    guarantee perfect horizontal alignment regardless of card height.
    ───────────────────────────────────────────────────────── */

const layerConfigs = [
    {
        label: "Financial",
        color: "#6366f1",
        services: ["Exchange", "OTC", "Custody", "Liquidity", "Payments", "Brokerage"],
    },
    {
        label: "Technical",
        color: "#06b6d4",
        services: ["Blockchain", "Smart Contracts", "DeFi", "Tokens", "Security", "CaaS"],
    },
    {
        label: "Consulting",
        color: "#a855f7",
        services: ["Compliance", "Strategy", "Tokenomics", "Advisory", "Legal", "Web3"],
    },
];

/* Isometric helper */
const isoX = (gx: number, gy: number) => 50 + (gx - gy) * 8;
const isoY = (gy: number, gx: number, baseY: number) => baseY + (gx + gy) * 4;

export default function PipelineLayer({ index }: { index: number }) {
    const layer = layerConfigs[index];
    const y = 30; // Center of the SVG
    const gradId = `pipeGrad${index}`;

    return (
        <div style={{ position: "relative", width: "100%" }}>
            {/* Ambient glow */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "100%",
                    borderRadius: "50%",
                    background: `radial-gradient(ellipse, ${layer.color}15 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            {/* overflow: visible allows the vertical connecting lines to bridge the gap between rows */}
            <svg viewBox="0 15 100 70" style={{ width: "100%", height: "auto", overflow: "visible" }}>

                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={layer.color} stopOpacity="0.6" />
                        <stop offset="100%" stopColor={layer.color} stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* ─── Continuous Vertical Streams (overflowing) ─── */}
                {[30, 50, 70].map((x, si) => (
                    <g key={`stream-${si}`}>
                        {/* Extended line linking rows together */}
                        <line
                            x1={x}
                            y1={-100}
                            x2={x}
                            y2={200}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="0.3"
                            strokeDasharray="1 2"
                        />
                        {/* Flowing particles */}
                        {[0, 1].map((pi) => (
                            <circle
                                key={`sp-${si}-${pi}`}
                                r="0.6"
                                fill={layer.color}
                                opacity="0"
                            >
                                <animateMotion
                                    dur={`${4 + si * 0.5}s`}
                                    repeatCount="indefinite"
                                    begin={`${pi * 1.5 + si * 0.4}s`}
                                    path={index % 2 === 0 ? `M${x},150 L${x},-50` : `M${x},-50 L${x},150`}
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0;0.5;0.5;0"
                                    dur={`${4 + si * 0.5}s`}
                                    repeatCount="indefinite"
                                    begin={`${pi * 1.5 + si * 0.4}s`}
                                />
                            </circle>
                        ))}
                    </g>
                ))}

                {/* ─── The Layer Platform ─── */}
                <g>
                    <motion.g
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Base */}
                        <path
                            d={`M10,${y + 10} L50,${y + 18} L90,${y + 10} L50,${y + 2} Z`}
                            fill={`url(#${gradId})`}
                            stroke={`${layer.color}40`}
                            strokeWidth="0.2"
                        />
                        {/* Sides */}
                        <path
                            d={`M10,${y + 10} L10,${y + 13} L50,${y + 21} L50,${y + 18} Z`}
                            fill={`${layer.color}10`}
                            stroke={`${layer.color}20`}
                            strokeWidth="0.15"
                        />
                        <path
                            d={`M90,${y + 10} L90,${y + 13} L50,${y + 21} L50,${y + 18} Z`}
                            fill={`${layer.color}08`}
                            stroke={`${layer.color}15`}
                            strokeWidth="0.15"
                        />

                        {/* Service Blocks */}
                        {layer.services.map((service, si) => {
                            const col = si % 3;
                            const row = Math.floor(si / 3);
                            const bx = isoX(col, row);
                            const by = isoY(row, col, y);

                            return (
                                <motion.g
                                    key={service}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + si * 0.1,
                                    }}
                                >
                                    <rect
                                        x={bx - 4}
                                        y={by - 1.5}
                                        width="8"
                                        height="3"
                                        rx="0.5"
                                        fill={`${layer.color}15`}
                                        stroke={`${layer.color}40`}
                                        strokeWidth="0.2"
                                    />
                                    <text
                                        x={bx}
                                        y={by + 0.5}
                                        textAnchor="middle"
                                        fill={layer.color}
                                        fontSize="1.3"
                                        fontWeight="500"
                                        fontFamily="var(--font-space-grotesk, sans-serif)"
                                    >
                                        {service}
                                    </text>
                                    <circle cx={bx + 3.2} cy={by - 0.8} r="0.3" fill={layer.color}>
                                        <animate
                                            attributeName="opacity"
                                            values="1;0.2;1"
                                            dur={`${2 + si * 0.3}s`}
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </motion.g>
                            );
                        })}

                        {/* Floating dots around platform */}
                        {[
                            { x: 15, y: y + 20, size: 1.5, dur: 4 },
                            { x: 80, y: y - 5, size: 1, dur: 5 },
                            { x: 50, y: y + 25, size: 1.2, dur: 6 },
                        ].map((fb, i) => (
                            <rect
                                key={`fb-${i}`}
                                x={fb.x - fb.size}
                                y={fb.y - fb.size}
                                width={fb.size * 2}
                                height={fb.size * 2}
                                rx="0.3"
                                fill={`${layer.color}15`}
                                stroke={`${layer.color}30`}
                                strokeWidth="0.2"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values={`0,0; 0,${-2}; 0,0`}
                                    dur={`${fb.dur}s`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        ))}

                        {/* Layer Label Tag */}
                        <motion.g
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <rect
                                x="2"
                                y={y + 15}
                                width={layer.label.length * 1.5 + 4}
                                height="4.5"
                                rx="1.5"
                                fill={`${layer.color}18`}
                                stroke={`${layer.color}35`}
                                strokeWidth="0.2"
                            />
                            <text
                                x={layer.label.length * 0.75 + 4}
                                y={y + 18}
                                textAnchor="middle"
                                fill={layer.color}
                                fontSize="2"
                                fontWeight="700"
                                fontFamily="var(--font-space-grotesk, sans-serif)"
                            >
                                {layer.label}
                            </text>
                        </motion.g>

                        {/* Badge on the final layer */}
                        {index === 2 && (
                            <motion.g
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <rect
                                    x="30"
                                    y="70"
                                    width="40"
                                    height="6"
                                    rx="3"
                                    fill="rgba(99,102,241,0.12)"
                                    stroke="rgba(99,102,241,0.3)"
                                    strokeWidth="0.2"
                                />
                                <text
                                    x="50"
                                    y="74"
                                    textAnchor="middle"
                                    fill="#6366f1"
                                    fontSize="2.5"
                                    fontWeight="700"
                                    fontFamily="var(--font-jetbrains-mono, monospace)"
                                >
                                    21 SERVICES
                                </text>
                            </motion.g>
                        )}
                    </motion.g>
                </g>
            </svg>
        </div>
    );
}
