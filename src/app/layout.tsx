import { type Metadata } from "next";
import localFont from "next/font/local";

import { CDN_URL } from "~/lib/cdn";

import "~/styles/globals.css";

const TITLE = "умный человек в очках скачать обои";

const DESCRIPTION =
  "веб-сайт в сети интернет для умный человек в очках скачать обои";

const AVATAR_URL = `${CDN_URL}/%D1%83%D0%BC%D0%BD%D1%8B%D0%B8%CC%86-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B4%D0%BB%D1%8F-gitlab-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B8%CC%86%D1%82-%D0%BD%D0%B0-nextjs-%D1%8F-%D1%85%D0%BE%D1%87%D1%83-%D1%81%D0%BE%D1%81%D0%B0%D1%82%D1%8C-%D1%80%D0%B5%D0%B0%D0%BA%D1%82-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5-%D1%81%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE-%D1%823-%D0%B7%D0%B0-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5.jpg`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: AVATAR_URL,
  openGraph: { title: TITLE, description: DESCRIPTION, images: AVATAR_URL },
};

const impact = localFont({
  src: "./fonts/impact.woff2",
  variable: "--font-family-impact",
  fallback: ["Impact", "sans-serif"],
});

const comicSans = localFont({
  src: "./fonts/comic-sans-ms.woff2",
  variable: "--font-family-comic-sans",
  fallback: ["Comic Sans MS", "Comic Sans", "cursive"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${impact.variable} ${comicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
