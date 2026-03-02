"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/data/blog";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link as LinkIcon, TwitterLogo, LinkedinLogo, Check } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import { getRelatedPosts } from "@/lib/data/blog";

export default function BlogPostClient({ post }: { post: BlogPost }) {
    const [isCopied, setIsCopied] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const relatedPosts = getRelatedPosts(post.slug, post.category, 2);

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    // Determines gradient theme based on category for the hero mesh
    const getGradientTheme = (category: string) => {
        switch (category) {
            case "DeFi": return "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 100%)";
            case "Institutional": return "linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.2) 100%)";
            case "Compliance & Security": return "linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 100%)";
            case "Advanced Tech": return "linear-gradient(135deg, rgba(0, 240, 255, 0.4) 0%, rgba(0, 150, 255, 0.2) 100%)";
            default: return "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(0, 240, 255, 0.3) 100%)";
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // Parse content blocks for rich styling
    const renderContent = (content: string) => {
        let isFirstParagraph = true;

        return content.split('\n').map((paragraph, index) => {
            let trimmed = paragraph.trim();
            if (!trimmed) return null;

            // Headers (Handle ### or any number of hashes)
            if (trimmed.startsWith('#')) {
                const headerText = trimmed.replace(/^#+\s*/, '').trim();

                // Chapter Header Styling (Split "Chapter X: Title")
                if (headerText.toLowerCase().startsWith('chapter')) {
                    const chapterMatch = headerText.match(/^(chapter \d+):\s*(.*)/i);
                    if (chapterMatch) {
                        const chapterNum = chapterMatch[1];
                        const chapterTitle = chapterMatch[2];
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                key={index}
                                style={{
                                    marginTop: "4.5rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                <span style={{
                                    display: "block",
                                    fontSize: "0.875rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    color: "var(--brand-primary)",
                                    fontWeight: 600,
                                    marginBottom: "0.75rem"
                                }}>
                                    {chapterNum}
                                </span>
                                <h3 style={{
                                    color: "var(--text-primary)",
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                    margin: 0,
                                    paddingBottom: "1.25rem",
                                    borderBottom: "1px solid rgba(255,255,255,0.1)"
                                }}>
                                    {chapterTitle}
                                </h3>
                            </motion.div>
                        );
                    }
                }

                // Standard Headers
                return (
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        key={index}
                        style={{
                            color: "var(--text-primary)",
                            fontSize: "1.75rem",
                            fontWeight: 700,
                            marginTop: "3.5rem",
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        {headerText}
                    </motion.h3>
                );
            }

            // Blockquotes (Magazine Style Pull Quote)
            if (trimmed.startsWith('>')) {
                const quoteText = trimmed.substring(1).trim();
                return (
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        key={index}
                        style={{
                            position: "relative",
                            padding: "3.5rem 2.5rem",
                            margin: "4rem 0",
                            textAlign: "center",
                            background: "rgba(255,255,255,0.02)",
                            borderRadius: "var(--radius-xl)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            overflow: "hidden"
                        }}
                    >
                        {/* Huge background quotation mark */}
                        <span style={{
                            position: "absolute",
                            top: "-40px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: "16rem",
                            color: "rgba(255,255,255,0.03)",
                            fontFamily: "serif",
                            lineHeight: 1,
                            pointerEvents: "none"
                        }}>
                            &ldquo;
                        </span>
                        <p style={{
                            position: "relative",
                            fontSize: "1.5rem",
                            lineHeight: 1.6,
                            color: "var(--text-primary)",
                            fontWeight: 500,
                            fontStyle: "italic",
                            margin: 0,
                        }}>
                            {quoteText}
                        </p>
                    </motion.blockquote>
                );
            }

            // Lists (Custom Glowing Bullets)
            if (trimmed.startsWith('-') || trimmed.match(/^\d+\./)) {
                const listText = trimmed.replace(/^(-|\d+\.)\s*/, '').trim();
                return (
                    <li key={index} style={{
                        marginBottom: "1rem",
                        marginLeft: "1.5rem",
                        paddingLeft: "1rem",
                        position: "relative",
                        listStyle: "none"
                    }}>
                        {/* Electric Glowing Bullet */}
                        <span style={{
                            position: "absolute",
                            left: "-1rem",
                            top: "0.6rem",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "var(--brand-electric)",
                            boxShadow: "0 0 10px var(--brand-electric)"
                        }}></span>
                        <span style={{
                            color: "var(--text-muted)",
                            fontSize: "1.125rem",
                            lineHeight: 1.8
                        }}>
                            {listText.split('**').map((text, i) => i % 2 === 1 ? <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 600 }}>{text}</strong> : text)}
                        </span>
                    </li>
                );
            }

            // Standard Paragraph with Bold parsing and Drop Cap
            const isFirst = isFirstParagraph;
            isFirstParagraph = false; // Flag that first valid paragraph has passed

            return (
                <p key={index} className={isFirst ? "drop-cap-paragraph" : ""} style={{
                    marginBottom: "2rem",
                    color: "var(--text-muted)",
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                    letterSpacing: "0.01em"
                }}>
                    {trimmed.split('**').map((text, i) => i % 2 === 1 ? <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 600 }}>{text}</strong> : text)}
                </p>
            );
        });
    };

    return (
        <div style={{ position: "relative", background: "var(--bg-primary)" }}>

            {/* ════════ Reading Progress Bar ════════ */}
            <motion.div
                style={{
                    position: "fixed",
                    top: "var(--navbar-height)",
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "var(--brand-primary)",
                    transformOrigin: "0%",
                    scaleX,
                    zIndex: 1000,
                    boxShadow: "0 0 10px var(--brand-primary)"
                }}
            />

            {/* ════════ Immersive Hero Section ════════ */}
            <section style={{
                position: "relative",
                padding: "calc(var(--navbar-height) + 4rem) 0 6rem 0",
                minHeight: "65vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden"
            }}>
                {/* Background Mesh */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: getGradientTheme(post.category),
                    filter: "blur(120px)",
                    opacity: 0.6,
                    transform: "translateY(-20%)",
                    zIndex: 0
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 0%, var(--bg-primary) 100%)",
                    zIndex: 1
                }} />

                <Container style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
                        >
                            <span style={{
                                padding: "0.5rem 1rem",
                                borderRadius: "var(--radius-full)",
                                background: "rgba(255,255,255,0.1)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                color: "var(--text-primary)",
                                backdropFilter: "blur(10px)"
                            }}>
                                {post.category}
                            </span>
                            <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                                {post.readTime} MIN READ
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                lineHeight: 1.1,
                                marginBottom: "2rem",
                                letterSpacing: "-0.03em"
                            }}
                        >
                            {post.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                fontSize: "1.5rem",
                                color: "var(--text-secondary)",
                                lineHeight: 1.5,
                                marginBottom: "3rem",
                                maxWidth: "800px"
                            }}
                        >
                            {post.excerpt}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
                        >
                            <div style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, var(--brand-electric), var(--brand-primary))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.25rem",
                                fontWeight: "bold",
                                color: "#000"
                            }}>
                                {post.author.name.charAt(0)}
                            </div>
                            <div>
                                <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>{post.author.name}</div>
                                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{post.author.role} • {formattedDate}</div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ════════ Article Body & Sidebar ════════ */}
            <Container>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "4rem",
                    paddingBottom: "8rem"
                }} className="blog-layout-grid">

                    {/* Left Sticky Sidebar (Share Actions) */}
                    <aside className="blog-sidebar-left" style={{ display: "none" }}>
                        <div style={{
                            position: "sticky",
                            top: "calc(var(--navbar-height) + 4rem)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "center"
                        }}>
                            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.5rem", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                                Share Article
                            </span>
                            <div style={{ width: "1px", height: "40px", background: "var(--border)", marginBottom: "0.5rem" }} />

                            <button className="share-btn" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                                <TwitterLogo size={22} weight="fill" />
                            </button>
                            <button className="share-btn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                                <LinkedinLogo size={22} weight="fill" />
                            </button>
                            <button className="share-btn" onClick={handleCopy} title="Copy Link">
                                {isCopied ? <Check size={22} weight="bold" color="var(--brand-electric)" /> : <LinkIcon size={22} weight="bold" />}
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article style={{
                        maxWidth: "800px",
                        margin: "0 auto",
                        width: "100%",
                        fontSize: "1.2rem", // Large base font for premium reading
                        lineHeight: 1.85,
                        color: "var(--text-secondary)"
                    }}>
                        {renderContent(post.content)}

                        {/* Article Tags */}
                        <div style={{
                            marginTop: "5rem",
                            paddingTop: "2rem",
                            borderTop: "1px solid var(--border)",
                            display: "flex",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            alignItems: "center"
                        }}>
                            <span style={{ fontWeight: 600, marginRight: "1rem", color: "var(--text-primary)" }}>Tags:</span>
                            {post.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: "0.35rem 1rem",
                                    borderRadius: "var(--radius-full)",
                                    background: "rgba(255, 255, 255, 0.03)",
                                    fontSize: "0.875rem",
                                    color: "var(--text-secondary)",
                                    border: "1px solid rgba(255, 255, 255, 0.05)",
                                    transition: "var(--transition-fast)",
                                    cursor: "pointer",
                                }} className="tag-hover">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            </Container>

            {/* ════════ Distinctive "Keep Reading" Footer ════════ */}
            {relatedPosts.length > 0 && (
                <section style={{
                    background: "rgba(5, 13, 26, 0.5)",
                    borderTop: "1px solid var(--border)",
                    padding: "6rem 0"
                }}>
                    <Container>
                        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Keep Exploring</h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>More insights from the {post.category} sector.</p>
                        </div>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                            gap: "2rem",
                            maxWidth: "900px",
                            margin: "0 auto"
                        }}>
                            {relatedPosts.map((rp: any) => (
                                <Link href={`/blog/${rp.slug}`} key={rp.slug} style={{ display: "block" }}>
                                    <div style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "var(--radius-xl)",
                                        padding: "2rem",
                                        transition: "all var(--transition-normal)",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }} className="related-card">
                                        <span style={{ color: "var(--brand-primary)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "1rem" }}>{rp.readTime} MIN READ</span>
                                        <h4 style={{ fontSize: "1.35rem", lineHeight: 1.4, color: "var(--text-primary)", marginBottom: "1rem" }}>{rp.title}</h4>
                                        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--brand-electric)", fontSize: "0.9rem", fontWeight: 600 }}>
                                            Read Article <span style={{ transition: "transform 0.2s" }} className="arrow">→</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Scoped CSS for the layout grid and interactions */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                    .blog-layout-grid {
                        grid-template-columns: 80px 1fr !important;
                    }
                    .blog-sidebar-left {
                        display: block !important;
                    }
                }

                .drop-cap-paragraph::first-letter {
                    float: left;
                    font-size: 5.5rem;
                    line-height: 0.8;
                    padding-top: 0.5rem;
                    padding-right: 0.75rem;
                    color: var(--brand-electric);
                    font-weight: 700;
                    margin-bottom: -0.5rem;
                }

                .share-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted);
                    cursor: pointer;
                    transition: all var(--transition-fast);
                }
                .share-btn:hover {
                    color: var(--text-primary);
                    border-color: rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.08);
                    transform: translateY(-2px);
                }

                .tag-hover:hover {
                    border-color: var(--brand-electric) !important;
                    color: var(--text-primary) !important;
                    background: rgba(0, 240, 255, 0.05) !important;
                }

                .related-card:hover {
                    background: rgba(255,255,255,0.05) !important;
                    border-color: rgba(255,255,255,0.1) !important;
                    transform: translateY(-4px);
                }
                .related-card:hover .arrow {
                    transform: translateX(4px);
                }
            `}} />
        </div>
    );
}
