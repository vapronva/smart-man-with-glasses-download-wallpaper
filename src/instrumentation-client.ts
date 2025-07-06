import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://83c07262f91be5306af7d5ab6273c01d@sentry.cumlord.ru/64",
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
