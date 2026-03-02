import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/data/blog';
import BlogPostClient from './BlogPostClient';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate Static Params for build time
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate Dynamic SEO Metadata
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found | Simha Fintech' };
    }

    return {
        title: `${post.seoMetadata.title} | Simha Fintech Blog`,
        description: post.seoMetadata.description,
        keywords: post.seoMetadata.keywords,
        openGraph: {
            title: post.seoMetadata.title,
            description: post.seoMetadata.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author.name],
            tags: post.tags,
        },
    };
}

// Server Component Wrapper
export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // JSON-LD SEO Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        author: [{
            '@type': 'Person',
            name: post.author.name,
            jobTitle: post.author.role
        }],
        datePublished: post.date,
        keywords: post.seoMetadata.keywords.join(", ")
    };

    return (
        <main>
            {/* Inject JSON-LD SEO Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Render deeply interactive client component */}
            <BlogPostClient post={post} />
        </main>
    );
}
