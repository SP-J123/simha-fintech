import React from "react";
import Link from "next/link";
import {
    RocketLaunch,
    Code,
    GraduationCap,
    Coffee,
    Laptop,
    CurrencyCircleDollar,
    MapPin,
    Clock,
    ArrowRight
} from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggerContainer from "@/components/ui/StaggerContainer";

const joinReasons = [
    {
        icon: RocketLaunch,
        title: "Build the Future",
        desc: "We aren't just maintaining legacy software. You'll be architecting decentralized exchanges, MPC custody solutions, and high-throughput matching engines from scratch.",
        color: "var(--brand-primary)"
    },
    {
        icon: Code,
        title: "Engineering First",
        desc: "Our leadership is deeply technical. We pride ourselves on clean code, automated testing, and adopting the latest stable technologies like Rust, Go, and Next.js 15.",
        color: "var(--brand-secondary)"
    },
    {
        icon: GraduationCap,
        title: "Continuous Learning",
        desc: "The crypto space moves fast. We provide generous annual stipends for courses, conferences, and certifications so you're always at the bleeding edge.",
        color: "var(--brand-electric)"
    },
    {
        icon: MapPin,
        title: "Kraków HQ + Remote",
        desc: "Work from our premium designated hub in Kraków, Poland, or join us fully remotely. We value output and communication over mandatory desk time.",
        color: "#22c55e"
    }
];

const perks = [
    { icon: CurrencyCircleDollar, text: "Competitive Base + Token Options" },
    { icon: Laptop, text: "$2000 Home Office Setup Budget" },
    { icon: Coffee, text: "Fully Stocked Office & Weekly Lunches" },
    { icon: Clock, text: "Flexible Working Hours" }
];

const techStack = [
    "Rust", "Go", "TypeScript", "Next.js 15", "Tailwind v4", "Solidity", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Framer Motion", "tRPC"
];

const openPositions = [
    {
        id: "eng-1",
        title: "Senior Rust Engineer - Matching Engine",
        dept: "Engineering  •  Kraków / Remote",
        type: "Full-Time",
        desc: "Lead the development of our high-volume order matching engine. Requires deep experience in concurrent programming, low latency systems, and memory safety."
    },
    {
        id: "eng-2",
        title: "Frontend Engineer - React / Next.js",
        dept: "Engineering  •  Kraków / Remote",
        type: "Full-Time",
        desc: "Build pixel-perfect, highly responsive trading interfaces and institutional dashboards using Next.js 15, Tailwind CSS, and Framer Motion."
    },
    {
        id: "prod-1",
        title: "Product Manager - Custody Solutions",
        dept: "Product  •  Kraków",
        type: "Full-Time",
        desc: "Own the roadmap for our MPC custody products. Work closely with institutional clients to define approval workflows and policy engine features."
    },
    {
        id: "comp-1",
        title: "Compliance Officer (MiCA/AML)",
        dept: "Legal & Compliance  •  Kraków",
        type: "Full-Time",
        desc: "Ensure all 21 Simha Fintech services adhere strictly to European regulations. Experience with VASP registration and transaction monitoring required."
    }
];

export const metadata = {
    title: "Careers | Simha Fintech",
    description: "Join the Simha Fintech team in Kraków or remotely. We're hiring engineers, product managers, and compliance experts to build the future of digital finance.",
};

