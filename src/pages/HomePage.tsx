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
              <Link to="/order" className="btn-gold">
                Get the Book
                <ArrowRight />
              </Link>
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
              <Link to="/order" className="btn-gold">
                Order Book 1 Now
                <ArrowRight />
              </Link>
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
function Quote() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold" fill="currentColor">
      <path d="M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm10 0h4v4h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z" />
    </svg>
  );
}
