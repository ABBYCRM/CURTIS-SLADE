import { Link } from 'react-router-dom';
import { book } from '../data/book';

export function HomePage() {
  return (
    <>
      <Hero />
      <Hook />
      <BookPreview />
      <Themes />
      <PressQuotes />
      <CtaBanner />
      <Handoff />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/miami-skyline.jpg"
          alt="Miami skyline at dusk"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      <div className="container-x relative z-10 pt-16 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">
              {book.imprint} · A Street Memoir
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6">
              <span className="text-gold-gradient">MR. BIG GUY</span>
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-bone/90 mb-4 italic font-light">
              The Rise and Fall of Curtis Slade
            </h2>
            <p className="text-xl sm:text-2xl text-gold/90 italic font-serif mb-10 max-w-xl">
              "{book.hook}"
            </p>
            <p className="text-bone/80 text-lg leading-relaxed max-w-2xl mb-10">
              {book.logline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={book.buyLinks[0].url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-gold"
              >
                Buy on Amazon
                <ArrowRight />
              </a>
              <Link to="/book" className="btn-ghost-gold">
                Read the Synopsis
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-bone/60">
              <span>
                ISBN <span className="text-gold">{book.isbn}</span>
              </span>
              <span>
                Released <span className="text-gold">{book.releaseDate}</span>
              </span>
              <span>
                {book.pages} pages · {book.language}
              </span>
            </div>
          </div>

          {/* Book cover + portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gold/15 rounded-full blur-3xl" />
              {/* Portrait background */}
              <div className="absolute -right-12 -top-12 w-2/3 aspect-square rounded-full overflow-hidden border-2 border-gold/40 shadow-gold-glow">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Curtis Slade — editorial portrait"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Book cover */}
              <div className="absolute inset-0 frame-gold">
                <div className="relative w-full h-full bg-black rounded-sm overflow-hidden">
                  <img
                    src="/images/book-cover-flat.png"
                    alt="Mr. Big Guy — book cover"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="font-display text-gold-gradient text-xl tracking-widest">
                {book.author.toUpperCase()}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-bone/50">
                {book.tagline}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rule-gold container-x" />
    </section>
  );
}

function Hook() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x max-w-4xl text-center">
        <div className="eyebrow mb-8">From the Back Cover</div>
        <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl italic leading-tight text-bone/90 mb-10">
          "Because in this game... you don't lose when you die —{' '}
          <span className="text-gold-gradient">you lose when you trust the wrong person.</span>"
        </blockquote>
        <div className="rule-gold mb-10" />
        <p className="text-bone/70 text-lg leading-relaxed">
          Curtis Slade was never supposed to make it out of Dania Beach. But the streets had a different plan.
        </p>
      </div>
    </section>
  );
}

