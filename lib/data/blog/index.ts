import { blogPosts as seedPosts, BlogPost } from "./seed";
import { batch2Posts } from "./batch2";

const blogPosts: BlogPost[] = [...seedPosts, ...batch2Posts];
export type { BlogPost };

// Get all posts, sorted by newest first
export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

// Get all unique categories currently in use
export function getAllCategories(): string[] {
    const categories = blogPosts.map((post) => post.category);
    return Array.from(new Set(categories));
}

// Get posts by a specific category
export function getPostsByCategory(category: string): BlogPost[] {
    return getAllPosts().filter((post) => post.category === category);
}

// Get featured post (for the hero section - we'll just pick the newest for now)
export function getFeaturedPost(): BlogPost | undefined {
    const allPosts = getAllPosts();
    return allPosts.length > 0 ? allPosts[0] : undefined;
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
    return getAllPosts()
        .filter((post) => post.category === category && post.slug !== currentSlug)
        .slice(0, limit);
}
