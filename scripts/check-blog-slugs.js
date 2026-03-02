import fs from 'fs';
import path from 'path';

// This script ensures we never introduce duplicate slugs into the blog data layer
// which causes React hydration key mapping errors and SEO degradation.

const blogDir = path.join(process.cwd(), 'lib/data/blog');
const allSlugs = {};
const duplicates = [];

try {
    const files = fs.readdirSync(blogDir);

    files.forEach((file) => {
        if (!file.endsWith('.ts') || file === 'index.ts' || file === 'BlogPostClient.tsx') return;

        const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
        const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
        let match;

        while ((match = slugRegex.exec(content)) !== null) {
            const slug = match[1];
            if (allSlugs[slug]) {
                duplicates.push({ slug, file1: allSlugs[slug], file2: file });
            } else {
                allSlugs[slug] = file;
            }
        }
    });

    if (duplicates.length > 0) {
        console.error('❌ ERROR: Duplicate blog slugs detected!');
        console.error('This will cause React Key errors and overwrite static pages.');
        console.error(JSON.stringify(duplicates, null, 2));
        process.exit(1); // Fail the CI/CD pipeline
    }

    console.log(`✅ Success: All ${Object.keys(allSlugs).length} blog slugs are perfectly unique.`);
    process.exit(0);

} catch (error) {
    console.error("Failed to run slug uniqueness check:");
    console.error(error);
    process.exit(1);
}
