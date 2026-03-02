# Use Node 20 as base for robustness and compatibility with Next.js 15
FROM node:20-slim AS base

# Stage 1: Install dependencies
FROM base AS deps
# libssl-dev and ca-certificates are often useful in slim images, 
# but for basic Next.js build, we'll keep it minimal.
WORKDIR /app


# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disabling telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

# nextConfig has output: 'standalone', so this will produce .next/standalone
RUN npm run build

# Stage 3: Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to 0.0.0.0 to be accessible within the container
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
CMD ["node", "server.js"]
