import { Download } from "lucide-react";

import { ChaoticBackgroundText } from "~/components/chaotic-background-text";
import { DomainMarquee } from "~/components/domain-marquee";
import { DraggableWallpaper } from "~/components/draggable-wallpaper";
import { InfoBox } from "~/components/info-box";
import { MediaGrid } from "~/components/media-grid";
import { CDN_URL } from "~/lib/cdn";

const WALLPAPER_URL = `${CDN_URL}/%D0%BE%D0%B1%D0%BE%D0%B8.jpg`;

export default function ShitpostPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-100 font-sans text-black">
      <ChaoticBackgroundText />
      <header className="z-30 w-full">
        <DomainMarquee />
      </header>
      <main className="relative flex grow items-center justify-center p-4">
        <div className="animate-pulse-deep fixed inset-0 z-0">
          <img
            src={WALLPAPER_URL}
            alt="фон с человеком в очках скачать обои"
            className="size-full object-fill opacity-30 blur-sm"
          />
        </div>
        <div className="pointer-events-none relative z-30 flex flex-col items-center justify-center text-center">
          <div className="animate-float relative -rotate-3 border-4 border-dashed border-red-500 bg-white/50 p-4 backdrop-blur-sm">
            <h1
              className="font-impact animate-shake bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-5xl text-transparent uppercase md:text-8xl lg:text-9xl"
              style={{ WebkitTextStroke: "2px black" }}
            >
              умный человек
            </h1>
            <h2
              className="font-impact animate-shake bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-4xl text-transparent uppercase [animation-delay:-0.25s] md:text-7xl lg:text-8xl"
              style={{ WebkitTextStroke: "2px black" }}
            >
              в очках
            </h2>
          </div>
          <DraggableWallpaper src={WALLPAPER_URL} />
          <a
            href={WALLPAPER_URL}
            target="_blank"
            className="font-comic-sans animate-shake pointer-events-auto relative z-40 inline-flex h-10 items-center justify-center gap-2 border-4 border-black bg-green-500 px-4 text-lg font-medium whitespace-nowrap text-white shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-[background-color,box-shadow,translate] duration-200 hover:animate-none hover:bg-green-600 hover:shadow-none active:translate-x-2 active:translate-y-2 active:shadow-none md:h-18 md:text-2xl"
          >
            <Download className="animate-spin-fast mr-2 size-4 md:mr-4" />
            СКАЧАТЬ ОБОИ
          </a>
        </div>
        <MediaGrid />
      </main>
      <InfoBox />
    </div>
  );
}
