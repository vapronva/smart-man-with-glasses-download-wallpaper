import { withSentryConfig } from "@sentry/nextjs/config";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
};

export default withSentryConfig(config, {
  org: "cmld",
  project: "umniy-chelovek-v-ochkah-websites",
  sentryUrl: "https://sentry.cumlord.ru/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  bundleSizeOptimizations: {
    excludeDebugStatements: true,
  },
});
