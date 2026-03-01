"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CurrencyCircleDollar,
  Code,
  Handshake,
  Lightning,
  Lock,
  Globe,
  ChartLineUp,
  Wallet,
  ArrowsLeftRight,
  Fingerprint,
  Clock,
  CloudArrowUp,
  Certificate,
  Coins,
} from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/ui/StaggerContainer";
import CounterAnimation from "@/components/ui/CounterAnimation";
import ParticleNetwork from "@/components/animations/ParticleNetwork";
import PipelineLayer from "@/components/animations/PipelineLayer";
import StatsDashboard from "@/components/animations/StatsDashboard";
import SecurityFortress from "@/components/animations/SecurityFortress";
import HeroVisual from "@/components/animations/HeroVisual";

/* ─── Data ─── */

const trustBadges = [
  { icon: "🇪🇺", label: "EU Regulated", color: "var(--brand-primary)" },
  { icon: "📍", label: "Kraków, Poland", color: "var(--brand-secondary)" },
  { icon: "🔒", label: "KYC/AML Compliant", color: "var(--brand-electric)" },
];

const serviceCategories = [
  {
    title: "Financial & Trading",
    icon: CurrencyCircleDollar,
    color: "var(--brand-primary)",
    desc: "Crypto exchange infrastructure, OTC trading desks, liquidity provision, digital asset custody, fiat-crypto payment gateways, and institutional brokerage services.",
    services: [
      "Crypto Exchange Infrastructure",
      "OTC Trading Desk",
      "Liquidity Provision",
      "Digital Asset Custody",
    ],
    more: 2,
  },
  {
    title: "Technical Solutions",
    icon: Code,
    color: "var(--brand-secondary)",
    desc: "Custom blockchain development, Solidity smart contracts, DeFi protocol engineering, token creation & tokenization, security auditing, and crypto-as-a-service platforms.",
    services: [
      "Blockchain Development",
      "Smart Contract Development",
      "DeFi Protocol Development",
      "Token Creation & Tokenization",
    ],
    more: 2,
  },
  {
    title: "Consulting & Advisory",
    icon: Handshake,
    color: "var(--brand-electric)",
    desc: "Regulatory compliance consulting, market entry strategy, tokenomics design, institutional advisory, Web3 transformation, legal and tax structuring, and investor relations.",
    services: [
      "Regulatory Compliance",
      "Market Entry Strategy",
      "Tokenomics Design",
      "Institutional Advisory",
    ],
    more: 5,
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "EU-Regulated & Compliant",
    desc: "KRS-registered in Poland with full GDPR, MiCA, and AML/KYC adherence. Transparent governance backed by EU regulatory standards.",
  },
  {
    icon: Lock,
    title: "Institutional-Grade Security",
    desc: "Multi-signature wallets, cold storage custody, SOC monitoring, and regular penetration testing protect every digital asset.",
  },
  {
    icon: Lightning,
    title: "Rapid Deployment",
    desc: "Our white-label CaaS platform enables new crypto businesses to launch in weeks, not months — with full compliance built in.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Expertise",
    desc: "Headquartered in Kraków with clients across Europe, Middle East, and Asia. Deep understanding of multi-jurisdictional regulations.",
  },
  {
    icon: ChartLineUp,
    title: "21 Services, One Partner",
    desc: "Financial, Technical, and Consulting verticals under one roof — eliminating vendor fragmentation and reducing integration complexity.",
  },
  {
    icon: Fingerprint,
    title: "Custom-Built Solutions",
    desc: "No off-the-shelf templates. Every solution is architected for your specific business model, compliance requirements, and growth targets.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    desc: "Crypto never sleeps, and neither do our systems. Round-the-clock monitoring, support, and incident response for mission-critical infrastructure.",
  },
  {
    icon: Certificate,
    title: "Transparent Governance",
    desc: "Publicly verifiable company registry (KRS, NIP, REGON), audited smart contracts, and clear regulatory disclosures build institutional trust.",
  },
];

const ecosystemProducts = [
  {
    label: "Simha CEX Platform",
    desc: "A full-featured centralized exchange with institutional-grade matching engine, advanced order types, and integrated KYC/AML compliance. Supporting 50+ trading pairs and 100+ tokens.",
    tag: "Exchange",
    tagColor: "var(--brand-primary)",
    href: "/products/cex",
    icon: ArrowsLeftRight,
  },
  {
    label: "Simha DEX Protocol",
    desc: "Decentralized trading protocol with automated market making, concentrated liquidity, and cross-chain bridge integration. Non-custodial, audited, and gas-optimized.",
    tag: "DeFi",
    tagColor: "var(--brand-secondary)",
    href: "/products/dex",
    icon: CloudArrowUp,
  },
  {
    label: "Simha Digital Wallet",
    desc: "Multi-chain digital wallet with biometric security, staking support, DApp browser, and fiat on-ramp integration. Enterprise-grade key management with social recovery.",
    tag: "Wallet",
    tagColor: "var(--brand-electric)",
    href: "/products/wallet",
    icon: Wallet,
  },
  {
    label: "Simha Coin Ecosystem",
    desc: "The native utility token powering the Simha ecosystem. Providing governance rights, protocol fee discounts, staking rewards, and cross-chain ecosystem utility.",
    tag: "Token",
    tagColor: "#f59e0b",
    href: "/products/coin",
    icon: Coins,
  },
];

