import { book } from '../data/book';

export function OrderPage() {
  return (
    <>
      <Hero />
      <Retailers />
      <Editions />
      <Local />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-16 pb-12">
      <div className="container-x text-center max-w-3xl">
        <div className="eyebrow mb-6">Get the Book</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 leading-[0.95]">
          <span className="text-gold-gradient">ORDER MR. BIG GUY</span>
        </h1>
        <p className="font-display text-2xl lg:text-3xl text-bone/90 italic font-light mb-6">
          Choose your format. Choose your store.
        </p>
        <div className="rule-gold" />
        <div className="mt-10">
          <a
            href={book.buyLinks[0].url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-gold"
          >
            Buy on Amazon
            <External />
          </a>
        </div>
      </div>
    </section>
  );
}

function Retailers() {
  return (
    <section className="py-16">
      <div className="container-x">
        {/* Primary Amazon CTA — featured */}
        <div className="max-w-3xl mx-auto mb-12">
          <a
            href={book.buyLinks[0].url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group relative block overflow-hidden rounded-2xl border-2 border-gold/60 hover:border-gold transition-all shadow-gold-glow"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/20 rounded-full blur-3xl group-hover:bg-gold/30 transition-colors" />
            <div className="relative px-8 py-10 lg:px-12 lg:py-12 bg-gradient-to-br from-ink via-black to-ink flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center">
                <AmazonIcon />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                  Primary Retailer · ASIN {book.buyLinks[0].asin}
                </div>
                <div className="font-display text-3xl lg:text-4xl text-gold-gradient mb-2">
                  Buy on Amazon
                </div>
                <div className="text-bone/70 text-sm">{book.buyLinks[0].note}</div>
              </div>
              <div className="btn-gold text-sm flex-shrink-0">
                Order Now
                <External />
              </div>
            </div>
          </a>
        </div>

        {/* Other retailers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {book.buyLinks.slice(1).map((r) => (
            <a
              key={r.label}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="card-noir p-7 group hover:border-gold/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="font-display text-2xl text-bone group-hover:text-gold-gradient transition-colors">
                  {r.label}
                </div>
                <External />
              </div>
              <div className="text-bone/60 text-sm">{r.note}</div>
              <div className="mt-6 text-xs uppercase tracking-widest text-gold">
                Visit Store →
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-bone/40 text-xs mt-8 italic max-w-2xl mx-auto">
          Some retailer links may be affiliate links. Prices and availability are set by each retailer
          and may vary. ISBN 979-8-218-01234-5.
        </p>
      </div>
    </section>
  );
}

function AmazonIcon() {
  // Recognizable "a" + smile arrow — evokes the Amazon mark without copying trademark
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden="true">
      <defs>
        <linearGradient id="amz-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5e9b8" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#86671a" />
        </linearGradient>
      </defs>
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontWeight="900"
        fontSize="28"
        fill="url(#amz-g)"
      >
        a
      </text>
      <path
        d="M10 36 Q24 42 38 36"
        stroke="url(#amz-g)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M36 34 L40 36 L36 38 Z" fill="url(#amz-g)" />
    </svg>
  );
}

function Editions() {
  const editions = [
    {
      label: 'Hardcover',
      price: '$24.99',
      features: ['Dust jacket', 'Premium matte finish', 'Gold foil accents'],
      status: 'Available now',
    },
    {
      label: 'Paperback',
      price: '$16.99',
      features: ['Trade paperback', 'Matte cover', 'Reader-friendly format'],
      status: 'Available now',
    },
    {
      label: 'Kindle eBook',
      price: '$9.99',
      features: ['Instant download', 'Read on any device', 'Adjustable font size'],
      status: 'Available now',
    },
    {
      label: 'Audiobook',
      price: '$14.99',
      features: ['Narrated performance', 'Audible · Apple Books', 'Coming soon'],
      status: 'Pre-order',
    },
  ];
  return (
    <section className="py-20 lg:py-28 bg-black/40 border-y border-gold/10">
      <div className="container-x">
        <div className="text-center mb-12">
          <div className="eyebrow mb-6">Editions</div>
          <h2 className="font-display text-4xl lg:text-5xl">Pick your format</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {editions.map((e) => (
            <div
              key={e.label}
              className="card-noir p-7 group hover:border-gold/40 transition-colors"
            >
              <div className="eyebrow mb-3">{e.status}</div>
              <div className="font-display text-3xl text-bone mb-1">{e.label}</div>
              <div className="font-display text-3xl text-gold-gradient mb-6 font-black">
                {e.price}
              </div>
              <ul className="space-y-2 text-sm text-bone/75">
                {e.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Local() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl mx-auto card-noir p-10 lg:p-14 text-center">
          <div className="eyebrow mb-6">Local Bookstores</div>
          <h2 className="font-display text-3xl lg:text-4xl mb-6">
            Prefer to shop <span className="text-gold-gradient">local</span>?
          </h2>
          <p className="text-bone/80 leading-relaxed mb-8">
            Mr. Big Guy is stocked at select independent bookstores across South Florida — including
            shops in Dania Beach, Fort Lauderdale, Hollywood, and Miami. Use IndieBound to find the
            closest one to you.
          </p>
          <a
            href="https://www.indiebound.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Find a Local Store
            <External />
          </a>
        </div>
      </div>
    </section>
  );
}

function External() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 4h6v6M10 14L20 4M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5" />
    </svg>
  );
}
