"use client";

import { useState } from "react";

export function DraggableWallpaper({ src }: { src: string }) {
  const [drag, setDrag] = useState<{
    pointerId: number;
    originX: number;
    originY: number;
    x: number;
    y: number;
  } | null>(null);
  return (
    <div
      className="pointer-events-auto relative my-8 cursor-grab touch-none select-none active:cursor-grabbing"
      style={
        drag
          ? { transform: `translate(${drag.x}px, ${drag.y}px)`, zIndex: 100 }
          : { transition: "transform 0.5s ease" }
      }
      onPointerDown={(event) => {
        if (drag) return;
        const { m41: x, m42: y } = new DOMMatrixReadOnly(
          getComputedStyle(event.currentTarget).transform,
        );
        event.currentTarget.setPointerCapture(event.pointerId);
        setDrag({
          pointerId: event.pointerId,
          originX: event.clientX - x,
          originY: event.clientY - y,
          x,
          y,
        });
      }}
      onPointerMove={(event) =>
        setDrag((current) =>
          current?.pointerId === event.pointerId
            ? {
                ...current,
                x: event.clientX - current.originX,
                y: event.clientY - current.originY,
              }
            : current,
        )
      }
      onLostPointerCapture={(event) =>
        setDrag((current) =>
          current?.pointerId === event.pointerId ? null : current,
        )
      }
    >
      <img
        src={src}
        alt="умный человек в очках скачать обои смотрит на тебя"
        width={405}
        height={720}
        draggable={false}
        className="w-75 rotate-3 border-8 border-double border-black object-contain shadow-2xl transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
