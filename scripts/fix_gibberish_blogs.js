const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'lib', 'data', 'blog');
const files = fs.readdirSync(dir).filter(f => f.startsWith('batch') && f.endsWith('.ts'));

// Templates
const introTemplates = [
    "The landscape of [TAG1] is rapidly evolving, driven by innovations in [TAG2] and shifting market dynamics. As institutions and retail participants alike seek to understand the implications of this shift, a deeper analysis of the underlying mechanics becomes critical.",
    "When examining the current state of [TAG1], it is impossible to ignore the profound impact of [TAG2]. This intersection of technology and finance is reshaping traditional paradigms and creating unprecedented opportunities for those positioned to capitalize on them.",
    "Understanding the nuances of [TAG1] requires a comprehensive look at how [TAG2] functions within the broader ecosystem. This article breaks down the core concepts, exploring both the theoretical foundations and the practical applications driving adoption today.",
    "In recent months, the conversation surrounding [TAG1] has intensified, with [TAG2] emerging as a central focal point. By demystifying the complex architecture behind these systems, we can better anticipate the future trajectory of the decentralized economy.",
    "At the heart of the modern [TAG1] movement lies a fundamental reliance on [TAG2]. For investors and builders alike, mastering these concepts is no longer optional; it is a prerequisite for navigating the intricate Web3 environment."
];

const chapter1Templates = [
    "### The Fundamental Mechanics\n\nTo fully grasp the significance of this subject, one must first deconstruct the core architecture. The system operates on a decentralized consensus model, ensuring that all participants can verify transactions without relying on a central authority. This trustless environment is maintained through rigorous cryptographic proofs and incentive structures designed to align the interests of all network actors.\n\nFurthermore, the integration of advanced smart contract logic allows for the autonomous execution of complex financial agreements. This not only reduces counterparty risk but also exponentially increases the speed and efficiency of capital deployment.",
    "### Core Infrastructure and Protocols\n\nAt the protocol level, the primary innovation lies in its ability to process state changes securely and verifiably. Unlike traditional databases, the distributed ledger ensures absolute immutability. When a user interacts with the network, a cryptographic signature validates the request, which is then batched and processed by the active validator set.\n\n> \"The true power of this architecture isn't just in its security, but in its absolute transparency and composability.\"\n\nThis composability allows independent developers to build interconnected applications, creating a dynamic and compounding ecosystem of decentralized services.",
    "### Understanding the Economic Incentives\n\nThe viability of any decentralized network fundamentally relies on its economic design. Tokenomics—the study of token supply, distribution, and utility—plays a crucial role in securing the network. Participants are rewarded with native tokens for providing computational resources, liquidity, or governance input.\n\nConversely, malicious actors are deterred through slashing mechanisms, which penalize demonstrable misbehavior by destroying their staked collateral. This delicate balance of game theory ensures the long-term sustainability and security of the distributed system."
];

const chapter2Templates = [
    "### Analyzing Market Implications\n\nFrom a market perspective, the widespread adoption of these technologies introduces significant structural changes. Liquidity pools and automated market makers (AMMs) have democratized access to yield generation, allowing retail participants to act as market makers—a role historically reserved for massively capitalized institutions.\n\nHowever, this democratization is not without risk. Impermanent loss, smart contract vulnerabilities, and extreme market volatility remain persistent challenges that require sophisticated risk management strategies.",
    "### Future Trajectory and Scalability\n\nLooking ahead, the primary focus for developers is addressing the scalability trilemma: achieving high throughput without sacrificing decentralization or security. Layer 2 scaling solutions, such as Optimistic and Zero-Knowledge Rollups, are actively migrating transactional density off the main chain, radically reducing settlement costs.\n\nAs these scaling solutions mature, they will pave the way for mass consumer adoption, enabling micro-transactions and high-frequency trading applications that were previously structurally impossible on the base layer.",
    "### Regulatory Landscape and Compliance\n\nAs the ecosystem scales, it inevitably intersects with traditional regulatory frameworks. Governments and financial authorities globally are working to establish clear guidelines regarding the classification of digital assets, taxation, and anti-money laundering (AML) requirements.\n\nWhile some view regulation as an existential threat to decentralization, many institutional players consider regulatory clarity to be the necessary catalyst for trillions of dollars in sidelined capital to finally enter the Web3 infrastructure."
];

const excerptTemplates = [
    "A deep dive into [TAG1] and how innovations in [TAG2] are transforming the landscape of decentralized finance.",
    "Explore the intricate mechanics of [TAG1], analyzing the impact of [TAG2] on modern market structures.",
    "Understand the core concepts behind [TAG1] and discover why [TAG2] is critical for the future of Web3.",
    "An analytical breakdown of [TAG1], focusing on the practical applications and theoretical foundations of [TAG2].",
    "Discover how [TAG1] operates at scale, examining the fundamental role of [TAG2] in driving adoption."
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');

    const hasGibberish = content.includes('legitimately legitimately') ||
        content.includes('functionally actively exclusively totally') ||
        content.includes('solidly fully organically uniquely') ||
        content.match(/When [a-z]+ [a-z]+ [a-z]+/);

    if (hasGibberish) {
        console.log(`Fixing ${file}...`);

        let newContent = content;

        const postRegex = /{[\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?tags:\s*\[([^\]]+)\][\s\S]*?seoMetadata:\s*{[\s\S]*?}/g;

        newContent = newContent.replace(postRegex, (match, slug, tagsStr) => {
            const tagsMatch = tagsStr.match(/['"]([^'"]+)['"]/g);
            let tag1 = 'Web3';
            let tag2 = 'Blockchain Technology';

            if (tagsMatch && tagsMatch.length >= 2) {
                tag1 = tagsMatch[0].replace(/['"]/g, '');
                tag2 = tagsMatch[1].replace(/['"]/g, '');
            } else if (tagsMatch && tagsMatch.length === 1) {
                tag1 = tagsMatch[0].replace(/['"]/g, '');
            }

            const excerpt = getRandom(excerptTemplates).replace('[TAG1]', tag1).replace('[TAG2]', tag2);
            const body = `${getRandom(introTemplates).replace(/\[TAG1\]/g, tag1).replace(/\[TAG2\]/g, tag2)}\\n\\n${getRandom(chapter1Templates)}\\n\\n${getRandom(chapter2Templates)}`;

            const seoDesc = excerpt;

            let updatedPost = match.replace(/excerpt:\s*['"](.*?)['"],/g, `excerpt: '${excerpt}',`);

            updatedPost = updatedPost.replace(/content:\s*\`([\s\S]*?)\`,/g, `content: \`${body}\`,`);

            updatedPost = updatedPost.replace(/description:\s*['"](.*?)['"],/g, `description: '${seoDesc}',`);

            return updatedPost;
        });

        fs.writeFileSync(path.join(dir, file), newContent, 'utf-8');
        modifiedCount++;
    }
});

console.log(`Fixed ${modifiedCount} files.`);
