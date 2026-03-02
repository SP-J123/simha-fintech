import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/data/blog";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Intelligence & Insights | Simha Fintech Blog",
    description: "Expert analysis, educational guides, and the latest trends in Decentralized Finance, Web3 Enterprise Infrastructure, and Institutional Crypto adoption.",
    openGraph: {
        title: "Intelligence & Insights | Simha Fintech Blog",
        description: "Expert analysis, educational guides, and the latest trends in Decentralized Finance, Web3 Enterprise Infrastructure, and Institutional Crypto adoption.",
        url: "https://simhafintech.com/blog",
        siteName: "Simha Fintech",
        type: "website",
    },
};

export default function BlogIndexPage() {
    const allPosts = getAllPosts();
    const categories = getAllCategories();

    return <BlogClient allPosts={allPosts} categories={categories} />;
}
