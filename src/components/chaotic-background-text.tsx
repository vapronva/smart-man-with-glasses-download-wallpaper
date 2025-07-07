"use client";

import { useMemo } from "react";

interface TextItem {
  text: string;
  style: {
    top: string;
    left: string;
    fontSize: string;
    transform: string;
    color: string;
  };
  animation: string;
}

const baseTexts = [
  {
    text: "ПОБЕДА",
    baseStyle: {
      top: "10%",
      left: "5%",
      fontSize: "8rem",
      rotation: -15,
      color: "#ff00ff",
    },
    animation: "animate-float",
  },
  {
    text: "гений",
    baseStyle: {
      top: "70%",
      left: "15%",
      fontSize: "6rem",
      rotation: 10,
      color: "#00ffff",
    },
    animation: "animate-pulse",
  },
  {
    text: "скачать",
    baseStyle: {
      top: "50%",
      left: "80%",
      fontSize: "7rem",
      rotation: 5,
      color: "#ffff00",
    },
    animation: "animate-shake",
  },
  {
    text: "обои",
    baseStyle: {
      top: "20%",
      left: "60%",
      fontSize: "9rem",
      rotation: -5,
      color: "#00ff00",
    },
    animation: "animate-text-flicker",
  },
  {
    text: "УЛЬТРАЗВУК",
    baseStyle: {
      top: "85%",
      left: "40%",
      fontSize: "5rem",
      rotation: -8,
      color: "#ff3300",
    },
    animation: "animate-pulse-deep",
  },
  {
    text: "ПОБЕДА",
    baseStyle: {
      top: "5%",
      left: "75%",
      fontSize: "10rem",
      rotation: 20,
      color: "#3333ff",
    },
    animation: "animate-float",
  },
];

export function ChaoticBackgroundText() {
  const randomTexts = useMemo<TextItem[]>(() => {
    return baseTexts.map((item) => ({
      text: item.text,
      style: {
        top: item.baseStyle.top,
        left: item.baseStyle.left,
        fontSize: item.baseStyle.fontSize,
        transform: `rotate(${item.baseStyle.rotation}deg)`,
        color: item.baseStyle.color,
      },
      animation: item.animation,
    }));
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {randomTexts.map((item, index) => (
        <div
          key={index}
          className={`font-impact absolute opacity-50 select-none ${item.animation}`}
          style={item.style}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
