import { blogPosts as seedPosts, BlogPost } from "./seed";
import { missingBatch1Posts } from "./missing_batch1";
import { batch2Posts } from "./batch2";
import { batch3Posts } from "./batch3";
import { batch4Posts } from "./batch4";
import { batch5Posts } from "./batch5";
import { batch6Posts } from "./batch6";
import { batch7Posts } from "./batch7";
import { batch8Posts } from "./batch8";
import { batch9Posts } from "./batch9";
import { batch10Posts } from "./batch10";
import { batch11Posts } from "./batch11";
import { batch12Posts } from "./batch12";
import { batch13Posts } from "./batch13";
import { batch14Posts } from "./batch14";
import { batch15Posts } from "./batch15";
import { batch16Posts } from "./batch16";
import { batch17Posts } from "./batch17";
import { batch18Posts } from "./batch18";
import { batch19Posts } from "./batch19";
import { batch20Posts } from "./batch20";

export const blogPosts: BlogPost[] = [
    ...seedPosts,
    ...missingBatch1Posts,
    ...batch2Posts,
    ...batch3Posts,
    ...batch4Posts,
    ...batch5Posts,
    ...batch6Posts,
    ...batch7Posts,
    ...batch8Posts,
    ...batch9Posts,
    ...batch10Posts,
    ...batch11Posts,
    ...batch12Posts,
    ...batch13Posts,
    ...batch14Posts,
    ...batch15Posts,
    ...batch16Posts,
    ...batch17Posts,
    ...batch18Posts,
    ...batch19Posts,
    ...batch20Posts
];

export type { BlogPost };

// Get all posts, sorted by newest first
export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((post) => post.category === category)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get latest insights (for homepage)
export function getLatestInsights(limit: number = 3): BlogPost[] {
    return getAllPosts().slice(0, limit);
}

// Get the featured post (currently the latest post)
export function getFeaturedPost(): BlogPost {
    return getAllPosts()[0];
}

// Get all unique categories
export function getAllCategories(): string[] {
    const categories = new Set(blogPosts.map(post => post.category));
    return Array.from(categories);
}

// Get related posts (based on category, excluding current post)
export function getRelatedPosts(currentSlug: string, currentCategory: string, limit: number = 2): BlogPost[] {
    return blogPosts
        .filter(post => post.category === currentCategory && post.slug !== currentSlug)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
}
