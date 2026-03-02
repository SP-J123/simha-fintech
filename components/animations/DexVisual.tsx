"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DexVisual() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [30, -10]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    const pools = [
        { id: "ETH/USDC", x: "30%", y: "20%", size: 80, color: "#3b82f6" },
        { id: "WBTC/ETH", x: "70%", y: "30%", size: 100, color: "#f59e0b" },
        { id: "SIMHA/USDT", x: "50%", y: "60%", size: 120, color: "#10b981" },
        { id: "SOL/USDC", x: "20%", y: "70%", size: 70, color: "#8b5cf6" },
        { id: "ARB/ETH", x: "80%", y: "75%", size: 90, color: "#ec4899" },
    ];

    const connections = [
        { from: "ETH/USDC", to: "SIMHA/USDT" },
        { from: "WBTC/ETH", to: "SIMHA/USDT" },
        { from: "ETH/USDC", to: "SOL/USDC" },
        { from: "SIMHA/USDT", to: "ARB/ETH" },
        { from: "WBTC/ETH", to: "ARB/ETH" },
    ];

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "500px",
                perspective: "1000px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    rotateX,
                    scale
                }}
            >
                {/* Connections Container */}
                <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
                    {connections.map((conn, idx) => {
                        const fromPool = pools.find(p => p.id === conn.from);
                        const toPool = pools.find(p => p.id === conn.to);
                        if (!fromPool || !toPool) return null;

                        return (
                            <motion.line
                                key={idx}
                                x1={fromPool.x}
                                y1={fromPool.y}
                                x2={toPool.x}
                                y2={toPool.y}
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth={2}
                                strokeDasharray="4 4"
                                initial={{ strokeDashoffset: 100 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        );
                    })}

                    {/* Routing Particles */}
                    {connections.map((conn, idx) => {
                        const fromPool = pools.find(p => p.id === conn.from);
                        const toPool = pools.find(p => p.id === conn.to);
                        if (!fromPool || !toPool) return null;

                        return (
                            <motion.circle
                                key={`particle-${idx}`}
                                r={4}
                                fill={fromPool.color}
                                filter="blur(2px)"
                                initial={{ cx: fromPool.x, cy: fromPool.y, opacity: 0 }}
                                animate={{
                                    cx: [fromPool.x, toPool.x],
                                    cy: [fromPool.y, toPool.y],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: 2 + Math.random(),
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeInOut"
                                }}
                            />
                        );
                    })}
                </svg>

                {/* Liquidity Pools */}
                {pools.map((pool, idx) => (
                    <motion.div
                        key={idx}
                        style={{
                            position: "absolute",
                            left: pool.x,
                            top: pool.y,
                            width: pool.size,
                            height: pool.size,
                            x: "-50%",
                            y: "-50%",
                            background: `radial-gradient(circle, ${pool.color}33 0%, transparent 70%)`,
                            border: `1px solid ${pool.color}66`,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 0 20px ${pool.color}22`,
                            cursor: "pointer"
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${pool.color}44` }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                            style={{
                                width: "40%",
                                height: "40%",
                                borderRadius: "50%",
                                background: pool.color,
                                filter: "blur(10px)",
                                opacity: 0.5
                            }}
                        />
                        <span style={{
                            position: "absolute",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                            pointerEvents: "none"
                        }}>
                            {pool.id}
                        </span>
                    </motion.div>
                ))}

                {/* Global Entry/Exit Points */}
                <motion.div
                    style={{ position: "absolute", left: "10%", top: "45%", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px dashed rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--text-primary)" }} />
                </motion.div>
                <div style={{ position: "absolute", left: "calc(10% - 30px)", top: "calc(45% + 30px)", fontSize: "0.7rem", color: "var(--text-muted)" }}>User Trade In</div>

                <motion.div
                    style={{ position: "absolute", left: "90%", top: "45%", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px dashed rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--text-primary)" }} />
                </motion.div>
                <div style={{ position: "absolute", left: "calc(90% - 30px)", top: "calc(45% + 30px)", fontSize: "0.7rem", color: "var(--text-muted)" }}>Routed Output</div>

            </motion.div>
        </div>
    );
}
