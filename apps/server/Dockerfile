# ----------------------------
# Stage 1 - Base
# ----------------------------
FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

# ----------------------------
# Stage 2 - Prune
# ----------------------------
FROM base AS pruner

RUN npm install -g turbo

COPY . .

RUN turbo prune server --docker

# ----------------------------
# Stage 3 - Install
# ----------------------------
FROM base AS installer

COPY --from=pruner /app/out/json/ .

RUN pnpm install --frozen-lockfile

# ----------------------------
# Stage 4 - Build
# ----------------------------
COPY --from=pruner /app/out/full/ .

RUN pnpm exec prisma generate --schema packages/db-config/prisma/schema.prisma

RUN pnpm turbo build --filter=server

# ----------------------------
# Stage 5 - Runner
# ----------------------------
FROM node:22-alpine AS runner

RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

COPY --from=installer /app .

EXPOSE 3001

CMD ["pnpm","--filter=server","start"]