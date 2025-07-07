import Link from "next/link";

export function InfoBox() {
  return (
    <div className="font-comic-sans animate-color-cycle absolute bottom-2 left-2 z-40 max-w-48 rounded-lg border-2 border-dashed border-blue-500 bg-white/80 p-2 text-xs sm:max-w-xs">
      <p className="font-bold">
        это постироничный прикол веб-сайт (веб-шутка) &quot;умный человек в
        очках скачать обои&quot;.
      </p>
      <p>
        помните, что{" "}
        <Link
          href="https://www.youtube.com/watch?v=qPVzVggHAfw"
          target="_blank"
          className="font-bold text-red-600 hover:underline"
        >
          блогеры иногда говорят про &quot;ультразвуковые&quot; самолеты
        </Link>
        .
      </p>
      <p className="mt-1">
        <Link
          href="https://github.com/vapronva/smart-man-with-glasses-download-wallpaper"
          target="_blank"
          className="text-purple-700 hover:underline"
        >
          [исходный код на гитхабе]
        </Link>{" "}
        |{" "}
        <Link
          href="https://gl.vprw.ru/vapronva/smart-man-with-glasses-download-wallpaper"
          target="_blank"
          className="text-purple-700 hover:underline"
        >
          [мой гитлаб]
        </Link>
      </p>
    </div>
  );
}
