"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface Author {
    name: string;
    role: string;
    avatar?: string; // Made optional to fix TS errors
}

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: Author;
    date: string;
    readTime: number;
    // ... other props not strictly needed in the UI
}

interface BlogClientProps {
    allPosts: BlogPost[];
    categories: string[];
}

export default function BlogClient({ allPosts, categories }: BlogClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Filter posts
    const filteredPosts = selectedCategory
        ? allPosts.filter((post) => post.category === selectedCategory)
        : allPosts;

    return (
        <main style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
                    Intelligence & Insights.
                </h1>
                <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
                    Expert analysis, profound educational guides, and the latest architectural trends shaping the future of global decentralized finance.
                </p>
            </div>

            <Container>
                {/* ════════ Categories Filter ════════ */}
                <div>
                    <div className="blog-categories" style={{
                        display: "flex",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        marginBottom: "4rem",
                        paddingBottom: "1.5rem",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
                    }}>
                        <span
                            onClick={() => setSelectedCategory(null)}
                            style={{
                                padding: "0.5rem 1rem",
                                borderRadius: "var(--radius-full)",
                                background: selectedCategory === null ? "var(--brand-electric)" : "rgba(255, 255, 255, 0.03)",
                                border: selectedCategory === null ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                                color: selectedCategory === null ? "#000" : "var(--text-secondary)",
                                fontSize: "0.875rem",
                                fontWeight: selectedCategory === null ? 600 : 500,
                                cursor: "pointer",
                                transition: "var(--transition-fast)"
                            }}
                        >
                            All Categories
                        </span>
                        {categories.map((category) => (
                            <span
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                style={{
                                    padding: "0.5rem 1rem",
                                    borderRadius: "var(--radius-full)",
                                    background: selectedCategory === category ? "var(--brand-electric)" : "rgba(255, 255, 255, 0.03)",
                                    border: selectedCategory === category ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                                    color: selectedCategory === category ? "#000" : "var(--text-secondary)",
                                    fontSize: "0.875rem",
                                    fontWeight: selectedCategory === category ? 600 : 500,
                                    cursor: "pointer",
                                    transition: "var(--transition-fast)"
                                }}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ════════ Blog Grid ════════ */}
                <div>
                    {filteredPosts.length > 0 ? (
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                            gap: "2rem"
                        }}>
                            {filteredPosts.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.slug} style={{ display: "block" }}>
                                    <div style={{
                                        background: "rgba(10, 15, 25, 0.4)",
                                        border: "1px solid rgba(255, 255, 255, 0.05)",
                                        borderRadius: "var(--radius-xl)",
                                        padding: "2rem",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "var(--transition-normal)",
                                        position: "relative",
                                        overflow: "hidden"
                                    }}
                                        className="blog-card-hover"
                                    >
                                        {/* Category Badge & Date */}
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                                            <span style={{
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em",
                                                color: "var(--brand-electric)",
                                                background: "rgba(0, 240, 255, 0.1)",
                                                padding: "0.25rem 0.75rem",
                                                borderRadius: "var(--radius-full)"
                                            }}>
                                                {post.category}
                                            </span>
                                            <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>

                                        {/* Title & Excerpt */}
                                        <h3 style={{ fontSize: "1.25rem", lineHeight: 1.4, marginBottom: "1rem", color: "var(--text-primary)" }}>
                                            {post.title}
                                        </h3>
                                        <p style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.95rem",
                                            lineHeight: 1.6,
                                            marginBottom: "2rem",
                                            flexGrow: 1
                                        }}>
                                            {post.excerpt}
                                        </p>

                                        {/* Author & Read Time */}
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                                            paddingTop: "1.25rem",
                                            marginTop: "auto"
                                        }}>
                                            <div>
                                                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                                                    {post.author.name}
                                                </p>
                                                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                                                    {post.author.role}
                                                </p>
                                            </div>
                                            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                {post.readTime} min
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
                            <p>No posts found in this category.</p>
                        </div>
                    )}
                </div>

                {/* Pagination (Visual) */}
                {/* 
                <div style={{
                    opacity: 0.9,
                    animation: "fadeUp 0.5s ease-out forwards"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.5rem",
                        marginTop: "5rem"
                    }}>
                        <button className="btn-secondary" disabled style={{ opacity: 0.5 }}>Previous</button>
                        <button className="btn-primary" style={{ padding: "0.75rem 1.25rem" }}>1</button>
                        <button className="btn-secondary" style={{ padding: "0.75rem 1.25rem" }}>2</button>
                        <button className="btn-secondary" style={{ padding: "0.75rem 1.25rem" }}>3</button>
                        <span style={{ color: "var(--text-muted)", padding: "0.75rem" }}>...</span>
                        <button className="btn-secondary">Next</button>
                    </div>
                </div> 
                */}

            </Container>

            {/* Required CSS for Hover Effects */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .blog-card-hover:hover {
                    border-color: rgba(0, 240, 255, 0.3) !important;
                    background: rgba(15, 20, 35, 0.6) !important;
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.05);
                }
                .blog-categories span:hover {
                    border-color: rgba(0, 240, 255, 0.4) !important;
                    color: var(--text-primary) !important;
                }
            `}} />
        </main>
    );
}