/* ─── Page Component ─── */

export default function HomePage() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section
        style={{
          minHeight: "calc(100vh - var(--navbar-height))",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ParticleNetwork />

        <Container style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="split-layout"
          >
            {/* Left — Text */}
            <div>
              {/* Trust Badges */}
              <StaggerContainer
                stagger={0.15}
                style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}
              >
                {trustBadges.map((badge) => (
                  <motion.span
                    key={badge.label}
                    variants={staggerItemVariants}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      padding: "0.4rem 0.9rem",
                      background: `${badge.color}12`,
                      border: `1px solid ${badge.color}30`,
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: badge.color,
                    }}
                  >
                    {badge.icon} {badge.label}
                  </motion.span>
                ))}
              </StaggerContainer>

              {/* Headline */}
              <AnimatedSection variant="fade-up" delay={0.3}>
                <h1 style={{ marginBottom: "1.5rem" }}>
                  Institutional-Grade{" "}
                  <span className="gradient-text">Blockchain & Crypto</span>{" "}
                  Solutions
                </h1>
              </AnimatedSection>

              <AnimatedSection variant="fade-up" delay={0.45}>
                <p
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                    marginBottom: "2.5rem",
                    maxWidth: "560px",
                  }}
                >
                  21 services across Financial, Technical, and Consulting verticals.
                  EU-regulated, enterprise-ready, built for the future of digital assets.
                  From crypto exchange infrastructure to regulatory compliance — one trusted partner for your entire blockchain journey.
                </p>
              </AnimatedSection>

              {/* CTAs */}
              <AnimatedSection variant="fade-up" delay={0.6}>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", position: "relative", zIndex: 10 }}>
                  <Link
                    href="/services"
                    className="btn-primary"
                    style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                  >
                    Explore Services
                  </Link>
                  <Link href="/contact" className="btn-secondary" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.2)" }}>
                    Request Consultation
                  </Link>
                </div>
              </AnimatedSection>

              {/* Scroll indicator */}
              <AnimatedSection variant="fade-in" delay={1.2}>
                <div
                  style={{
                    marginTop: "4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--text-dim)",
                    fontSize: "0.8rem",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: "20px",
                      height: "32px",
                      borderRadius: "10px",
                      border: "1.5px solid var(--text-dim)",
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "6px",
                        borderRadius: "2px",
                        background: "var(--text-dim)",
                      }}
                    />
                  </motion.div>
                  Scroll to explore
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Hero Visual */}
            <AnimatedSection variant="fade-in" delay={0.4}>
              <div style={{ opacity: 0.5, pointerEvents: "none", position: "absolute", top: 0, right: 0, width: "100%", height: "100%", zIndex: 0 }} className="desktop-only-visual">
                <HeroVisual />
              </div>
              <div className="mobile-hide-visual" style={{ position: "relative", zIndex: 5 }}>
                <HeroVisual />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ════════════ SERVICE ECOSYSTEM ════════════ */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <Container>
          <div style={{ marginBottom: "4rem" }}>
            <SectionHeading
              eyebrow="What We Offer"
              heading="21 Services,"
              gradientText="One Partner"
              subtitle="Financial, Technical, and Consulting solutions designed for enterprises entering the digital asset economy. Every service built to institutional standards."
              align="center"
            />
          </div>

          <StaggerContainer stagger={0.15} style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {serviceCategories.map((cat, index) => (
              <div
                key={cat.title}
                className="split-layout"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
              >
                {/* Left Side: Service Card */}
                <motion.div
                  variants={staggerItemVariants}
                  className="glass-card"
                  style={{ padding: "2rem", cursor: "pointer", height: "100%" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "12px",
                        background: `${cat.color}15`,
                        border: `1px solid ${cat.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <cat.icon size={24} weight="duotone" color={cat.color} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", margin: 0 }}>{cat.title}</h3>
                  </div>
                  <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                    {cat.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {cat.services.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.3rem 0.75rem",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border)",
                          borderRadius: "6px",
                          color: "var(--text-dim)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                    {cat.more > 0 && (
                      <span
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.3rem 0.75rem",
                          background: `${cat.color}10`,
                          border: `1px solid ${cat.color}25`,
                          borderRadius: "6px",
                          color: cat.color,
                          fontWeight: 600,
                        }}
                      >
                        +{cat.more} more
                      </span>
                    )}
                  </div>
                  <Link
                    href="/services"
                    style={{
                      display: "inline-block",
                      marginTop: "1.25rem",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: cat.color,
                    }}
                  >
                    View All →
                  </Link>
                </motion.div>

                {/* Right Side: Animated Pipeline Layer */}
                <AnimatedSection variant="fade-in" delay={0.2}>
                  <PipelineLayer index={index} />
                </AnimatedSection>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Why Simha Fintech"
            heading="Built for"
            gradientText="Institutional Trust"
            subtitle="Eight pillars of excellence that set us apart in the blockchain and cryptocurrency industry. Every feature designed for enterprise-grade reliability."
          />
          <StaggerContainer
            stagger={0.08}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItemVariants}
                className="glass-card"
                style={{ padding: "1.75rem" }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "12px",
                    background: "rgba(99, 102, 241, 0.1)",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <item.icon size={22} weight="duotone" color="var(--brand-primary)" />
                </div>
                <h4 style={{ marginBottom: "0.625rem" }}>{item.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ════════════ COMPANY STATS DASHBOARD ════════════ */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="split-layout"
          >
            <div>
              <SectionHeading
                eyebrow="By the Numbers"
                heading="Powering the"
                gradientText="Digital Asset Economy"
                subtitle="Operational metrics that demonstrate our commitment to reliability, security, and comprehensive service delivery across all verticals."
                align="left"
              />

              {/* Stat counters grid */}
              <StaggerContainer
                stagger={0.1}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                }}
              >
                {[
                  { value: 21, suffix: "", label: "Services", color: "var(--brand-primary)" },
                  { value: 3, suffix: "", label: "Categories", color: "var(--brand-secondary)" },
                  { value: 50, suffix: "+", label: "Trading Pairs", color: "var(--brand-electric)" },
                  { value: 100, suffix: "+", label: "Supported Tokens", color: "#22c55e" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={staggerItemVariants}
                    style={{
                      padding: "1.25rem",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: stat.color,
                        lineHeight: 1,
                        marginBottom: "0.375rem",
                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                      }}
                    >
                      <CounterAnimation target={stat.value} suffix={stat.suffix} duration={1.5} />
                    </div>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>

            {/* Terminal Dashboard */}
            <AnimatedSection variant="slide-right" delay={0.2}>
              <StatsDashboard />
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ════════════ SECURITY ════════════ */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="split-layout-reverse"
          >
            {/* Security Visual */}
            <AnimatedSection variant="slide-left" delay={0.2}>
              <SecurityFortress />
            </AnimatedSection>

            <div>
              <SectionHeading
                eyebrow="Security First"
                heading="Five Layers of"
                gradientText="Enterprise Protection"
                subtitle="Your digital assets are protected by a defense-in-depth security architecture. From 2FA authentication to 24/7 SOC monitoring — every layer is battle-tested."
                align="left"
              />
              <StaggerContainer stagger={0.1} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  "Two-factor authentication on all accounts and operations",
                  "Cold storage custody with geographic distribution",
                  "Multi-signature wallets requiring consensus for transactions",
                  "Regular penetration testing by independent security firms",
                  "24/7 Security Operations Center with real-time threat detection",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItemVariants}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "0.75rem 1rem",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════ ECOSYSTEM ════════════ */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <Container>
          <SectionHeading
            eyebrow="Ecosystem"
            heading="The Simha"
            gradientText="Product Suite"
            subtitle="A complete ecosystem of crypto products — from centralized exchange to decentralized protocol to digital wallet. All built in-house, all launching soon."
          />
          <StaggerContainer
            stagger={0.12}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {ecosystemProducts.map((product) => (
              <motion.div
                key={product.label}
                variants={staggerItemVariants}
                style={{ height: "100%" }}
              >
                <Link
                  href={product.href}
                  className="glass-card product-card-hover"
                  style={{
                    padding: "2rem",
                    display: "block",
                    height: "100%",
                    position: "relative",
                    textDecoration: "none"
                  }}
                >
                  {/* Tag */}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.25rem 0.625rem",
                      background: `${product.tagColor}12`,
                      border: `1px solid ${product.tagColor}25`,
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: product.tagColor,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {product.tag}
                  </span>

                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "14px",
                      background: `${product.tagColor}10`,
                      border: `1px solid ${product.tagColor}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                      transition: "transform 0.3s ease",
                    }}
                    className="product-icon-wrapper"
                  >
                    <product.icon size={24} weight="duotone" color={product.tagColor} />
                  </div>

                  <h3 style={{ marginBottom: "0.75rem", color: "var(--text-primary)" }}>{product.label}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                    {product.desc}
                  </p>

                  <div style={{ marginTop: "1.5rem", fontSize: "0.9rem", fontWeight: 600, color: product.tagColor, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Explore Platform <span style={{ fontSize: "1.1em" }}>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <CTABanner
        heading="Ready to Transform Your"
        gradientText="Digital Asset Strategy?"
        subtitle="Whether you're launching a trading platform, exploring DeFi, or navigating EU regulations — Simha Fintech provides the institutional-grade solutions and regulatory expertise your enterprise needs to succeed in the digital asset economy."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}
