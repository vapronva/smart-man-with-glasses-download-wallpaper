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

const marqueeDomains = [...DOMAINS, ...DOMAINS].sort(() => Math.random() - 0.5);

export function DomainMarquee() {
  return (
    <div className="font-comic-sans relative flex w-full overflow-hidden border-y-4 border-black bg-yellow-300 text-2xl">
      <div className="animate-marquee flex py-2 whitespace-nowrap">
        {marqueeDomains.map((domain, index) => (
          <Link
            key={index}
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
