import { MediaDialog } from "~/components/media-dialog";

const MEDIA = [
  {
    name: "2025_07_05-20_56_04",
    title: "Кубический умный человек в очках скачать обои окунулся в Debian",
    rotate: "-10deg",
    scale: 1.079,
  },
  {
    name: "2025_07_05-21_15_58",
    title: "Сферический умный человек в очках скачать обои взорвался",
    rotate: "4.2deg",
    scale: 1.01,
  },
  {
    name: "2025_07_05-21_19_06",
    title:
      "проблема стола, куба, debian и умного человека в очках скачать обои",
    rotate: "9.49deg",
    scale: 1.027,
  },
];

export function MediaGrid() {
  return (
    <div className="absolute right-2 bottom-2 z-20 grid w-32 grid-cols-1 gap-1 sm:w-48 sm:grid-cols-2 sm:gap-2 md:right-4 md:bottom-4 md:w-64 lg:w-200 lg:grid-cols-3">
      {MEDIA.map((media) => (
        <MediaDialog key={media.name} {...media} />
      ))}
      <div className="font-impact animate-float pointer-events-none absolute -bottom-4 -left-3 -rotate-12 text-2xl text-red-500 opacity-50 select-none sm:-bottom-5 sm:-left-4 sm:text-4xl md:-bottom-7 md:-left-5 md:text-6xl lg:text-8xl">
        MEDIA
      </div>
    </div>
  );
}
