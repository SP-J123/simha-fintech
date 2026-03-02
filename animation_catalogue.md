# 🎬 Simha Fintech — Animation Catalogue

> Every major section gets a **"wow" animated visual** — dashboards, data flows, and blockchain-themed visualizations that make the corporate site feel alive and technically sophisticated.

> [!IMPORTANT]
> This is a corporate informational site, NOT a trading platform. Animations showcase company capabilities, service offerings, and trust signals — not trading UIs.

---

## Core Animation Principles

| Principle | How to Implement |
|-----------|-----------------|
| **Split Layout** | Content on one side, animated visual on the other — two focal points |
| **Progressive Reveal** | Elements animate when scrolled into view (`whileInView`, `once: true`) |
| **Staggered Timing** | Each element appears 0.1s after the previous — orchestrated, not sudden |
| **Live Data Feel** | Progress bars fill, numbers count up, cursors blink — dashboards look alive |
| **Terminal Chrome** | macOS-style window dots (🔴🟡🟢) + mono header frame dashboards as real systems |
| **Ambient Glow** | Gradient blur behind cards (`-z-10`, `blur-2xl`) adds depth |
| **Typewriter Text** | Command-line text typing character by character for technical credibility |
| **Scanning Line** | Thin gradient line sweeping top-to-bottom, suggesting live monitoring |

---

## The 12 Animated Sections

---

### 1. 🏠 Hero — Company Pulse

**Page:** Homepage, full viewport

**Animated Elements:**
- **Particle Network** — 30 floating dots connected by thin lines (CSS or Canvas), representing the blockchain network
- **Trust Badges** — "Registered in Poland" · "KYC/AML Compliant" · "24/7 Support" sliding in with stagger
- **Informational Ticker** — Horizontal marquee showing BTC/ETH/SOL prices as market context (via **TanStack Query**, `refetchInterval: 60_000`)
- **Glowing CTA Pulse** — "Contact Us" button pulses with soft brand-primary glow every 3s

```
Prompt: Build a full-viewport corporate hero section with a particle network 
background (CSS-only, 30 floating dots connected by thin lines). Overlay 
"Your Trusted Gateway to Digital Assets" in Space Grotesk 700, 6xl. Below: 
3 trust badges ("Registered in Poland", "KYC/AML Compliant", "24/7 Support") 
sliding in with 0.15s stagger. Below that: an informational price ticker 
marquee (8 crypto prices in JetBrains Mono). CTA buttons: "Contact Us" 
(primary) and "Explore Services" (outline). Background: #06080D. 
Brand primary: #5865F2.
```

---

### 2. 🏢 Service Ecosystem — "21 Solutions, One Partner"

**Page:** Homepage or Services Hub

**Layout:** Content left, animated service constellation right

**Animated Elements:**
- **3 Category Nodes** — Large circles (Financial, Technical, Consulting) arranged in a triangle
- **Service Satellites** — Smaller dots orbiting each category node (6, 6, 9 respectively)
- **Connection Lines** — Animated dashed lines between categories showing interconnection
- **Hover Reveal** — Hovering a satellite shows the service name in a tooltip
- **Pulse Effect** — Category nodes pulse gently, showing the ecosystem is alive

```
Prompt: Build a service ecosystem visualization. Show 3 large category nodes 
("Financial", "Technical", "Consulting") as circles (#5865F2, 60px) arranged 
in a triangle on #06080D background. Around each: smaller satellite dots 
(6, 6, 9 respectively, 12px, #00D4AA) orbiting slowly (CSS rotation, 25s 
infinite). Dashed connection lines (#21262D) between the 3 main nodes. Each 
main node pulses gently (scale 1→1.05, 3s infinite). All nodes appear via 
whileInView with 0.15s stagger. Add a gradient glow behind the constellation.
```

---

### 3. ⛓️ Blockchain Visualizer — "Built on Blocks"

**Page:** About page or Blockchain Development service page

**Layout:** Full-width, content below animation