export default function CareersPage() {
    return (
        <>
            {/* ──────────────── PAGE HERO ──────────────── */}
            <section className="page-hero" style={{ paddingBottom: "3rem", position: "relative", overflow: "hidden" }}>

                {/* Subtle grid pattern background */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundSize: "40px 40px",
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
                    maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
                    zIndex: 0
                }} />

                <Container style={{ position: "relative", zIndex: 10 }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.4rem 0.8rem", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: "99px", color: "#22c55e", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                <RocketLaunch size={16} weight="bold" /> Join the Team
                            </span>

                            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Architect the <span className="gradient-text" style={{ background: "linear-gradient(to right, #22c55e, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>New Economy</span>
                            </h1>

                            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                We are a collective of systems engineers, cryptographers, and finance veterans building institutional-grade infrastructure. If you thrive on solving complex technical challenges at the edge of the decentralized economy, you belong here.
                            </p>

                            <div>
                                <Link href="#open-roles" className="btn-primary" style={{ background: "linear-gradient(to right, #22c55e, #3b82f6)", boxShadow: "0 4px 14px 0 rgba(34, 197, 94, 0.39)", color: "#000" }}>View Open Roles</Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ──────────────── WHY JOIN US ──────────────── */}
            <section className="section" style={{ paddingTop: "2rem" }}>
                <Container>
                    <StaggerContainer
                        stagger={0.1}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {joinReasons.map((reason, idx) => (
                            <AnimatedSection key={idx} variant="fade-up">
                                <div className="glass-card product-card-hover" style={{ padding: "2rem", height: "100%", background: "var(--bg-card)" }}>
                                    <div style={{
                                        width: "3rem",
                                        height: "3rem",
                                        borderRadius: "12px",
                                        background: `${reason.color}15`,
                                        border: `1px solid ${reason.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1.25rem"
                                    }}>
                                        <reason.icon size={24} color={reason.color} weight="duotone" />
                                    </div>
                                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{reason.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.9rem" }}>
                                        {reason.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* ──────────────── CULTURE, PERKS & TECH STACK ──────────────── */}
            <section className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Container>
                    <div className="split-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

                        <AnimatedSection variant="slide-right">
                            <SectionHeading
                                eyebrow="Culture & Perks"
                                heading="Built for"
                                gradientText="Performers"
                                subtitle="We strive to provide the optimal environment and tooling for high-impact work, removing friction so you can focus on building."
                                align="left"
                            />

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
                                {perks.map((perk, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "10px" }}>
                                        <div style={{ color: "var(--brand-secondary)", display: "flex", alignItems: "center" }}>
                                            <perk.icon size={20} weight="duotone" />
                                        </div>
                                        <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>{perk.text}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="slide-left" delay={0.2}>
                            <div className="glass-card" style={{ padding: "2.5rem", background: "var(--bg-surface)" }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Our Toolchain</h3>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: 1.5 }}>
                                    We are technology agnostic but highly opinionated. We use the right tools for the job to ensure type safety, performance, and developer velocity.
                                </p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                    {techStack.map(tech => (
                                        <span key={tech} style={{
                                            padding: "0.5rem 1rem",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "99px",
                                            fontSize: "0.85rem",
                                            fontWeight: 500,
                                            color: "var(--text-primary)",
                                            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                    </div>
                </Container>
            </section>

            {/* ──────────────── OPEN POSITIONS ──────────────── */}
            <section id="open-roles" className="section" style={{ borderTop: "1px solid var(--border)" }}>
                <Container>
                    <SectionHeading
                        eyebrow="Open Roles"
                        heading="Join Our"
                        gradientText="Mission"
                        subtitle="Don't see a perfect fit? We're always looking for exceptional talent. Reach out proactively via our contact form."
                        align="center"
                    />

                    <div style={{ maxWidth: "900px", margin: "4rem auto 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <StaggerContainer stagger={0.1}>
                            {openPositions.map((job) => (
                                <AnimatedSection key={job.id} variant="fade-up">
                                    <div className="glass-card product-card-hover" style={{
                                        padding: "2rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer"
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                                            <div>
                                                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{job.title}</h3>
                                                <p style={{ color: "var(--brand-secondary)", fontSize: "0.85rem", fontWeight: 600, fontFamily: "var(--font-jetbrains-mono, monospace)" }}>
                                                    {job.dept}
                                                </p>
                                            </div>

                                            <span style={{
                                                display: "inline-flex",
                                                padding: "0.3rem 0.8rem",
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "99px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            }}>
                                                {job.type}
                                            </span>
                                        </div>

                                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                            {job.desc}
                                        </p>

                                        <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--brand-primary)", fontWeight: 600, fontSize: "0.95rem" }}>
                                            Apply Now <ArrowRight size={16} weight="bold" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </StaggerContainer>
                    </div>
                </Container>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <CTABanner
                heading="Not actively"
                gradientText="looking?"
                subtitle="We understand. If you're an exceptional engineer or product thinker, we'd still love to grab a coffee (virtual or in-person in Kraków) and show you what we're building behind the scenes."
                primaryLabel="Say Hello"
                primaryHref="/contact"
                secondaryLabel="Learn More About Us"
                secondaryHref="/about"
            />
        </>
    );
}
