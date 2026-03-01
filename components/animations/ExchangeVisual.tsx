"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ExchangeVisual() {
    const [mounted, setMounted] = useState(false);
    const [randomData, setRandomData] = useState({
        candles: Array(24).fill({ height: 0, wickHeight: 0 }),
        askWidths: Array(3).fill(0),
        bidWidths: Array(3).fill(0)
    });

    useEffect(() => {
        setMounted(true);
        setRandomData({
            candles: [...Array(24)].map(() => {
                const h = 30 + Math.random() * 100;
                return { height: h, wickHeight: h + Math.random() * 40 };
            }),
            askWidths: [...Array(3)].map(() => 30 + Math.random() * 60),
            bidWidths: [...Array(3)].map(() => 30 + Math.random() * 60)
        });
    }, []);

    if (!mounted) return null;

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Background Grid */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundSize: "40px 40px",
                    backgroundImage:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                    maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
                }}
            />

            {/* Main Chart Card */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    width: "80%",
                    height: "360px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    position: "relative",
                    zIndex: 10,
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)",
                    overflow: "hidden",
                }}
                className="glass-card"
            >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div>
                        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>BTC/USDT</h3>
                        <span style={{ fontSize: "0.85rem", color: "#22c55e" }}>+5.24% (+2,403.10)</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)" }}>64,204.50</div>
                        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>24h Vol: 1.2B USDT</span>
                    </div>
                </div>

                {/* Animated Candlesticks */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "180px", position: "relative" }}>
                    {[...Array(24)].map((_, i) => {
                        const isGreen = i % 3 !== 0;
                        const height = randomData.candles[i].height;
                        const wickHeight = randomData.candles[i].wickHeight;

                        return (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: wickHeight }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.05,
                                    type: "spring",
                                    stiffness: 50,
                                }}
                                style={{
                                    width: "2px",
                                    background: isGreen ? "rgba(34, 197, 94, 0.5)" : "rgba(239, 68, 68, 0.5)",
                                    position: "relative",
                                    margin: "0 auto",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: height }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.05,
                                        type: "spring",
                                        stiffness: 50,
                                    }}
                                    style={{
                                        width: "8px",
                                        background: isGreen ? "#22c55e" : "#ef4444",
                                        borderRadius: "2px",
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Decorative scanline */}
                <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: "30%",
                        background: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.05), transparent)",
                        zIndex: 20,
                        pointerEvents: "none",
                    }}
                />
            </motion.div>

            {/* Floating Order Books */}
            <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{
                    position: "absolute",
                    right: "5%",
                    top: "60%",
                    width: "220px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1rem",
                    zIndex: 20,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
                }}
                className="glass-card"
            >
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                    <span>Price (USDT)</span>
                    <span>Amount (BTC)</span>
                </div>

                {/* Asks (Red) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "0.75rem" }}>
                    {[...Array(3)].map((_, i) => (
                        <div key={`ask-${i}`} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", position: "relative" }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${randomData.askWidths[i]}%` }}
                                transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    background: "rgba(239, 68, 68, 0.15)",
                                    zIndex: -1,
                                }}
                            />
                            <span style={{ color: "#ef4444" }}>{(64205.50 + i * 1.5).toFixed(2)}</span>
                            <span>{(0.15 + i * 0.2).toFixed(3)}</span>
                        </div>
                    ))}
                </div>

                <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", textAlign: "center", margin: "0.5rem 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "0.4rem 0" }}>
                    64,204.50
                </div>

                {/* Bids (Green) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {[...Array(3)].map((_, i) => (
                        <div key={`bid-${i}`} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", position: "relative" }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${randomData.bidWidths[i]}%` }}
                                transition={{ duration: 1, delay: 1.2 + (i * 0.1) }}
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    background: "rgba(34, 197, 94, 0.15)",
                                    zIndex: -1,
                                }}
                            />
                            <span style={{ color: "#22c55e" }}>{(64203.50 - i * 1.5).toFixed(2)}</span>
                            <span>{(0.15 + i * 0.2).toFixed(3)}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
