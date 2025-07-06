import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://83c07262f91be5306af7d5ab6273c01d@sentry.cumlord.ru/64",
  tracesSampleRate: 1,
  debug: false,
});
