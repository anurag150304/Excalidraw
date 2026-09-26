FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

FROM base AS pruner
RUN npm install -g turbo

COPY . .
RUN turbo prune server --docker


FROM base AS installer

COPY --from=pruner /app/out/json/ .
RUN pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .

RUN pnpm run db:generate
RUN pnpm turbo build --filter=server

FROM node:22-alpine AS runner

RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

COPY --from=installer /app .

EXPOSE 3000

CMD ["pnpm","--filter=server","start"]