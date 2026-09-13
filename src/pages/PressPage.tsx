import { useState } from 'react';
import { book } from '../data/book';

export function PressPage() {
  return (
    <>
      <Hero />
      <PressKit />
      <Downloads />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-16 pb-12">
      <div className="container-x text-center max-w-3xl">
        <div className="eyebrow mb-6">Press & Media</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 leading-[0.95]">
          <span className="text-gold-gradient">PRESS KIT</span>
        </h1>
        <p className="font-display text-2xl lg:text-3xl text-bone/90 italic font-light mb-6">
          Everything you need to cover Mr. Big Guy.
        </p>
        <div className="rule-gold" />
      </div>
    </section>
  );
}

function PressKit() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Stat value={book.pages} label="Pages" />
          <Stat value={book.isbn} label="ISBN" mono />
          <Stat value={book.releaseDate} label="Release Date" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, mono }: { value: string | number; label: string; mono?: boolean }) {
  return (
    <div className="card-noir p-7 text-center">
      <div
        className={`font-display text-3xl text-gold-gradient font-black mb-2 ${mono ? 'font-mono text-2xl' : ''}`}
      >
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-bone/60">{label}</div>
    </div>
  );
}

function Downloads() {
  const items = [
    { label: 'Author Headshot — High Res', size: 'JPG · 4 MB', icon: 'image' },
    { label: 'Book Cover — Front', size: 'PNG · 6 MB', icon: 'image' },
    { label: 'Book Cover — 3D Flat Lay', size: 'PNG · 4 MB', icon: 'image' },
    { label: 'Press Release — Book 1', size: 'PDF · 80 KB', icon: 'doc' },
    { label: 'Fact Sheet', size: 'PDF · 40 KB', icon: 'doc' },
    { label: 'Reading Group Guide', size: 'PDF · 60 KB', icon: 'doc' },
  ];
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="text-center mb-12">
          <div className="eyebrow mb-6">Downloads</div>
          <h2 className="font-display text-4xl lg:text-5xl">Approved for coverage</h2>
          <p className="text-bone/70 mt-4 max-w-2xl mx-auto">
            All assets are cleared for editorial and review use. Credit: "Photo courtesy of Slade Enterprise Group."
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((it) => (
            <a
              key={it.label}
              href="#"
              className="card-noir p-6 flex items-center gap-4 group hover:border-gold/40 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                {it.icon === 'image' ? <ImageIcon /> : <DocIcon />}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-bone group-hover:text-gold transition-colors">
                  {it.label}
                </div>
                <div className="text-xs text-bone/50">{it.size}</div>
              </div>
              <Download />
            </a>
          ))}
        </div>
        <p className="text-center text-bone/40 text-xs mt-8 italic max-w-2xl mx-auto">
          Direct download links will be enabled once the assets are mirrored to the production CDN.
        </p>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };
  return (
    <section className="py-20 lg:py-28 bg-black/40 border-y border-gold/10">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <div className="eyebrow mb-6">Book 2 Updates</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6">
            Be the first to know about{' '}
            <span className="text-gold-gradient italic">Crown Me King</span>.
          </h2>
          <p className="text-bone/70 mb-10">
            Subscribe to get release announcements, signed pre-order links, and reading-group invites.
            No spam — just news when it matters.
          </p>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full bg-black/60 border border-gold/30 text-bone placeholder-bone/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button type="submit" className="btn-gold text-sm">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="card-noir p-6 inline-block">
              <div className="text-gold font-semibold">You're on the list.</div>
              <div className="text-bone/70 text-sm mt-1">
                Watch for Book 2 announcements in your inbox.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}
function Download() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
