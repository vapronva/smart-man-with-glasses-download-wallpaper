ARG TOOLS_IMAGE=docker.horse/ci/on-alpine/tools:1

FROM $TOOLS_IMAGE AS tools

FROM docker.io/library/node:26-alpine AS base

ARG MIRROR_ALPINE_URL=""

ARG MIRROR_ALPINE_FALLBACK_URL=""

ARG MIRROR_NPM_URL=""

ARG MIRROR_NPM_FALLBACK_URL=""

COPY --from=tools /usr/local/bin/pkg-base-setup /usr/local/bin/

RUN pkg-base-setup

FROM base AS builder

RUN npm install --global pnpm@12 && \
    npm cache clean --force

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN --mount=type=secret,id=SENTRY_AUTH_TOKEN \
    export SENTRY_AUTH_TOKEN="$(cat /run/secrets/SENTRY_AUTH_TOKEN)" && \
    pnpm run build

FROM base

WORKDIR /usr/src/app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

COPY --from=builder --chown=node:node /usr/src/app/.next/standalone ./

COPY --from=builder --chown=node:node /usr/src/app/.next/static ./.next/static

USER node

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
