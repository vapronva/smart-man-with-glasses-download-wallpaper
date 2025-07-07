import { type Metadata } from "next";
import localFont from "next/font/local";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "умный человек в очках скачать обои",
  description:
    "веб-сайт в сети интернет для умный человек в очках скачать обои",
  icons: [
    {
      rel: "icon",
      url: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/умный-человек-в-очках-скачать-обои-аватар-для-gitlab-проекта-вебсайт-на-nextjs-я-хочу-сосать-реакт-больше-спасибо-т3-за-такое.jpg",
      sizes: "512x512",
    },
  ],
  openGraph: {
    title: "умный человек в очках скачать обои",
    description:
      "веб-сайт в сети интернет для умный человек в очках скачать обои",
    images: [
      {
        url: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/умный-человек-в-очках-скачать-обои-аватар-для-gitlab-проекта-вебсайт-на-nextjs-я-хочу-сосать-реакт-больше-спасибо-т3-за-такое.jpg",
        width: 512,
        height: 512,
      },
    ],
  },
};

const Impact = localFont({
  src: [
    {
      path: "../../public/fonts/impact/impact.woff2",
    },
  ],
  style: "normal",
  preload: true,
  variable: "--font-family-impact",
  fallback: ["Impact", "sans-serif"],
});

const ComicSans = localFont({
  src: [
    {
      path: "../../public/fonts/comic-sans/comic-sans-ms.woff2",
    },
  ],
  style: "normal",
  preload: true,
  variable: "--font-family-comic-sans",
  fallback: ["Comic Sans MS", "Comic Sans", "cursive"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${Impact.variable} ${ComicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
