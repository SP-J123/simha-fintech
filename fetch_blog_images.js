const gis = require('g-i-s');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper to download an image
async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
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

        request.setTimeout(10000, () => {
            request.destroy();
            reject(new Error('Request timeout'));
        });
    });
}

function searchImages(query) {
    return new Promise((resolve, reject) => {
        gis({ searchTerm: query, filterOutDomains: ['pinterest.com'] }, (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
}

const topics = [
    { slug: 'what-is-cryptocurrency-beginners-guide-2026', query: 'cryptocurrency coins financial abstract high resolution background' },
    { slug: 'how-blockchain-technology-works-simply', query: 'blockchain technology network glowing high res' },
    { slug: 'bitcoin-vs-ethereum-fundamental-differences', query: 'bitcoin and ethereum logos abstract' },
    { slug: 'crypto-wallet-hot-vs-cold-storage', query: 'hardware crypto wallet ledger security' },
    { slug: 'evolution-of-money-fiat-to-digital', query: 'digital currency background tech money' },
    { slug: 'how-to-safely-store-crypto-assets-2026', query: 'safe vault cybersecurity crypto' },
    { slug: 'cryptographic-hash-functions-blockchain', query: 'cryptography code screen hex binary' },
    { slug: 'proof-of-work-vs-proof-of-stake-explained', query: 'crypto mining farm servers' },
    { slug: 'what-are-altcoins-broader-crypto-market', query: 'multiple altcoins diverse crypto background' },
    { slug: 'history-of-bitcoin-whitepaper-to-adoption', query: 'bitcoin physical coin history background' },
    { slug: 'how-to-read-crypto-price-chart-beginners', query: 'candlestick chart neon trading screen' },
    { slug: 'demystifying-crypto-market-capitalization', query: 'stock market graph financial chart crypto neon' },
    { slug: 'what-does-decentralization-truly-mean', query: 'decentralized network nodes glowing concept' },
    { slug: 'role-of-nodes-in-blockchain-network', query: 'server network glowing connected nodes' },
    { slug: 'how-cryptocurrencies-are-created-mining', query: 'crypto mining rig ASIC hardware' },
    { slug: 'what-is-blockchain-explorer', query: 'code magnifying glass block chain searching' },
    { slug: 'trilemma-scalability-security-decentralization', query: 'blockchain network scalability security decentralized abstract' },
    { slug: 'understanding-gas-fees-ethereum', query: 'ethereum network gas speed glowing fast' },
    { slug: 'public-vs-private-blockchains-differences', query: 'locked digital network private access' },
    { slug: 'essential-crypto-terminology-investors', query: 'digital dictionary text data abstract tech' }
];

async function main() {
    console.log('Starting gis image downloads...');
    const outDir = path.join(__dirname, 'public', 'images', 'blog');

    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    let mappings = {};

    for (let c = 0; c < topics.length; c++) {
        const topic = topics[c];
        console.log(`\\n[${c + 1}/${topics.length}] Searching for: ${topic.slug}`);
        try {
            const results = await searchImages(topic.query);

            if (!results || results.length === 0) {
                console.log(`No results found for ${topic.slug}`);
                continue;
            }

            let downloaded = false;
            // Try top 8 results until one succeeds
            for (let i = 0; i < Math.min(8, results.length); i++) {
                const url = results[i].url;
                if (!url.startsWith('https://')) continue;
                console.log(`  Trial ${i + 1}: Trying ${url.substring(0, 60)}...`);

                const ext = url.split('?')[0].split('.').pop().toLowerCase();
                const cleanExt = ['jpg', 'jpeg', 'png', 'webp'].includes(ext) ? ext : 'jpg';
                const dest = path.join(outDir, `${topic.slug}.${cleanExt}`);

                try {
                    await downloadImage(url, dest);
                    downloaded = true;
                    console.log(`  [Success] Saved to ${dest}`);
                    mappings[topic.slug] = `/images/blog/${topic.slug}.${cleanExt}`;
                    break;
                } catch (err) {
                    console.log(`  [Failed]: ${err.message}`);
                }
            }

            if (!downloaded) {
                console.log(`  [Error] Could not download any image for ${topic.slug}`);
            }

        } catch (err) {
            console.error(`Error searching for ${topic.slug}:`, err);
        }

        await new Promise(res => setTimeout(res, 500));
    }

    fs.writeFileSync('image_mappings.json', JSON.stringify(mappings, null, 2));
    console.log('\\nAll done! Mappings saved to image_mappings.json');
}

main();
