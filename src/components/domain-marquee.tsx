"use client";

import { useMemo } from "react";
import Link from "next/link";

const DOMAINS = [
  "умныйчеловеквочкахскачатьобои.рф",
  "умный-человек-в-очках-скачать-обои.рф",
  "умныйчеловеквочках.скачатьобои.рф",
  "умный-человек-в-очках.скачать-обои.рф",
  "умныйчеловеквочкахскачатьобоипобеда.рф",
  "умныйчеловеквочках.рф",
  "умный-человек-в-очках.рф",
  "умныйчеловеквочкахпобеда.рф",
];

function deterministicShuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const seed = (i + array.length) * 9301 + 49297;
    const random = (seed % 233280) / 233280;
    const j = Math.floor(random * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}

export function DomainMarquee() {
  const marqueeDomains = useMemo(() => {
    const doubled = [...DOMAINS, ...DOMAINS];
    return deterministicShuffle(doubled);
  }, []);
  return (
    <div className="font-comic-sans relative flex w-full overflow-hidden border-y-4 border-black bg-yellow-300 text-2xl">
      <div className="animate-marquee flex py-2 whitespace-nowrap">
        {marqueeDomains.map((domain, index) => (
          <Link
            key={`${domain}-${index}`}
            href={`http://${domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 transition-transform hover:scale-110 hover:text-red-500"
          >
            <span>{domain}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
