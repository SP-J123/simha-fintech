"use client";

import React from "react";
import { motion } from "framer-motion";

/*  ─────────────────────────────────────────────────────────
    HeroVisual — large animated graphic for the hero right side.
    Combines:
      • Floating hexagons representing blockchain blocks
      • Orbiting data nodes with connection lines
      • Pulsing central shield icon
      • Flow particles along paths
    ───────────────────────────────────────────────────────── */

const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M${pts.join("L")}Z`;
};

const orbitNodes = [
    { angle: 0, r: 38, label: "DeFi", color: "#06b6d4", size: 4.5 },
    { angle: 60, r: 36, label: "Custody", color: "#6366f1", size: 4 },
    { angle: 120, r: 40, label: "Exchange", color: "#a855f7", size: 5 },
    { angle: 180, r: 37, label: "Tokens", color: "#22c55e", size: 4 },
    { angle: 240, r: 39, label: "Smart\nContracts", color: "#f59e0b", size: 4.5 },
    { angle: 300, r: 35, label: "Compliance", color: "#ec4899", size: 4.5 },
];

const floatingHexagons = [
    { cx: 15, cy: 15, r: 5, delay: 0, dur: 6, color: "#6366f1" },
    { cx: 85, cy: 20, r: 4, delay: 1, dur: 7, color: "#06b6d4" },
    { cx: 20, cy: 85, r: 3.5, delay: 2, dur: 5, color: "#a855f7" },
    { cx: 80, cy: 80, r: 4.5, delay: 0.5, dur: 6.5, color: "#22c55e" },
    { cx: 50, cy: 8, r: 3, delay: 1.5, dur: 5.5, color: "#f59e0b" },
    { cx: 8, cy: 50, r: 3, delay: 2.5, dur: 6, color: "#ec4899" },
    { cx: 92, cy: 50, r: 3.5, delay: 0.8, dur: 7, color: "#6366f1" },
    { cx: 35, cy: 92, r: 2.5, delay: 1.2, dur: 5, color: "#06b6d4" },
    { cx: 70, cy: 92, r: 3, delay: 1.8, dur: 6, color: "#a855f7" },
];

const dataParticles = Array.from({ length: 12 }, (_, i) => ({
    angle: (360 / 12) * i,
    delay: i * 0.4,
}));

export default function HeroVisual() {
    const cx = 50;
    const cy = 50;

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1",
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            {/* Big ambient glow */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.05) 50%, transparent 75%)",
                    filter: "blur(50px)",
                    pointerEvents: "none",
                }}
            />

            <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                <defs>
                    {/* Glow filter */}
                    <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
                    </filter>
                    {/* Gradient for central shield */}
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>

                {/* ─── Orbit rings ─── */}
                {[24, 32, 40].map((r, i) => (
                    <circle
                        key={`orbit-${i}`}
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill="none"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="0.2"
                        strokeDasharray={i === 1 ? "2 2" : "none"}
                    />
                ))}

                {/* ─── Connection lines from center to orbit nodes ─── */}
                {orbitNodes.map((node, i) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = cx + Math.cos(rad) * node.r;
                    const ny = cy + Math.sin(rad) * node.r;
                    return (
                        <motion.line
                            key={`conn-${i}`}
                            x1={cx}
                            y1={cy}
                            x2={nx}
                            y2={ny}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="0.15"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                        />
                    );
                })}

                {/* ─── Floating hexagons (blockchain blocks) ─── */}
                {floatingHexagons.map((hex, i) => (
                    <g key={`hex-${i}`}>
                        <motion.path
                            d={hexPath(hex.cx, hex.cy, hex.r)}
                            fill={`${hex.color}08`}
                            stroke={`${hex.color}35`}
                            strokeWidth="0.2"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: hex.delay * 0.3 }}
                        >
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values={`0,0; 0,${-1.5 + (i % 3) * 0.5}; 0,0`}
                                dur={`${hex.dur}s`}
                                repeatCount="indefinite"
                            />
                        </motion.path>
                    </g>
                ))}

                {/* ─── Orbit nodes ─── */}
                {orbitNodes.map((node, i) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = cx + Math.cos(rad) * node.r;
                    const ny = cy + Math.sin(rad) * node.r;

                    return (
                        <g key={`node-${i}`}>
                            {/* Node pulse */}
                            <circle
                                cx={nx}
                                cy={ny}
                                r={node.size + 1.5}
                                fill="none"
                                stroke={node.color}
                                strokeWidth="0.15"
                                opacity="0.2"
                            >
                                <animate
                                    attributeName="r"
                                    values={`${node.size + 1.5};${node.size + 3};${node.size + 1.5}`}
                                    dur="3s"
                                    repeatCount="indefinite"
                                    begin={`${i * 0.5}s`}
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.2;0.05;0.2"
                                    dur="3s"
                                    repeatCount="indefinite"
                                    begin={`${i * 0.5}s`}
                                />
                            </circle>

                            {/* Node circle */}
                            <motion.circle
                                cx={nx}
                                cy={ny}
                                r={node.size}
                                fill={`${node.color}15`}
                                stroke={node.color}
                                strokeWidth="0.4"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                            />

                            {/* Node label */}
                            <motion.text
                                x={nx}
                                y={ny + node.size + 3.5}
                                textAnchor="middle"
                                fill={node.color}
                                fontSize="2.2"
                                fontWeight="600"
                                fontFamily="var(--font-space-grotesk, sans-serif)"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.85 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                            >
                                {node.label.split("\n").map((line, li) => (
                                    <tspan key={li} x={nx} dy={li === 0 ? 0 : "2.8"}>
                                        {line}
                                    </tspan>
                                ))}
                            </motion.text>
                        </g>
                    );
                })}

                {/* ─── Data particles flowing toward center ─── */}
                {dataParticles.map((p, i) => {
                    const rad = (p.angle * Math.PI) / 180;
                    const startX = cx + Math.cos(rad) * 46;
                    const startY = cy + Math.sin(rad) * 46;
                    return (
                        <circle key={`particle-${i}`} r="0.5" fill="#6366f1" opacity="0.5">
                            <animateMotion
                                dur="3s"
                                repeatCount="indefinite"
                                begin={`${p.delay}s`}
                                path={`M${startX},${startY} L${cx},${cy}`}
                            />
                            <animate
                                attributeName="opacity"
                                values="0;0.7;0"
                                dur="3s"
                                repeatCount="indefinite"
                                begin={`${p.delay}s`}
                            />
                            <animate
                                attributeName="r"
                                values="0.3;0.6;0.3"
                                dur="3s"
                                repeatCount="indefinite"
                                begin={`${p.delay}s`}
                            />
                        </circle>
                    );
                })}

                {/* ─── Central shield ─── */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                >
                    {/* Shield background */}
                    <circle cx={cx} cy={cy} r="9" fill="rgba(13,17,23,0.9)" />
                    <circle
                        cx={cx}
                        cy={cy}
                        r="9"
                        fill="none"
                        stroke="url(#shieldGrad)"
                        strokeWidth="0.5"
                    />
                    {/* Inner glow ring */}
                    <circle
                        cx={cx}
                        cy={cy}
                        r="7"
                        fill="none"
                        stroke="rgba(99,102,241,0.15)"
                        strokeWidth="0.3"
                    />

                    {/* Shield icon — simplified path */}
                    <path
                        d={`M${cx},${cy - 5} L${cx + 4},${cy - 2.5} L${cx + 4},${cy + 1.5} 
                Q${cx + 3},${cy + 4} ${cx},${cy + 5.5} 
                Q${cx - 3},${cy + 4} ${cx - 4},${cy + 1.5} 
                L${cx - 4},${cy - 2.5} Z`}
                        fill="none"
                        stroke="url(#shieldGrad)"
                        strokeWidth="0.4"
                        opacity="0.9"
                    />
                    {/* Checkmark inside shield */}
                    <motion.path
                        d={`M${cx - 1.8},${cy + 0.5} L${cx - 0.5},${cy + 2} L${cx + 2},${cy - 1.5}`}
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    />
                </motion.g>

                {/* ─── Outer rotating ring ─── */}
                <g>
                    <circle
                        cx={cx}
                        cy={cy}
                        r="44"
                        fill="none"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="0.3"
                        strokeDasharray="3 4"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from={`0 ${cx} ${cy}`}
                            to={`360 ${cx} ${cy}`}
                            dur="60s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </svg>
        </div>
    );
}
