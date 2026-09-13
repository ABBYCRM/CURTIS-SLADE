export function AboutPage() {
  return (
    <>
      <Hero />
      <Bio />
      <OriginStory />
      <SladeEnterprise />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-portrait.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      </div>
      <div className="container-x relative z-10 text-center max-w-3xl">
        <div className="eyebrow mb-6">The Author</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 leading-[0.95]">
          <span className="text-gold-gradient">CURTIS SLADE</span>
        </h1>
        <p className="font-display text-2xl lg:text-3xl text-bone/90 italic font-light mb-6">
          A.K.A. Mr. Big Guy
        </p>
        <div className="rule-gold" />
      </div>
    </section>
  );
}

function Bio() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="frame-gold sticky top-24">
              <img
                src="/images/hero-portrait.jpg"
                alt="Curtis Slade — author portrait"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Biography</div>
            <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
              From the streets of <span className="text-gold-gradient">Dania Beach</span> to a Broward County legend.
            </h2>
            <div className="space-y-6 text-bone/85 text-lg leading-relaxed">
              <p className="drop-cap">
                Curtis Slade — known on the streets as Mr. Big Guy — was raised in Dania Beach, Florida.
                At an early age, a deep conversation with his uncle, Greg Dees, solidified his future as
                a larger-than-life figure on the streets of South Florida.
              </p>
              <p>
                "School isn't for you," Uncle Dees explained. "Your future is out there in the streets.
                That's where you will become a bonafide gangster. That's where you'll earn your crown."
              </p>
              <p>
                Instead of becoming a bonafide gangster, Curtis Slade became what the streets of Dania
                Beach, Florida nicknamed him: <span className="text-gold italic">Mr. Big Guy</span>.
              </p>
              <p>
                The Rise and Fall of Curtis Slade is his unfiltered account of that journey — the rise,
                the walls, and the cost. Told from inside a federal prison cell, it's a street memoir
                about power, betrayal, and survival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OriginStory() {
  return (
    <section className="py-20 lg:py-28 bg-black/40 border-y border-gold/10">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-6">Origin</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-10 leading-tight">
            "Buckle up and hold on tight as Mr. Big Guy takes you on a journey on which few have ever returned."
          </h2>
          <div className="rule-gold mb-10" />
          <blockquote className="text-bone/80 text-lg italic leading-relaxed">
            In its wake, if you're not careful, you just might learn something along the way.
            That something is what just might keep you alive.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function SladeEnterprise() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-6">The Imprint</div>
            <h2 className="font-display text-4xl lg:text-5xl mb-6">
              <span className="text-gold-gradient">Slade Enterprise Group</span>
            </h2>
            <p className="text-bone/80 text-lg leading-relaxed mb-6">
              Slade Enterprise Group is the publishing home of Mr. Big Guy and forthcoming works in
              the South Florida street-noir tradition. Its imprint, <em>1 Street Boyz Publications</em>,
              carries forward the legacy of the First Street Boyz — a name that defines an era.
            </p>
            <p className="text-bone/80 text-lg leading-relaxed">
              The mission is straightforward: tell the story that needs telling, in the voice it was
              lived in. No smoothing, no softening. Just the truth, and the cost.
            </p>
          </div>
          <div className="card-noir p-10 lg:p-12 text-center">
            <CrownLarge />
            <div className="font-display text-3xl text-gold-gradient mt-6 tracking-widest">
              SLADE ENTERPRISE GROUP
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-bone/50 mt-2">
              1 Street Boyz Publications
            </div>
            <div className="rule-gold my-8" />
            <div className="text-bone/70">
              Dania Beach · Broward County · South Florida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrownLarge() {
  return (
    <svg viewBox="0 0 64 64" className="w-20 h-20 mx-auto text-gold" fill="currentColor">
      <path d="M6 22l10 10 14-18 14 18 10-10-5 32H11L6 22zm4 38h44v4H10v-4z" />
    </svg>
  );
}