function BookPreview() {
  return (
    <section className="py-20 lg:py-28 bg-black/40 border-y border-gold/10">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">The Book</div>
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              Power, betrayal, and the{' '}
              <span className="text-gold-gradient italic">cost of the crown</span>.
            </h2>
            <div className="space-y-5 text-bone/80 text-lg leading-relaxed drop-cap">
              {book.synopsis.slice(1, 4).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/book" className="btn-ghost-gold">
                See Full Synopsis
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/images/book-cover-flat.png"
                  alt="Mr. Big Guy — front cover"
                  className="w-full rounded-lg shadow-gold-glow"
                />
                <img
                  src="/images/book-cover-back.png"
                  alt="Mr. Big Guy — back cover"
                  className="w-full rounded-lg shadow-gold-glow mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Themes() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-6">What It's About</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6">
            Five threads, <span className="text-gold-gradient">one story</span>.
          </h2>
          <p className="text-bone/70 text-lg">
            Mr. Big Guy isn't a single note. It's a layered street memoir about what happens when loyalty, ambition, and fear all collide at once.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {book.themes.map((t, i) => (
            <div key={t} className="card-noir p-7 text-center group hover:border-gold/40 transition-colors">
              <div className="font-display text-gold-gradient text-5xl mb-3 font-black">
                0{i + 1}
              </div>
              <div className="font-semibold text-bone uppercase tracking-widest text-sm">
                {t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PressQuotes() {
  return (
    <section className="py-24 lg:py-28 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="container-x">
        <div className="text-center mb-16">
          <div className="eyebrow mb-6">Early Praise</div>
          <h2 className="font-display text-4xl lg:text-5xl">What readers are saying</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {book.pressQuotes.map((q) => (
            <blockquote
              key={q.source}
              className="card-noir p-8 group hover:border-gold/40 transition-colors"
            >
              <Quote />
              <p className="text-bone/90 text-lg leading-relaxed mb-6 mt-4 italic font-serif">
                "{q.quote}"
              </p>
              <footer className="text-sm text-gold uppercase tracking-widest font-semibold">
                — {q.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-ink via-black to-ink">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <img
            src="/images/dania-street.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
          />
          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <div className="eyebrow mb-6">To Be Continued</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className="text-gold-gradient italic">CROWN ME KING.</span>
            </h2>
            <p className="text-bone/80 text-lg max-w-2xl mx-auto mb-10">
              Book 1 ends with a warning. Book 2 picks up the crown. Don't miss the next chapter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={book.buyLinks[0].url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-gold"
              >
                Order on Amazon
                <ArrowRight />
              </a>
              <Link to="/press" className="btn-ghost-gold">
                Get Notified on Book 2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Handoff() {
  const items = [
    { label: 'Live Site', value: 'https://curtis-slade-slsuc.ondigitalocean.app', href: 'https://curtis-slade-slsuc.ondigitalocean.app' },
    { label: 'GitHub Repo', value: 'github.com/ABBYCRM/CURTIS-SLADE', href: 'https://github.com/ABBYCRM/CURTIS-SLADE' },
    { label: 'Amazon', value: 'a.co/d/0eJcdXta · ASIN B0HJMPRN5L', href: 'https://a.co/d/0eJcdXta' },
    { label: 'ISBN', value: '979-8-218-01234-5' },
    { label: 'Author', value: 'Curtis Slade · @mrbigguybook' },
    { label: 'Publisher', value: 'Slade Enterprise Group · 1 Street Boyz Publications' },
    { label: 'Hosting', value: 'DigitalOcean App Platform · region nyc' },
    { label: 'Deploy', value: 'main branch · deploy_on_push · auto-rebuild' },
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="card-noir p-8 lg:p-12">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div>
              <div className="eyebrow mb-3">Handoff</div>
              <h2 className="font-display text-3xl lg:text-4xl">
                Everything you need <span className="text-gold-gradient">at a glance</span>.
              </h2>
            </div>
            <CrownMark />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div
                key={it.label}
                className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-black/40 border border-gold/15 hover:border-gold/40 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.2em] text-bone/50 mb-1">
                    {it.label}
                  </div>
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.href.startsWith('http') ? '_blank' : undefined}
                      rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-mono text-sm text-bone hover:text-gold transition-colors break-all"
                    >
                      {it.value}
                    </a>
                  ) : (
                    <div className="font-mono text-sm text-bone break-all">{it.value}</div>
                  )}
                </div>
                {it.href && (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-gold/60 hover:text-gold transition-colors"
                    aria-label={`Open ${it.label}`}
                  >
                    <External />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="rule-gold my-10" />

          <div className="grid lg:grid-cols-3 gap-6 text-sm">
            <HandoffFact label="Stack" value="React 18 · TypeScript · Vite 5 · Tailwind 3" />
            <HandoffFact label="Routing" value="React Router 6 (SPA · base: './')" />
            <HandoffFact label="AEO" value="llms.txt · sitemap.xml · robots.txt (LLM-allow) · humans.txt" />
            <HandoffFact label="JSON-LD" value="Organization · Person · Book · FAQPage · BreadcrumbList · WebSite" />
            <HandoffFact label="Imagery" value="4 generated · 3 book covers · gold/black noir palette" />
            <HandoffFact label="Build" value="npm install && npm run build → dist/" />
            <HandoffFact label="Run cmd" value="npx serve -s dist -l 8080 (SPA fallback)" />
            <HandoffFact label="Instance" value="apps-s-1vcpu-0.5gb · $0/mo Starter tier" />
            <HandoffFact label="App ID" value="7b6b6b7e-6c46-42e1-833e-4c8735ab25d7" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/ABBYCRM/CURTIS-SLADE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm justify-center"
            >
              <GithubIcon />
              Open GitHub Repo
            </a>
            <a
              href="https://a.co/d/0eJcdXta"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-ghost-gold text-sm justify-center"
            >
              Buy on Amazon
            </a>
            <Link to="/book" className="btn-ghost-gold text-sm justify-center">
              Read Synopsis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HandoffFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">{label}</div>
      <div className="text-bone/85">{value}</div>
    </div>
  );
}

function CrownMark() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 flex-shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="hand-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5e9b8" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#86671a" />
        </linearGradient>
      </defs>
      <path
        d="M8 18l7 7 9-12 9 12 7-7-3 19H11L8 18zm4 24h24v3H12v-3z"
        fill="url(#hand-g)"
      />
    </svg>
  );
}

function External() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 4h6v6M10 14L20 4M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.5v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1.9-.3 1.8-.4 2.8-.4.9 0 1.9.1 2.8.4 2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.6.8.5 4.5-1.5 7.7-5.7 7.7-10.7C23.4 5.6 18.3.5 12 .5z" />
    </svg>
  );
}
function Quote() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold" fill="currentColor">
      <path d="M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm10 0h4v4h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z" />
    </svg>
  );
}
