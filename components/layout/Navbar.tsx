"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import {
    List,
    X,
    CaretDown,
    ArrowsLeftRight,
    CloudArrowUp,
    Wallet,
    Coins,
} from "@phosphor-icons/react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "Learn", href: "/blog" },
];

const productLinks = [
    { label: "Simha CEX", href: "/products/cex", desc: "Institutional exchange", icon: ArrowsLeftRight },
    { label: "Simha DEX", href: "/products/dex", desc: "DeFi trading protocol", icon: CloudArrowUp },
    { label: "Digital Wallet", href: "/products/wallet", desc: "Multi-chain MPC wallet", icon: Wallet },
    { label: "Coin Ecosystem", href: "/products/coin", desc: "Utility & governance", icon: Coins },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Auto-close mobile nav on route change
    useEffect(() => {
        // eslint-disable-next-line
        setMobileOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "var(--navbar-height)",
                    zIndex: 1000,
                    background: scrolled
                        ? "rgba(5, 13, 26, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid var(--border)"
                        : "1px solid transparent",
                    transition: "all var(--transition-base)",
                }}
            >
                <Container
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
                            fontSize: "1.35rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                        }}
                    >
                        <img
                            src="/logo.webp"
                            alt="Simha Fintech Logo"
                            style={{ height: "48px", width: "auto", objectFit: "contain" }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                        className="desktop-nav"
                    >
                        <Link
                            href="/"
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: pathname === "/" ? "var(--text-primary)" : "var(--text-muted)",
                                transition: "color var(--transition-fast)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === "/" ? "var(--text-primary)" : "var(--text-muted)")}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: pathname === "/about" ? "var(--text-primary)" : "var(--text-muted)",
                                transition: "color var(--transition-fast)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === "/about" ? "var(--text-primary)" : "var(--text-muted)")}
                        >
                            About
                        </Link>

                        {/* Products Dropdown */}
                        <div
                            style={{ position: "relative" }}
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.25rem",
                                    fontSize: "0.95rem",
                                    fontWeight: 500,
                                    color: pathname?.startsWith("/products") ? "var(--brand-primary)" : "var(--text-muted)",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0.5rem 0",
                                    transition: "color var(--transition-fast)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = pathname?.startsWith("/products") ? "var(--brand-primary)" : "var(--text-muted)")}
                            >
                                Products <CaretDown size={14} weight="bold" />
                            </button>

                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: "-2rem",
                                            width: "280px",
                                            background: "rgba(13, 20, 36, 0.95)",
                                            backdropFilter: "blur(20px)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "12px",
                                            padding: "0.5rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.25rem",
                                            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)",
                                        }}
                                    >
                                        {productLinks.map((product) => (
                                            <Link
                                                key={product.href}
                                                href={product.href}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "0.75rem",
                                                    padding: "0.75rem",
                                                    borderRadius: "8px",
                                                    textDecoration: "none",
                                                    transition: "background var(--transition-fast)",
                                                }}
                                                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                                                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                            >
                                                <div
                                                    style={{
                                                        width: "2.25rem",
                                                        height: "2.25rem",
                                                        borderRadius: "8px",
                                                        background: "rgba(99, 102, 241, 0.1)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <product.icon size={18} weight="duotone" color="var(--brand-primary)" />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.125rem" }}>
                                                        {product.label}
                                                    </div>
                                                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
                                                        {product.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/services"
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: pathname === "/services" ? "var(--text-primary)" : "var(--text-muted)",
                                transition: "color var(--transition-fast)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === "/services" ? "var(--text-primary)" : "var(--text-muted)")}
                        >
                            Services
                        </Link>

                        <Link
                            href="/compliance"
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: pathname === "/compliance" ? "var(--text-primary)" : "var(--text-muted)",
                                transition: "color var(--transition-fast)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === "/compliance" ? "var(--text-primary)" : "var(--text-muted)")}
                        >
                            Compliance
                        </Link>

                        <Link
                            href="/blog"
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: pathname === "/blog" ? "var(--text-primary)" : "var(--text-muted)",
                                transition: "color var(--transition-fast)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === "/blog" ? "var(--text-primary)" : "var(--text-muted)")}
                        >
                            Learn
                        </Link>

                        <Link href="/contact" className="btn-primary" style={{ padding: "0.625rem 1.5rem", fontSize: "0.9rem" }}>
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="mobile-hamburger"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            padding: "0.5rem",
                            zIndex: 1002,
                        }}
                    >
                        {mobileOpen ? <X size={28} /> : <List size={28} />}
                    </button>
                </Container>
            </header>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 999,
                        background: "rgba(5, 13, 26, 0.97)",
                        backdropFilter: "blur(20px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2rem",
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                color:
                                    pathname === link.href
                                        ? "var(--brand-primary)"
                                        : "var(--text-primary)",
                                fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div style={{ width: "40px", height: "1px", background: "var(--border)", margin: "0.5rem 0" }} />

                    <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Products</span>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                        {productLinks.map((product) => (
                            <Link
                                key={product.href}
                                href={product.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 500,
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
                                }}
                            >
                                {product.label}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="btn-primary"
                        onClick={() => setMobileOpen(false)}
                        style={{ marginTop: "1rem" }}
                    >
                        Contact Us
                    </Link>
                </div>
            )}

        </>
    );
}
