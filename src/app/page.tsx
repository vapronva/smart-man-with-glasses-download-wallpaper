"use client";

import React, { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

import { Button } from "~/components/ui/button";
import { DomainMarquee } from "~/components/domain-marquee";
import { MediaGrid } from "~/components/media-grid";
import { ChaoticBackgroundText } from "~/components/chaotic-background-text";
import { InfoBox } from "~/components/info-box";

export default function ShitpostPage() {
  const [showWallpaperButton, setShowWallpaperButton] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // const currentHostname = window.location.hostname;
    // if (
    //   currentHostname.includes("скачатьобои") ||
    //   currentHostname.includes("скачать-обои")
    // ) {
    //   setShowWallpaperButton(true);
    // }
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !imageRef.current) return;
      const parentRect =
        imageRef.current.parentElement?.getBoundingClientRect() ?? {
          left: 0,
          top: 0,
        };
      setPosition({
        x: e.clientX - offset.x - parentRect.left,
        y: e.clientY - offset.y - parentRect.top,
      });
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      if (imageRef.current) {
        imageRef.current.style.transition = "top 0.5s ease, left 0.5s ease";
      }
    };
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      if (imageRef.current) {
        imageRef.current.style.transition = "none";
      }
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      setIsDragging(true);
      const rect = imageRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      e.preventDefault();
    }
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href =
      "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/обои.jpg";
    link.download = "умный-человек-в-очках-скачать-обои.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-100 font-sans text-black">
      <ChaoticBackgroundText />
      <header className="z-30 w-full">
        <DomainMarquee />
      </header>
      <main className="relative flex flex-grow items-center justify-center p-4">
        <div className="animate-pulse-deep absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="https://cdn.docker.house/умный-человек-в-очках-скачать-обои/обои.jpg"
            alt="фон с человеком в очках скачать обои"
            className="fixed inset-0 z-0 h-full w-full object-cover object-[center_20%] opacity-30 blur-sm"
            loading="eager"
          />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <div className="animate-float relative -rotate-3 border-4 border-dashed border-red-500 bg-white/50 p-4 backdrop-blur-sm">
            <h1
              className="font-impact text-stroke-2 animate-shake bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-5xl text-transparent uppercase md:text-8xl lg:text-9xl"
              style={{ WebkitTextStroke: "2px black" }}
            >
              умный человек
            </h1>
            <h2
              className="font-impact text-stroke-2 animate-shake bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-4xl text-transparent uppercase [animation-delay:-0.25s] md:text-7xl lg:text-8xl"
              style={{ WebkitTextStroke: "2px black" }}
            >
              в очках
            </h2>
          </div>
          <div
            ref={imageRef}
            className="relative my-8 cursor-grab active:cursor-grabbing"
            style={{
              left: isDragging ? `${position.x}px` : "0px",
              top: isDragging ? `${position.y}px` : "0px",
              zIndex: isDragging ? 100 : 20,
            }}
            onMouseDown={handleMouseDown}
          >
            <img
              src="https://cdn.docker.house/умный-человек-в-очках-скачать-обои/обои.jpg"
              alt="умный человек в очках скачать обои смотрит на тебя"
              width={300}
              height={450}
              className="pointer-events-none rotate-3 border-8 border-double border-black object-contain shadow-2xl transition-transform duration-300 hover:scale-105"
              draggable="false"
            />
          </div>
          {showWallpaperButton && (
            <Button
              size="lg"
              className="font-comic-sans animate-shake rounded-none border-4 border-black bg-green-500 p-8 text-2xl text-white shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:animate-none hover:bg-green-600 hover:shadow-none active:translate-x-2 active:translate-y-2 active:shadow-none"
              onClick={handleDownloadClick}
            >
              <Download className="animate-spin-fast mr-4 h-8 w-8" />
              СКАЧАТЬ ОБОИ
            </Button>
          )}
        </div>
        <MediaGrid />
      </main>
      <InfoBox />
    </div>
  );
}
