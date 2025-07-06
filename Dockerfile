FROM docker-registry.selectel.ru/library/node:24-alpine AS builder

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm install --global pnpm@10 && \
    pnpm install

COPY . .

RUN --mount=type=secret,id=SENTRY_AUTH_TOKEN \
    export SENTRY_AUTH_TOKEN="$(cat /run/secrets/SENTRY_AUTH_TOKEN)" && \
    pnpm run build

FROM docker-registry.selectel.ru/library/node:24-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
