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

export function DomainMarquee() {
  return (
    <div className="font-comic-sans flex w-full overflow-hidden border-y-4 border-black bg-yellow-300 text-2xl">
      <div className="animate-marquee flex py-2 whitespace-nowrap">
        {[...DOMAINS, ...DOMAINS, ...DOMAINS].map((domain, index) => (
          <a
            key={index}
            href={`https://${domain}`}
            target="_blank"
            className="mx-4 transition-transform hover:scale-110 hover:text-red-500"
          >
            {domain}
          </a>
        ))}
      </div>
    </div>
  );
}
