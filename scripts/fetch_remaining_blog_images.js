const fs = require('fs');
const path = require('path');
const https = require('https');
const { image_search } = require('duckduckgo-images-api');
const gis = require('g-i-s');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            }
        };
        const request = https.get(url, options, function (response) {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }
            response.pipe(file);
            file.on('finish', function () {
                file.close(resolve);
            });
        }).on('error', function (err) {
            fs.unlink(dest, () => reject(err));
        });

        request.setTimeout(12000, () => {
            request.destroy();
            reject(new Error('Request timeout'));
        });
    });
}

function searchGIS(query) {
    return new Promise((resolve) => {
        gis({ searchTerm: query }, (error, results) => {
            if (error) resolve([]);
            else resolve(results);
        });
    });
}

async function searchCombined(query) {
    try {
        const ddgResults = await image_search({ query, moderate: true, retries: 2, iterations: 1 });
        if (ddgResults && ddgResults.length > 0) {
            return ddgResults.map(r => ({ url: r.image }));
        }
    } catch (e) {
        // Fallback below
    }

    try {
        const gisResults = await searchGIS(query);
        return gisResults;
    } catch (e) {
        return [];
    }
}

const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const blogDir = path.join(__dirname, '..', 'lib', 'data', 'blog');
const batchFiles = [];
for (let i = 3; i <= 20; i++) {
    batchFiles.push(`batch${i}.ts`);
}

async function processBatches() {
    let totalDownloaded = 0;
    for (const file of batchFiles) {
        const filePath = path.join(blogDir, file);
        if (!fs.existsSync(filePath)) continue;

        console.log(`\n=================== Processing ${file} ===================`);
        let content = fs.readFileSync(filePath, 'utf8');
        let modifications = 0;

        const parts = content.split('slug:');
        let newContent = parts[0];

        for (let i = 1; i < parts.length; i++) {
            let part = parts[i];
            const slugMatch = part.match(/^\s*['"]([^'"]+)['"]/);
            if (!slugMatch) {
                newContent += 'slug:' + part;
                continue;
            }
            const slug = slugMatch[1];

            const heroImageMatch = part.match(/heroImage:\s*['"]([^'"]+)['"]/);
            if (heroImageMatch) {
                const currentImage = heroImageMatch[1];
                if (currentImage.includes('/images/services/') || currentImage.includes('placeholder')) {
                    const titleMatch = part.match(/title:\s*['"]([^'"]+)['"]/);
                    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

                    // Specific query construction: add 'crypto tech abstract high res'
                    const query = `${title.substring(0, 40)} blockchain crypto technical abstract background`;
                    console.log(`\n  [${slug}]\n  Searching: "${query}"`);

                    try {
                        let newImagePath = currentImage;

                        let existingExt = null;
                        for (let ext of ['jpg', 'jpeg', 'png', 'webp']) {
                            if (fs.existsSync(path.join(outDir, `${slug}.${ext}`))) {
                                existingExt = ext;
                                break;
                            }
                        }

                        if (existingExt) {
                            newImagePath = `/images/blog/${slug}.${existingExt}`;
                            console.log(`  [Skip] Already have image for ${slug}`);
                        } else {
                            const results = await searchCombined(query);
                            if (results && results.length > 0) {
                                let downloaded = false;
                                for (let j = 0; j < Math.min(6, results.length); j++) {
                                    const url = results[j].url;
                                    if (!url || !url.startsWith('https://')) continue;

                                    const ext = url.split('?')[0].split('.').pop().toLowerCase();
                                    const cleanExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
                                    const dest = path.join(outDir, `${slug}.${cleanExt}`);

                                    try {
                                        await downloadImage(url, dest);
                                        downloaded = true;
                                        newImagePath = `/images/blog/${slug}.${cleanExt}`;
                                        console.log(`  [Success] Saved to ${dest}`);
                                        totalDownloaded++;
                                        break;
                                    } catch (e) {
                                        // Silent fail, try next image
                                    }
                                }
                                if (!downloaded) {
                                    console.log(`  [Error] Could not download any image for ${slug}`);
                                }
                            } else {
                                console.log(`  [No Results] for ${slug}`);
                            }
                        }

                        // Replace the old string securely
                        // If it successfully generated or found the new image, inject it
                        if (newImagePath !== currentImage) {
                            part = part.replace(heroImageMatch[0], `heroImage: '${newImagePath}'`);
                            modifications++;
                        }

                    } catch (e) {
                        console.error(`  [Catch Error] ${e.message}`);
                    }

                    await new Promise(r => setTimeout(r, 1000));
                }
            }

            newContent += 'slug:' + part;
        }

        if (modifications > 0) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`\n✅ Saved ${modifications} updates to ${file}`);
        } else {
            console.log(`\nNo updates needed for ${file}`);
        }
    }
    console.log(`\n🚀 All done! Downloaded ${totalDownloaded} new images.`);
    process.exit(0);
}

processBatches().catch(e => {
    console.error(e);
    process.exit(1);
});
