const randomTexts = [
  {
    text: "ПОБЕДА",
    style: {
      top: "10%",
      left: "5%",
      fontSize: "8rem",
      transform: "rotate(-15deg)",
      color: "#ff00ff",
    },
    animation: "animate-float",
  },
  {
    text: "гений",
    style: {
      top: "70%",
      left: "15%",
      fontSize: "6rem",
      transform: "rotate(10deg)",
      color: "#00ffff",
    },
    animation: "animate-pulse",
  },
  {
    text: "скачать",
    style: {
      top: "50%",
      left: "80%",
      fontSize: "7rem",
      transform: "rotate(5deg)",
      color: "#ffff00",
    },
    animation: "animate-shake",
  },
  {
    text: "обои",
    style: {
      top: "20%",
      left: "60%",
      fontSize: "9rem",
      transform: "rotate(-5deg)",
      color: "#00ff00",
    },
    animation: "animate-text-flicker",
  },
  {
    text: "УЛЬТРАЗВУК",
    style: {
      top: "85%",
      left: "40%",
      fontSize: "5rem",
      transform: "rotate(-8deg)",
      color: "#ff3300",
    },
    animation: "animate-pulse-deep",
  },
  {
    text: "ПОБЕДА",
    style: {
      top: "5%",
      left: "75%",
      fontSize: "10rem",
      transform: "rotate(20deg)",
      color: "#3333ff",
    },
    animation: "animate-float",
  },
];

export function ChaoticBackgroundText() {
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
