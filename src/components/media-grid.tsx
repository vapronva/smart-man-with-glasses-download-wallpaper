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
      h265: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/rferee/blender-animations/h265/screencast-2025_07_05-20_56_04.mp4",
      h264: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/rferee/blender-animations/h264/screencast-2025_07_05-20_56_04.mp4",
    },
    title: "Кубический умный человек в очках скачать обои окунулся в Debian",
    author: "rferee",
    authorLink: "https://rfer.ee",
    type: "video",
  },
  {
    src: {
      h265: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/rferee/blender-animations/h265/screencast-2025_07_05-21_15_58.mp4",
      h264: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/rferee/blender-animations/h264/screencast-2025_07_05-21_15_58.mp4",
    },
    title: "Сферический умный человек в очках скачать обои взорвался",
    author: "rferee",
    authorLink: "https://rfer.ee",
    type: "video",
  },
  {
    src: {
      h265: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/rferee/blender-animations/h265/screencast-2025_07_05-21_19_06.mp4",
      h264: "https://cdn.docker.house/умный-человек-в-очках-скачать-обои/rferee/blender-animations/h264/screencast-2025_07_05-21_19_06.mp4",
    },
    title:
      "проблема стола, куба, debian и умного человека в очках скачать обои",
    author: "rferee",
    authorLink: "https://rfer.ee",
    type: "video",
  },
];

export function MediaGrid() {
  return (
    <div className="absolute right-0 bottom-0 z-20 grid w-full grid-cols-2 gap-2 p-4 md:w-1/2 md:grid-cols-3 lg:w-1/3">
      {mediaFiles.map((media) => (
        <Dialog key={media.src.h264}>
          <DialogTrigger asChild>
            <div
              className="group hover:animate-shake relative cursor-pointer overflow-hidden rounded-lg border-2 border-fuchsia-500"
              style={{
                transform: `rotate(${(Math.random() - 0.5) * 20}deg) scale(${1 + Math.random() * 0.1})`,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              >
                <source src={media.src.h265} type="video/mp4" />
                <source src={media.src.h264} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </DialogTrigger>
          <DialogContent className="font-comic-sans rounded-none border-4 border-black bg-yellow-200 sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="font-impact animate-text-flicker text-3xl leading-tight text-red-600">
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
              <div className="text-lg">
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
      <div className="font-impact animate-float absolute -bottom-7 -left-5 -rotate-12 text-8xl text-red-500 opacity-50 select-none">
        MEDIA
      </div>
    </div>
  );
}
