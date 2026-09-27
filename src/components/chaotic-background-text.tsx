const TEXTS = [
  {
    text: "ПОБЕДА",
    top: "10%",
    left: "5%",
    fontSize: "8rem",
    rotate: "-15deg",
    color: "#ff00ff",
    animation: "animate-float",
  },
  {
    text: "гений",
    top: "70%",
    left: "15%",
    fontSize: "6rem",
    rotate: "10deg",
    color: "#00ffff",
    animation: "animate-pulse",
  },
  {
    text: "скачать",
    top: "50%",
    left: "80%",
    fontSize: "7rem",
    rotate: "5deg",
    color: "#ffff00",
    animation: "animate-shake",
  },
  {
    text: "обои",
    top: "20%",
    left: "60%",
    fontSize: "9rem",
    rotate: "-5deg",
    color: "#00ff00",
    animation: "animate-text-flicker",
  },
  {
    text: "УЛЬТРАЗВУК",
    top: "85%",
    left: "40%",
    fontSize: "5rem",
    rotate: "-8deg",
    color: "#ff3300",
    animation: "animate-pulse-deep",
  },
  {
    text: "ПОБЕДА",
    top: "5%",
    left: "75%",
    fontSize: "10rem",
    rotate: "20deg",
    color: "#3333ff",
    animation: "animate-float",
  },
];

export function ChaoticBackgroundText() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-50">
      {TEXTS.map(({ text, animation, ...style }, index) => (
        <div
          key={index}
          className={`font-impact absolute select-none ${animation}`}
          style={style}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
