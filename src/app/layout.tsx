import { type Metadata } from "next";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
