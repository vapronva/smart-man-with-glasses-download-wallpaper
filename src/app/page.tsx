"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

import { Button } from "~/components/ui/button";
import { DomainMarquee } from "~/components/domain-marquee";
import { MediaGrid } from "~/components/media-grid";
import { ChaoticBackgroundText } from "~/components/chaotic-background-text";
import { InfoBox } from "~/components/info-box";

interface Position {
  x: number;
  y: number;
}

export default function ShitpostPage() {
  const [showWallpaperButton] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const dragStateRef = useRef({ isDragging: false, offset: { x: 0, y: 0 } });
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragStateRef.current.isDragging || !imageRef.current) return;
    const parentRect =
      imageRef.current.parentElement?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };
    setPosition({
      x: e.clientX - dragStateRef.current.offset.x - parentRect.left,
      y: e.clientY - dragStateRef.current.offset.y - parentRect.top,
    });
  }, []);
  const handleMouseUp = useCallback(() => {
    dragStateRef.current.isDragging = false;
    setIsDragging(false);
    if (imageRef.current) {
      imageRef.current.style.transition = "top 0.5s ease, left 0.5s ease";
    }
  }, []);
  useEffect(() => {
    dragStateRef.current.isDragging = isDragging;
    dragStateRef.current.offset = offset;
  }, [isDragging, offset]);
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      if (imageRef.current) {
        imageRef.current.style.transition = "none";
      }
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const newOffset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setOffset(newOffset);
      setIsDragging(true);
      e.preventDefault();
    }
  }, []);
  const handleDownloadClick = useCallback(() => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href =
      "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/%D0%BE%D0%B1%D0%BE%D0%B8.jpg";
    link.download = "умный-человек-в-очках-скачать-обои.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-100 font-sans text-black">
      <ChaoticBackgroundText />
      <header className="z-30 w-full">
        <DomainMarquee />
      </header>
      <main className="relative flex flex-grow items-center justify-center p-4">
        <div className="animate-pulse-deep absolute inset-0 z-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/%D0%BE%D0%B1%D0%BE%D0%B8.jpg"
            alt="фон с человеком в очках скачать обои"
            className="fixed inset-0 z-0 h-full w-full object-fill opacity-30 blur-sm"
            loading="eager"
          />
        </div>
        <div className="relative z-30 flex flex-col items-center justify-center text-center">
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
              zIndex: isDragging ? 100 : 30,
            }}
            onMouseDown={handleMouseDown}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/%D0%BE%D0%B1%D0%BE%D0%B8.jpg"
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
              className="font-comic-sans animate-shake relative z-40 rounded-none border-4 border-black bg-green-500 p-4 text-lg text-white shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:animate-none hover:bg-green-600 hover:shadow-none active:translate-x-2 active:translate-y-2 active:shadow-none md:p-8 md:text-2xl"
              onClick={handleDownloadClick}
            >
              <Download className="animate-spin-fast mr-2 h-6 w-6 md:mr-4 md:h-8 md:w-8" />
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
