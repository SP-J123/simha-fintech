import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { getServiceBySlug, services } from "@/lib/data/services";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};

    return {
        title: `${service.title} — Simha Fintech`,
        description: service.shortDescription,
        keywords: [
            service.title.toLowerCase(),
            `${service.title.toLowerCase()} service`,
            "blockchain",
            "crypto",
            "Simha Fintech",
            service.category,
        ],
        openGraph: {
            title: `${service.title} — Simha Fintech`,
            description: service.shortDescription,
        },
    };
}

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
