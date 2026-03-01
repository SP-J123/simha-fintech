"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
    EnvelopeSimple,
    MapPin,
    LinkedinLogo,
    XLogo,
    GithubLogo,
} from "@phosphor-icons/react";

const footerColumns = [
    {
        title: "Services",
        links: [
            { label: "Crypto Exchange", href: "/services/crypto-exchange-infrastructure" },
            { label: "OTC Trading", href: "/services/otc-trading-desk" },
            { label: "Liquidity Solutions", href: "/services/liquidity-provision" },
            { label: "Smart Contracts", href: "/services/smart-contract-development" },
            { label: "Blockchain Dev", href: "/services/blockchain-development" },
            { label: "View All", href: "/services" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Compliance", href: "/compliance" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Cookie Policy", href: "/legal/cookies" },
            { label: "Risk Disclaimer", href: "/legal/disclaimer" },
            { label: "AML/KYC Policy", href: "/legal/aml-kyc" },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "80px",
                paddingBottom: "40px",
                background: "var(--bg-primary)",
            }}
        >
            <Container>
                {/* Top Section: Columns */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                        gap: "3rem",
                        '@media (max-width: 1024px)': {
                            gridTemplateColumns: "1fr 1fr",
                        },
                        '@media (max-width: 640px)': {
                            gridTemplateColumns: "1fr",
                        }
                    } as React.CSSProperties}
                    className="footer-grid-custom"
                >
                    {/* Column 1: Logo & Contact */}
                    <div style={{ paddingRight: "2rem" }}>
                        <Link href="/" style={{ display: "inline-block", marginBottom: "1.5rem" }}>
                            <img
                                src="/logo.webp"
                                alt="Simha Fintech Logo"
                                style={{ height: "80px", width: "auto", objectFit: "contain" }}
                            />
                        </Link>
                        <p style={{
                            fontSize: "0.95rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                            marginBottom: "2rem"
                        }}>
                            Empowering institutions with secure, scalable, and compliant infrastructure for the decentralized economy. We bridge the gap between traditional finance and the future of Web3.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <EnvelopeSimple
                                    size={20}
                                    weight="regular"
                                    color="var(--text-muted)"
                                    style={{ flexShrink: 0 }}
                                />
                                <a href="mailto:contact@simhafintech.com" className="footer-link" style={{ fontSize: "0.95rem" }}>
                                    contact@simhafintech.com
                                </a>
                            </div>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                <MapPin
                                    size={20}
                                    weight="regular"
                                    color="var(--text-muted)"
                                    style={{ flexShrink: 0, marginTop: "2px" }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "var(--text-dim)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Kraków, Poland
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Columns 2-4: Links */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    color: "var(--brand-primary)",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {col.title}
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                {col.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="footer-link" style={{ fontSize: "0.95rem" }}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        marginTop: "60px",
                        paddingTop: "24px",
                        borderTop: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                            © {new Date().getFullYear()} Simha Fintech sp. z o.o. All rights reserved.
                        </p>
                        <p style={{
                            fontSize: "0.75rem",
                            color: "var(--brand-primary)",
                            margin: 0,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            fontWeight: 600
                        }}>
                            INSTITUTIONAL • SECURE • COMPLIANT
                        </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color var(--transition-fast)" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                            <LinkedinLogo size={24} weight="fill" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color var(--transition-fast)" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                            <XLogo size={24} weight="fill" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color var(--transition-fast)" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                            <GithubLogo size={24} weight="fill" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
