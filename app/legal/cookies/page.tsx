import React from "react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
    title: "Cookie Policy | Simha Fintech",
    description: "Information on how Simha Fintech uses cookies to ensure site functionality and security.",
};

export default function CookiePage() {
    return (
        <div style={{ paddingBottom: "6rem" }}>
            <section className="page-hero" style={{ paddingBottom: "3rem", borderBottom: "1px solid var(--border)", marginBottom: "3rem" }}>
                <Container>
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <AnimatedSection variant="fade-up">
                            <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.4rem 0.8rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "99px", color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem"
                            }}>
                                Last Updated: January 15, 2025
                            </span>
                            <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                                Cookie <span className="gradient-text">Policy</span>
                            </h1>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            <Container>
                <div style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <AnimatedSection variant="fade-up" delay={0.2}>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2rem" }}>1. Strictly Necessary Cookies</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Our platform relies exclusively on &quot;Strictly Necessary&quot; cookies. These are essential for the operation of the website, user authentication, and maintaining security layers. Because these cookies are vital for the delivery of the service, they cannot be opted out of, as per the ePrivacy Directive.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>2. What We Do NOT Track</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Simha Fintech does not utilize cross-site tracking pixels, third-party advertising cookies, or intrusive behavioral analytics. We prioritize the privacy of our institutional clients over aggregated marketing metrics.
                        </p>

                        <h2 style={{ color: "var(--text-primary)", fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Managing Cookies</h2>
                        <p style={{ marginBottom: "1.5rem" }}>
                            You may configure your browser to block all cookies, but please note that portions of the Simha Fintech exchange API, dashboard, and custody portals will completely cease to function for security reasons if session tokens cannot be stored.
                        </p>

                    </AnimatedSection>
                </div>
            </Container>
        </div>
    );
}
