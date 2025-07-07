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
      url: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/%D1%83%D0%BC%D0%BD%D1%8B%D0%B8%CC%86-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B4%D0%BB%D1%8F-gitlab-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B8%CC%86%D1%82-%D0%BD%D0%B0-nextjs-%D1%8F-%D1%85%D0%BE%D1%87%D1%83-%D1%81%D0%BE%D1%81%D0%B0%D1%82%D1%8C-%D1%80%D0%B5%D0%B0%D0%BA%D1%82-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5-%D1%81%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE-%D1%823-%D0%B7%D0%B0-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5.jpg",
      sizes: "512x512",
    },
  ],
  openGraph: {
    title: "умный человек в очках скачать обои",
    description:
      "веб-сайт в сети интернет для умный человек в очках скачать обои",
    images: [
      {
        url: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/%D1%83%D0%BC%D0%BD%D1%8B%D0%B8%CC%86-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B4%D0%BB%D1%8F-gitlab-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B8%CC%86%D1%82-%D0%BD%D0%B0-nextjs-%D1%8F-%D1%85%D0%BE%D1%87%D1%83-%D1%81%D0%BE%D1%81%D0%B0%D1%82%D1%8C-%D1%80%D0%B5%D0%B0%D0%BA%D1%82-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5-%D1%81%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE-%D1%823-%D0%B7%D0%B0-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5.jpg",
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
