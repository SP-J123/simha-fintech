import React from "react";
import Link from "next/link";
import {
    ArrowsLeftRight,
    ChartBar,
    Bank,
    ShieldCheck,
    Lightning,
    Globe,
    Cpu,
    Database,
    Plugs,
    Terminal,
    Code,
    Headset,
    Wall
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";
import ExchangeVisual from "@/components/animations/ExchangeVisual";

const features = [
    {
        icon: ChartBar,
        title: "High-Performance Matching Engine",
        desc: "Process up to 100,000 orders per second with ultra-low latency. Built in Rust and C++ for enterprise performance during peak market volatility."
    },
    {
        icon: ShieldCheck,
        title: "Institutional Custody",
        desc: "Integrated cold storage solutions with MPC (Multi-Party Computation) tech and customizable approval quorums mapped to your corporate roles."
    },
    {
        icon: Bank,
        title: "Fiat On/Off Ramps",
        desc: "Seamless SEPA, SWIFT, and card integrations for global liquidity flow. Out-of-the-box banking network connectivity."
    },
    {
        icon: Lightning,
        title: "Advanced Trading Types",
        desc: "Support for limit, market, stop-loss, trailing stop, and OCO (One-Cancels-the-Other) orders natively in the matching engine."
    },
    {
        icon: Globe,
        title: "Global Liquidity Aggregation",
        desc: "Don't start with an empty order book. Plug directly into Binance, Kraken, and major regional exchange order books on day one."
    },
    {
        icon: ArrowsLeftRight,
        title: "Automated KYC/AML",
        desc: "Plug-and-play compliance integrations with SumSub, Chainalysis, and Elliptic. Built for MiCA readiness and full EU compliance tracking."
    },
    {
        icon: Wall,
        title: "Real-Time Risk Engine",
        desc: "Proactive pre-trade and post-trade risk checks. Customizable margin limits, automated liquidation protocols, and fat-finger prevention to protect exchange solvency."
    },
    {
        icon: Headset,
        title: "24/7 Enterprise Support",
        desc: "Dedicated Technical Account Managers (TAMs), guaranteed SLAs, and direct Slack channels with our core engineering team for immediate incident response."
    }
];

export const metadata = {
    title: "Simha CEX Platform | Centralized Exchange Solutions",
    description: "Launch your own institutional centralized crypto exchange in weeks with the Simha CEX white-label platform. EU regulated matching engine and custody architecture.",
    keywords: [
        "institutional crypto exchange",
        "white-label matching engine",
        "EU regulated order book",
        "CEX software",
        "crypto exchange platform",
        "enterprise crypto exchange",
        "crypto custody architecture"
    ],
    openGraph: {
        title: "Simha CEX Platform | Centralized Exchange Solutions",
        description: "Launch your own institutional centralized crypto exchange in weeks with the Simha CEX white-label platform. EU regulated matching engine and custody architecture.",
        type: "website",
    },
};

export default function CexProductPage() {
    return (
        <>
            {/* ──────────────── HERO ──────────────── */}
            <section style={{ paddingTop: "var(--navbar-height)", position: "relative", overflow: "hidden" }}>

                {/* Abstract Background Glow */}
                <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "10%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <Container>
                    <div className="section split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

                        <div style={{ position: "relative", zIndex: 10 }}>
                            <AnimatedSection variant="fade-up">
                                <span style={{
                                    display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "99px", color: "var(--brand-primary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                                }}>
                                    <ArrowsLeftRight size={16} weight="bold" /> Product Suite
                                </span>

                                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                    Simha <span className="gradient-text">CEX</span> Platform
                                </h1>

                                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                    A full-featured centralized exchange platform with an institutional-grade matching engine, advanced order types, and integrated KYC/AML compliance. Launch your compliant exchange in weeks, not years.
                                </p>

                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                    <Link href="/contact" className="btn-primary">Request Demo</Link>
                                    <Link href="/services" className="btn-secondary">View Architecture</Link>
                                </div>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <ExchangeVisual />
                        </AnimatedSection>

                    </div>
                </Container>
            </section>

            {/* ──────────────── FEATURES GRID ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Platform Features"
                        heading="Engineered for"
                        gradientText="Enterprise Scale"
                        subtitle="The Simha CEX platform is built to handle extreme market volatility while maintaining perfect consistency across users balances and order structures."
                        align="center"
                    />

                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "1.5rem",
                            marginTop: "4rem"
                        }}
                    >
                        {features.map((feature, idx) => (
                            <AnimatedSection key={idx} variant="fade-up">
                                <div className="glass-card product-card-hover" style={{ padding: "2rem", height: "100%" }}>
                                    <div style={{
                                        width: "3rem",
                                        height: "3rem",
                                        borderRadius: "12px",
                                        background: "rgba(99, 102, 241, 0.1)",
                                        border: "1px solid rgba(99, 102, 241, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <feature.icon size={24} color="var(--brand-primary)" weight="duotone" />
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{feature.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ──────────────── ARCHITECTURE ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                        <AnimatedSection variant="slide-right">
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "99px", color: "var(--brand-primary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Cpu size={16} weight="bold" /> High-Performance Stack
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                Institutional-Grade <br /><span className="gradient-text">Architecture</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                At the heart of the Simha CEX platform is a proprietary order matching engine written entirely in Rust and C++. It guarantees ultra-low latency execution (under 50 microseconds) even during unprecedented market volatility.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ padding: "0.5rem", background: "rgba(99, 102, 241, 0.1)", borderRadius: "8px", color: "var(--brand-primary)" }}>
                                        <Database size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>In-Memory Database</h4>
                                        <p style={{ color: "var(--text-dim)", fontSize: "0.95rem" }}>State-of-the-art in-memory data grids ensure order books are processed and reconciled in real-time.</p>
                                    </div>
                                </li>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ padding: "0.5rem", background: "rgba(99, 102, 241, 0.1)", borderRadius: "8px", color: "var(--brand-primary)" }}>
                                        <ShieldCheck size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Microservices Security</h4>
                                        <p style={{ color: "var(--text-dim)", fontSize: "0.95rem" }}>Isolated microservices architecture prevents lateral movement. Compromising one module does not compromise the exchange.</p>
                                    </div>
                                </li>
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem", marginBottom: "0.5rem" }}>
                                    <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Matching Engine Metrics</h4>
                                    <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>Performance under stress-test conditions (1M+ concurrent users).</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "var(--text-muted)" }}>Order Processing Latency</span>
                                    <span style={{ color: "var(--brand-secondary)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>&lt; 50µs</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "var(--text-muted)" }}>Throughput (Orders/sec)</span>
                                    <span style={{ color: "var(--brand-secondary)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>100,000+</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "var(--text-muted)" }}>Market Data Tick Rate</span>
                                    <span style={{ color: "var(--brand-secondary)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>10ms</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ color: "var(--text-muted)" }}>API Rate Limits (VIP)</span>
                                    <span style={{ color: "var(--brand-secondary)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>1,000 Req/s</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── API INTEGRATION ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <div className="split-layout-reverse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

                        <AnimatedSection variant="slide-right">
                            <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px", background: "#0d1117", border: "1px solid #30363d", overflow: "hidden" }}>
                                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
                                </div>
                                <pre style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#c9d1d9", overflowX: "auto", margin: 0 }}>
                                    <code>
                                        {`// Simha REST API v3
const order = await simha.placeOrder({
  symbol: "BTC/USDT",
  side: "BUY",
  type: "LIMIT",
  timeInForce: "GTC",
  price: "45000.00",
  quantity: "1.5"
});

console.log(order.id);
// Output: "af8d92-11e..."

// WebSocket Stream
simha.ws.subscribe("trade:BTC_USDT", (trade) => {
  console.log(\`New Trade at $\${trade.price}\`);
});`}
                                    </code>
                                </pre>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.3)", borderRadius: "99px", color: "var(--brand-secondary)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <Terminal size={16} weight="bold" /> Developer First
                            </span>
                            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
                                Enterprise <br /><span className="gradient-text-cyan">API Integration</span>
                            </h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                Empower your market makers and algorithmic traders with comprehensive, deeply documented REST and WebSocket APIs.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <Plugs size={24} weight="duotone" color="var(--brand-secondary)" />
                                    <span style={{ fontSize: "1.05rem", color: "var(--text-primary)" }}>Bi-directional WebSocket streams for real-time orderbook deltas.</span>
                                </li>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <Terminal size={24} weight="duotone" color="var(--brand-secondary)" />
                                    <span style={{ fontSize: "1.05rem", color: "var(--text-primary)" }}>FIX API support for legacy institutional connectivity.</span>
                                </li>
                                <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <Code size={24} weight="duotone" color="var(--brand-secondary)" />
                                    <span style={{ fontSize: "1.05rem", color: "var(--text-primary)" }}>Official SDKs available in Python, TypeScript, Go, and Rust.</span>
                                </li>
                            </ul>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <CTABanner
                heading="Ready to Build Your"
                gradientText="Exchange Empire?"
                subtitle="Skip the 18-month development cycle. Leverage the Simha CEX platform to deploy a fully compliant, production-ready trading venue tailored to your regional regulations."
                primaryLabel="Talk to our Architects"
                primaryHref="/contact"
                secondaryLabel="Explore Compliance"
                secondaryHref="/compliance"
            />
        </>
    );
}
