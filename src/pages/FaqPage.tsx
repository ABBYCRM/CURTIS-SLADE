import { useState } from 'react';
import { book } from '../data/book';

export function FaqPage() {
  return (
    <>
      <Hero />
      <FaqList />
      <StillHaveQuestions />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-16 pb-12">
      <div className="container-x text-center max-w-3xl">
        <div className="eyebrow mb-6">Frequently Asked</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 leading-[0.95]">
          <span className="text-gold-gradient">FAQ</span>
        </h1>
        <div className="rule-gold" />
      </div>
    </section>
  );
}

function FaqList() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-16">
      <div className="container-x max-w-3xl">
        <div className="space-y-3">
          {book.faqs.map((f, i) => (
            <div key={f.q} className="card-noir overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gold/5 transition-colors"
                aria-expanded={openIdx === i}
              >
                <span className="font-display text-lg sm:text-xl text-bone">{f.q}</span>
                <span
                  className={`text-gold text-2xl transition-transform flex-shrink-0 ${
                    openIdx === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-bone/80 leading-relaxed border-t border-gold/10">
                  <p className="pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StillHaveQuestions() {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="max-w-2xl mx-auto card-noir p-10 lg:p-14 text-center">
          <h2 className="font-display text-3xl lg:text-4xl mb-4">
            Still have a <span className="text-gold-gradient">question</span>?
          </h2>
          <p className="text-bone/70 mb-8 leading-relaxed">
            Press, booking, rights, or just curious — we read every message.
          </p>
          <a href="mailto:press@mrbigguybook.com" className="btn-gold">
            Email the Team
          </a>
        </div>
      </div>
    </section>
  );
}
