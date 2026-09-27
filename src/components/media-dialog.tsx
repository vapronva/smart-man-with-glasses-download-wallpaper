import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { CDN_URL } from "~/lib/cdn";

const HEVC_TYPE = 'video/mp4; codecs="hvc1.1.6.L150.90"';

const AVC_TYPE = 'video/mp4; codecs="avc1.640033"';

export function MediaDialog({
  name,
  title,
  rotate,
  scale,
}: {
  name: string;
  title: string;
  rotate: string;
  scale: number;
}) {
  const hevcUrl = `${CDN_URL}/rferee/blender-animations/h265/screencast-${name}.mp4`;
  const avcUrl = `${CDN_URL}/rferee/blender-animations/h264/screencast-${name}.mp4`;
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label={title}
        className="group hover:animate-shake relative cursor-pointer overflow-hidden rounded-lg border-2 border-fuchsia-500"
        style={{ rotate, scale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video size-full object-cover transition-transform duration-500 group-hover:scale-110"
        >
          <source src={hevcUrl} type={HEVC_TYPE} />
          <source src={avcUrl} type={AVC_TYPE} />
        </video>
        <span className="absolute inset-0 bg-black/20" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content
          aria-describedby={undefined}
          className="font-comic-sans data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 border-4 border-black bg-yellow-200 p-6 shadow-lg sm:max-w-[625px]"
        >
          <Dialog.Title className="font-impact animate-text-flicker text-center text-2xl leading-tight font-semibold text-red-600 sm:text-left sm:text-3xl">
            {title}
          </Dialog.Title>
          <div className="py-4">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg border-2 border-black"
            >
              <source src={hevcUrl} type={HEVC_TYPE} />
              <source src={avcUrl} type={AVC_TYPE} />
            </video>
          </div>
          <p className="text-base sm:text-lg">
            Автор:{" "}
            <a
              href="https://rfer.ee"
              target="_blank"
              className="animate-color-cycle hover:underline"
            >
              rferee
            </a>
          </p>
          <Dialog.Close className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden">
            <XIcon className="size-4" />
            <span className="sr-only">Закрыть</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
