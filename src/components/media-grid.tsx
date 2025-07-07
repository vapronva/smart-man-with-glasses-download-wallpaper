"use client";

import { useMemo } from "react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

const mediaFiles = [
  {
    src: {
      h265: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/rferee/blender-animations/h265/screencast-2025_07_05-20_56_04.mp4",
      h264: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/rferee/blender-animations/h264/screencast-2025_07_05-20_56_04.mp4",
    },
    title: "Кубический умный человек в очках скачать обои окунулся в Debian",
    author: "rferee",
    authorLink: "https://rfer.ee",
    type: "video" as const,
  },
  {
    src: {
      h265: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/rferee/blender-animations/h265/screencast-2025_07_05-21_15_58.mp4",
      h264: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/rferee/blender-animations/h264/screencast-2025_07_05-21_15_58.mp4",
    },
    title: "Сферический умный человек в очках скачать обои взорвался",
    author: "rferee",
    authorLink: "https://rfer.ee",
    type: "video" as const,
  },
  {
    src: {
      h265: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/rferee/blender-animations/h265/screencast-2025_07_05-21_19_06.mp4",
      h264: "https://cdn.docker.house/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D0%BE%D0%B8/rferee/blender-animations/h264/screencast-2025_07_05-21_19_06.mp4",
    },
    title:
      "проблема стола, куба, debian и умного человека в очках скачать обои",
    author: "rferee",
    authorLink: "https://rfer.ee",
    type: "video" as const,
  },
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function MediaGrid() {
  const mediaWithTransforms = useMemo(() => {
    return mediaFiles.map((media, index) => ({
      ...media,
      transform: {
        rotation: (seededRandom(index) - 0.5) * 20,
        scale: 1 + seededRandom(index + 10) * 0.1,
      },
    }));
  }, []);
  return (
    <div className="absolute right-2 bottom-2 z-20 grid w-32 grid-cols-1 gap-1 sm:w-48 sm:grid-cols-2 sm:gap-2 md:right-4 md:bottom-4 md:w-64 md:grid-cols-2 lg:w-200 lg:grid-cols-3">
      {mediaWithTransforms.map((media, index) => (
        <Dialog key={media.src.h264}>
          <DialogTrigger asChild>
            <div
              className="group hover:animate-shake relative cursor-pointer overflow-hidden rounded-lg border-2 border-fuchsia-500"
              style={{
                transform: `rotate(${media.transform.rotation}deg) scale(${media.transform.scale})`,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: "16/9" }}
              >
                <source src={media.src.h265} type="video/mp4" />
                <source src={media.src.h264} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </DialogTrigger>
          <DialogContent className="font-comic-sans rounded-none border-4 border-black bg-yellow-200 sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="font-impact animate-text-flicker text-2xl leading-tight text-red-600 sm:text-3xl">
                {media.title}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <video
                controls
                autoPlay
                loop
                className="w-full rounded-lg border-2 border-black"
              >
                <source src={media.src.h265} type="video/mp4" />
                <source src={media.src.h264} type="video/mp4" />
              </video>
            </div>
            <DialogFooter className="sm:justify-start">
              <div className="text-base sm:text-lg">
                Автор:{" "}
                <Link
                  href={media.authorLink}
                  target="_blank"
                  className="animate-color-cycle text-blue-600 hover:underline"
                >
                  {media.author}
                </Link>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
      <div className="font-impact animate-float pointer-events-none absolute -bottom-4 -left-3 -rotate-12 text-2xl text-red-500 opacity-50 select-none sm:-bottom-5 sm:-left-4 sm:text-4xl md:-bottom-7 md:-left-5 md:text-6xl lg:text-8xl">
        MEDIA
      </div>
    </div>
  );
}
