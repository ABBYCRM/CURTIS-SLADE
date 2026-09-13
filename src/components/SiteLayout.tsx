import { Outlet, Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'Book' },
  { to: '/about', label: 'The Author' },
  { to: '/press', label: 'Press' },
  { to: '/order', label: 'Order' },
  { to: '/faq', label: 'FAQ' },
];

export function SiteLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/85 backdrop-blur-md border-b border-gold/15'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Mr. Big Guy — Home">
            <Crown className="w-7 h-7 text-gold transition-transform group-hover:rotate-3" />
            <div className="leading-tight">
              <div className="font-display text-lg sm:text-xl font-bold text-gold-gradient tracking-wider">
                MR. BIG GUY
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold/70">
                Curtis Slade
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm uppercase tracking-widest transition-colors ${
                    isActive ? 'text-gold' : 'text-bone/70 hover:text-bone'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/order" className="btn-gold text-xs">
              Get the Book
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-gold/15 bg-ink/95 backdrop-blur-md">
            <div className="container-x py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm uppercase tracking-widest transition-colors ${
                      isActive ? 'text-gold bg-gold/5' : 'text-bone/80 hover:text-gold'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/order"
                onClick={() => setOpen(false)}
                className="btn-gold mt-3 text-xs justify-center"
              >
                Get the Book
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-gold/15 bg-black/60">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-gold" />
              <span className="font-display text-2xl text-gold-gradient">MR. BIG GUY</span>
            </div>
            <p className="text-bone/70 max-w-md leading-relaxed">
              The Rise and Fall of Curtis Slade. A street memoir from the streets of Dania Beach, Florida.
              Published by Slade Enterprise Group. To be continued: <em>Crown Me King.</em>
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-bone/70 hover:text-gold transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Get In Touch</div>
            <ul className="space-y-2 text-sm text-bone/70">
              <li>
                <a href="mailto:press@mrbigguybook.com" className="hover:text-gold transition-colors">
                  press@mrbigguybook.com
                </a>
              </li>
              <li>
                <a href="mailto:orders@mrbigguybook.com" className="hover:text-gold transition-colors">
                  orders@mrbigguybook.com
                </a>
              </li>
              <li className="text-bone/50 pt-2">Dania Beach, Florida</li>
            </ul>
          </div>
        </div>

        <div className="rule-gold mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-bone/50">
          <div>
            © {new Date().getFullYear()} Slade Enterprise Group · 1 Street Boyz Publications ·
            ISBN 979-8-218-01234-5
          </div>
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link>
            <Link to="/press" className="hover:text-gold transition-colors">Press Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Crown({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3 7l4 4 5-7 5 7 4-4-2 12H5L3 7zm2.5 14h13v2h-13v-2z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
