/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [new URL("https://cdn.docker.house/**")],
  },
};

import { withSentryConfig } from "@sentry/nextjs";

export default withSentryConfig(config, {
  org: "cmld",
  project: "umniy-chelovek-v-ochkah-websites",
  sentryUrl: "https://sentry.cumlord.ru/",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/skachat-oboi",
  reactComponentAnnotation: {
    enabled: true,
  },
  disableLogger: true,
});