**Animated Elements:**
- **Chain of Blocks** — 7 rounded rectangles connected by animated dashed lines, appearing left-to-right
- **Block Details** — Each block shows: truncated Hash, Tx count — revealed on hover
- **Mining Pulse** — Rightmost block has a pulsing border (it's being "confirmed")
- **Hash Rain** — Very faint hex characters falling in the background (opacity 0.03)

```
Prompt: Build a blockchain visualizer. Show 7 blocks as rounded rectangles 
(80x100px, bg #0D1117, 1px border #21262D) connected by animated dashed lines. 
Each block appears via whileInView with 0.15s stagger, sliding in from left 
with opacity. Each block shows a truncated hash "0xa3f2..." in JetBrains Mono. 
The rightmost block has a pulsing border animation (#5865F2, 2s ease infinite). 
Behind everything, add very faint falling hex characters (opacity 0.03).
```

---

### 4. 💱 DeFi Flow — "How Decentralized Finance Works"

**Page:** DeFi Development service page

**Layout:** Content left, animated flow diagram right

**Animated Elements:**
- **Flow Nodes** — 4 steps: "User → Smart Contract → Liquidity Pool → Settlement" as rounded rectangles
- **Animated Arrows** — Dashed lines between nodes with a moving dot traveling along each
- **Token Icons** — Small ETH/USDT icons at the start and end
- **TVL Counter** — "Total Value Locked: $48B+" counting up from $0

```
Prompt: Build a DeFi flow diagram. Show 4 nodes ("User", "Smart Contract", 
"Liquidity Pool", "Settlement") as rounded rectangle cards (bg #0D1117, 
border #21262D) arranged vertically with space between. Animated dashed 
arrows connect them, each with a small dot (#5865F2, 8px) traveling downward 
(CSS, 3s infinite). Nodes appear via whileInView with 0.2s stagger. Below: 
a counter animating "$0" to "$48B+" over 2s. All in JetBrains Mono for numbers.
```

---

### 5. 🔒 Security Fortress — "Five Layers Deep"

**Page:** Cyber Security service page or Homepage

**Layout:** Centered, concentric visualization

**Animated Elements:**
- **5 Concentric Rings** — Each expanding outward: 2FA, Cold Storage, Multi-Sig, Pen Testing, 24/7 SOC
- **Ring Labels** — Text appears as each ring expands
- **Shield Core** — Central shield icon drawing itself via SVG stroke-dashoffset
- **Radar Sweep** — Thin gradient line rotating 360° (4s infinite)
- **Threat Dots** — Small red dots that turn green as radar passes

```
Prompt: Build a concentric ring security visualization. Center: a shield icon 
drawing itself via SVG stroke-dashoffset (1.5s). Then 5 rings expand outward 
with 0.3s stagger — each is a dashed circle scaling from 0.3 to 1.0. Labels: 
"2FA", "Cold Storage", "Multi-Sig", "Pen Testing", "24/7 SOC". Radar sweep 
line (#5865F2→transparent, 4s rotation infinite). 4 red dots (#FF4D6A) turn 
green (#00D4AA) when radar passes. Background #06080D.
```

---

### 6. 📊 Company Stats Dashboard — "By the Numbers"

**Page:** Homepage stats section

**Layout:** Content left, animated dashboard right

**Animated Elements:**
- **Terminal Window** — macOS chrome + dark bg with scanning line
- **Stat Bars** — 4 animated bars: "24/7 Operations", "100+ Supported Tokens", "50+ Trading Pairs", "Multi-Sig Wallets"
- **Counter Animation** — Numbers counting up with easing
- **Service Counter** — "21 Services Across 3 Domains" with staggered appearance
- **Blinking Cursor** — Terminal cursor at bottom

```
Prompt: Build a company stats dashboard. Left: heading "By the Numbers" + 
company highlights text. Right: a terminal card (3-dot window chrome, bg 
#0D1117). Inside: 4 metric bars with labels (24/7 Operations, 100+ Tokens, 
50+ Pairs, Multi-Sig Wallets) — each fills via whileInView with 0.15s stagger. 
Below: "21 Services | 3 Categories | 1 Partner" with counter animation from 0. 
Scanning gradient line top-to-bottom (3s infinite). Blinking cursor at bottom 
(opacity 0→1→0, 1s infinite). Gradient glow behind card. JetBrains Mono for 
all numbers.
```

---

### 7. 🏦 Compliance Registry — "Licensed & Transparent"

**Page:** Compliance page

**Layout:** Content left, animated registry card right

**Animated Elements:**
- **Registry Fields** — KRS, NIP, REGON, Address typing out via typewriter effect
- **Verification Checkmarks** — Green checkmark icons appearing next to each field after it types
- **EU Flag Icon** — Drawing itself via SVG stroke animation
- **GDPR Shield** — Shield icon with checkmark, bouncing in

```
Prompt: Build a compliance registry visual. Left: heading "Licensed & 
Transparent" + regulatory framework text. Right: a card with terminal chrome. 
Inside: 5 fields typing out via typewriter (0.04s/char): "KRS: 0001138948", 
"NIP: 7252349639", "REGON: 540205675", "Address: Łódź, Poland", "e-Delivery: 
PL-55004...". After each line types, a green checkmark (#00D4AA) bounces in 
beside it. All in JetBrains Mono. At the bottom: a GDPR compliance badge that 
scales in. Gradient glow behind the card.
```

---

### 8. 🪙 Token Lifecycle — "From Concept to Market"

**Page:** Token Creation service page

**Layout:** Full-width, horizontal timeline

**Animated Elements:**
- **6 Stage Nodes** — "Tokenomics → Smart Contract → Audit → Launch → Listing → Management"
- **Connecting Line** — A horizontal line that draws itself left-to-right
- **Stage Icons** — Each node gets a unique icon that appears with bounce
- **Progress Indicator** — A dot that travels along the completed line

```
Prompt: Build a token lifecycle timeline. 6 stages arranged horizontally 
("Tokenomics", "Smart Contract", "Audit", "Launch", "Listing", "Management"). 
A connecting line draws itself left-to-right via SVG stroke-dashoffset (3s). 
As the line reaches each stage, the stage node (circle, 50px, bg #0D1117, 
border #5865F2) appears with a bounce-in animation, and a relevant Phosphor 
icon fades in inside it. A traveling dot (#5865F2, 10px) follows the line. 
Below each node: stage name + brief description appearing with stagger.
```

---

### 9. 🌐 Global Network — "Serving Clients Worldwide"

**Page:** About page or Homepage

**Layout:** Full-width, centered

**Animated Elements:**
- **Dot Map** — World map made of dots (0.1 opacity ocean / 0.3 land)
- **Connection Arcs** — SVG arcs between Łódź and client regions, drawing via stroke-dashoffset
- **Ping Pulses** — Key city nodes with sonar rings
- **Stats** — "50+ Countries" / "21 Services" / "24/7 Support" counters

```
Prompt: Build a global network section on #06080D. World map using small dots 
(3px circles, opacity 0.1 ocean / 0.3 land). Highlight Łódź (home, #FF4D6A) 
and 5 client regions (Dubai, Singapore, London, New York, Mumbai) with #5865F2 
dots. Draw curved arcs from Łódź to each city using SVG stroke-dashoffset 
(1.5s stagger). Each city: 3 sonar rings (scale 1→3 + fade-out, 2s infinite). 
Below: 3 stat counters counting up on scroll.
```

---

### 10. 📝 Smart Contract Visual — "Code You Can Trust"

**Page:** Smart Contract service page

**Layout:** Content left, animated code editor right

**Animated Elements:**
- **Code Editor** — Dark terminal with syntax-highlighted Solidity code typing out
- **Audit Checkmarks** — After code types, green checkmarks appear beside key functions
- **Gas Meter** — "Gas Optimized: 42,000 units" with animated bar
- **Security Score** — Circular progress ring filling to 98/100

```
Prompt: Build a smart contract showcase. Left: heading "Code You Can Trust" + 
audit process explanation + features. Right: a code editor card with terminal 
chrome. Inside: 8 lines of Solidity code typing out via typewriter (0.03s/char), 
syntax-highlighted (keywords #A855F7, strings #00D4AA, comments #7D8590). After 
typing completes: 3 green checkmarks appear next to key lines with bounce. 
Below code: "Gas: 42,000" bar filling to 40% (#00D4AA). Bottom-right: circular 
progress ring animating from 0 to "98/100 Security Score" (#5865F2).
```

---

### 11. 💼 CaaS Architecture — "White-Label Ready"

**Page:** Crypto-as-a-Service page

**Layout:** Content left, architecture diagram right

**Animated Elements:**
- **Architecture Layers** — 3 stacked horizontal bars: "Your Brand" → "Simha CaaS API" → "Blockchain Networks"
- **API Arrows** — Animated bi-directional arrows between layers
- **Feature Badges** — Small badges ("Trading", "Custody", "KYC", "Payments") appearing around the middle layer
- **Integration Time** — "Go Live in 2 Weeks" counter

```
Prompt: Build a CaaS architecture diagram. Show 3 horizontal layers as rounded 
rectangles stacked vertically: "Your Brand" (top, #161B22), "Simha CaaS API" 
(middle, #5865F2/20 border), "Blockchain Networks" (bottom, #161B22). Animated 
bi-directional arrows (dashed, moving dots) between layers. Around the middle 
layer: 6 feature badges ("Trading", "Custody", "KYC", "Payments", "Analytics", 
"Compliance") appearing with 0.1s stagger bounce. Below: "Go Live: 2 Weeks" 
counter. All layers appear via whileInView.
```

---

### 12. 📈 Market Context — "Industry at a Glance"

**Page:** Homepage, informational section

**Layout:** Full-width grid (4-6 columns)

**Animated Elements:**
- **Sparkline Charts** — SVG line charts drawing themselves via stroke-dashoffset
- **Price Display** — Prices in JetBrains Mono (informational, via **TanStack Query**)
- **Trend Badge** — Green/red badges with ↑/↓ that bounce in
- **Card Hover** — Card lifts and sparkline grows taller
- **Grid Engine** — Powered by **TanStack Table** with column sorting

```
Prompt: Build a 4-column informational market grid on #06080D. Each card 
(bg #0D1117, border #21262D) shows: coin icon, name, price (JetBrains Mono), 
24h change (green #00D4AA / red #FF4D6A badge with bounce-in), and sparkline 
SVG drawing via stroke-dashoffset (1.5s). Cards stagger 0.1s. On hover: lift 
and sparkline expands. Data for BTC, ETH, SOL, BNB. Add small disclaimer text 
below: "Prices shown for informational purposes only." TanStack Table for 
sorting. TanStack Query for data (refetchInterval: 60_000).
```

---

## Implementation Priority

| Priority | Section | Page | Effort |
|----------|---------|------|--------|
| 🔴 P0 | Hero (Company Pulse) | Homepage | Medium |
| 🔴 P0 | Service Ecosystem | Homepage | Medium |
| 🔴 P0 | Company Stats Dashboard | Homepage | Medium |
| 🟡 P1 | Security Fortress | Security Service | High |
| 🟡 P1 | Compliance Registry | Compliance | Medium |
| 🟡 P1 | Market Context | Homepage | Medium |
| 🟢 P2 | Blockchain Visualizer | Blockchain Dev | Medium |
| 🟢 P2 | DeFi Flow | DeFi Dev | Medium |
| 🟢 P2 | Smart Contract Visual | Smart Contracts | High |
| 🔵 P3 | Token Lifecycle | Token Creation | Medium |
| 🔵 P3 | CaaS Architecture | CaaS | Medium |
| 🔵 P3 | Global Network | About | High |

---

## Animation Tech Stack

| Tool | Use For |
|------|---------|
| **Framer Motion** | `whileInView` reveals, staggered entries, page transitions |
| **TanStack Query** | Informational price ticker data, CMS content for blog/glossary |
| **TanStack Table** | Market context grid sorting, blog index, glossary list |
| **CSS @keyframes** | Infinite loops: marquee ticker, scanning line, pulsing glow, sonar rings |
| **SVG stroke-dashoffset** | Line draw: sparklines, shield, timeline connectors, arcs |
| **CSS counter / Framer Motion** | Animated counters (stat numbers, registry data) |
| **GSAP ScrollTrigger** | Pin-and-scrub, parallax, scroll-driven reveals |
| **CSS perspective + transform** | 3D effects where needed |

---

## Performance Rules

1. **Only animate `transform` and `opacity`** — never `width`, `height`, `top`, `left`
2. **Use `will-change` sparingly** — only on currently-animating elements
3. **`whileInView` with `once: true`** — play once per scroll
4. **Respect `prefers-reduced-motion`** — static fallbacks for all animations
5. **Lazy load heavy sections** — Canvas/Three.js only load near viewport
6. **Target 60fps** — test with CPU throttle 4x in Chrome DevTools
7. **Max 3 infinite animations visible** at once — pause off-screen via Intersection Observer
