import { Link } from 'react-router-dom';
import { book } from '../data/book';

export function BookPage() {
  return (
    <>
      <Header />
      <Cover />
      <Synopsis />
      <Details />
      <Chapters />
      <SequelTeaser />
    </>
  );
}

function Header() {
  return (
    <section className="relative pt-20 pb-16">
      <div className="container-x text-center max-w-3xl">
        <div className="eyebrow mb-6">Book 1</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 leading-[0.95]">
          <span className="text-gold-gradient">MR. BIG GUY</span>
        </h1>
        <p className="font-display text-2xl lg:text-3xl text-bone/90 italic font-light mb-6">
          {book.subtitle}
        </p>
        <div className="rule-gold mb-6" />
        <p className="text-gold/90 italic text-xl">"{book.hook}"</p>
      </div>
    </section>
  );
}

function Cover() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="space-y-6">
              <div className="frame-gold">
                <img
                  src="/images/book-cover-flat.png"
                  alt="Mr. Big Guy — front cover"
                  className="w-full h-auto rounded-sm"
                />
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="frame-gold">
                <img
                  src="/images/book-cover-back.png"
                  alt="Mr. Big Guy — back cover"
                  className="w-full h-auto rounded-sm"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card-noir p-8 lg:p-10">
              <div className="eyebrow mb-4">Quick Facts</div>
              <dl className="grid grid-cols-2 gap-6 text-sm">
                <Fact label="Author" value={book.author} />
                <Fact label="Publisher" value={book.publisher} />
                <Fact label="Imprint" value={book.imprint} />
                <Fact label="ISBN" value={book.isbn} />
                <Fact label="Release" value={book.releaseDate} />
                <Fact label="Pages" value={`${book.pages}`} />
                <Fact label="Language" value={book.language} />
                <Fact label="Genre" value={book.genre.join(' · ')} />
              </dl>
              <div className="rule-gold my-8" />
              <div className="eyebrow mb-3">Setting</div>
              <p className="text-bone/80">{book.setting}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/order" className="btn-gold text-sm flex-1 justify-center">
                  Order Now
                </Link>
                <Link to="/press" className="btn-ghost-gold text-sm flex-1 justify-center">
                  Press Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-bone/50 mb-1">{label}</dt>
      <dd className="text-bone font-medium">{value}</dd>
    </div>
  );
}

function Synopsis() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x max-w-4xl">
        <div className="text-center mb-12">
          <div className="eyebrow mb-6">The Story</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6">Synopsis</h2>
          <div className="rule-gold" />
        </div>
        <div className="space-y-6 text-bone/85 text-lg leading-relaxed">
          {book.synopsis.map((p, i) => (
            <p key={i} className={i === 0 ? 'drop-cap' : ''}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Details() {
  const items = [
    {
      title: 'Power',
      body:
        'Curtis and the First Street Boyz build a Broward County empire from a single, bloody robbery. Money, loyalty, and a nickname that takes on a life of its own.',
    },
    {
      title: 'Betrayal',
      body:
        'His right man ain\'t no rat. But the woman he trusts most is hiding her own agenda — and the wrong person at the wrong moment can end everything.',
    },
    {
      title: 'The Haitian Kingpin',
      body:
        'From Miami, a ruthless figure comes north, leaving bodies behind in search of what Curtis took. Loyalty gets tested across county lines.',
    },
    {
      title: 'The Cost',
      body:
        'Told from inside a federal prison cell, this is the unfiltered account of what the crown actually costs — and why you don\'t lose when you die.',
    },
  ];
  return (
    <section className="py-20 lg:py-28 bg-black/40 border-y border-gold/10">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-6">Inside</div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6">
            What happens between the <span className="text-gold-gradient">first page</span> and the last.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="card-noir p-8">
              <div className="flex items-start gap-4">
                <div className="font-display text-gold-gradient text-4xl font-black leading-none">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-3 text-bone">{it.title}</h3>
                  <p className="text-bone/75 leading-relaxed">{it.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chapters() {
  // Sample chapter titles — typical memoir structure, evocative of the genre
  const chapters = [
    'Greg Dees and the Streets',
    'School Wasn\'t for Me',
    'The First Street Boyz',
    'The Bloody Robbery',
    'The Crown Finds a Name',
    'Money Pours In',
    'The Woman, the Agenda',
    'The Haitian Comes North',
    'Lines Get Crossed',
    'Every Decision Could Be His Last',
    'The Federal Cell',
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center mb-12">
          <div className="eyebrow mb-6">Inside the Book</div>
          <h2 className="font-display text-4xl lg:text-5xl">Chapter Arc</h2>
        </div>
        <ol className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {chapters.map((c, i) => (
            <li
              key={c}
              className="card-noir p-5 flex items-center gap-4 hover:border-gold/40 transition-colors"
            >
              <span className="font-display text-2xl text-gold-gradient font-black w-10 text-center">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-bone/90">{c}</span>
            </li>
          ))}
        </ol>
        <p className="text-center text-bone/50 text-sm mt-8 italic">
          Chapter titles representative of Book 1's narrative arc.
        </p>
      </div>
    </section>
  );
}

function SequelTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-ink via-black to-ink">
          <img
            src="/images/dania-street.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="relative px-8 py-16 lg:p-20 text-center">
            <div className="eyebrow mb-6">To Be Continued</div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6">
              <span className="text-gold-gradient italic">CROWN ME KING.</span>
            </h2>
            <p className="text-bone/80 text-lg max-w-2xl mx-auto mb-10">
              The story doesn't end here. Book 2 picks up where Book 1 leaves off — same streets, higher stakes.
            </p>
            <Link to="/press" className="btn-gold">
              Get Book 2 Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
