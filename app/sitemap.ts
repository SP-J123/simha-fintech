import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";

const BASE_URL = "https://simhafintech.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
        { url: `${BASE_URL}/compliance`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
        { url: `${BASE_URL}/press`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${BASE_URL}/learn/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
    ];

    const legalRoutes = ["terms", "privacy", "cookies", "disclaimer", "aml-kyc"].map(
        (slug) => ({
            url: `${BASE_URL}/legal/${slug}`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        })
    );

    const serviceRoutes = services.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...serviceRoutes, ...legalRoutes];
}
