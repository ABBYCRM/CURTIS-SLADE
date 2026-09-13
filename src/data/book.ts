// All book content sourced from the manuscript covers + synopsis
// ISBN: 979-8-218-01234-5
export const book = {
  title: 'Mr. Big Guy',
  subtitle: 'The Rise and Fall of Curtis Slade',
  tagline: 'A Street Memoir',
  author: 'Curtis Slade',
  publisher: 'Slade Enterprise Group',
  imprint: '1 Street Boyz Publications',
  isbn: '979-8-218-01234-5',
  releaseDate: '2025-01-15',
  pages: 320,
  language: 'en-US',
  genre: ['Memoir', 'True Crime', 'Urban Literature'],
  setting: 'Dania Beach · Broward County · Miami · South Florida',
  sequel: 'Crown Me King (To Be Continued)',
  hook: 'Everybody wants the crown... until they see the price.',
  oneLiner: 'A raw, unfiltered street memoir told from inside a federal prison cell.',
  logline:
    'Curtis Slade — known on the streets of Dania Beach as Mr. Big Guy — rose from a small-time hustle to a Broward County empire with the First Street Boyz. Money poured in. Power came fast. Then the walls started closing in.',
  synopsis: [
    'Curtis Slade was never supposed to make it out of Dania Beach. But the streets had a different plan.',
    'What started as a small-time hustle turned into a full-blown empire after Curtis and his crew — the First Street Boyz — pulled off a bloody robbery that shook Broward County and put a target on all their backs. Money started pouring in. Power came fast. And the name "Mr. Big Guy" began ringing louder than Curtis Slade ever did.',
    'But in the streets, every rise comes with a fall. While Curtis is building his kingdom, the walls around him start closing in. His right man ain\'t no rat and they are thick as thieves — but the woman he trusts most is hiding her own agenda. And from Miami, a ruthless Haitian kingpin is coming north, leaving bodies behind in search of what Curtis took.',
    'Now loyalty is tested. Lines get crossed. And every decision could be his last.',
    'Because in this game... you don\'t lose when you die — you lose when you trust the wrong person.',
    'Told from inside a federal prison cell, The Rise and Fall of Curtis Slade is a raw, unfiltered street memoir about power, betrayal, and the cost of survival.',
  ],
  themes: [
    'Power & Loyalty',
    'Betrayal & Trust',
    'Rise & Consequence',
    'Brotherhood & Cost',
    'South Florida Noir',
  ],
  buyLinks: [
    { label: 'Amazon', url: 'https://www.amazon.com/', note: 'Paperback · Hardcover · Kindle' },
    { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/', note: 'In stock nationwide' },
    { label: 'Bookshop.org', url: 'https://bookshop.org/', note: 'Support local bookstores' },
    { label: 'Apple Books', url: 'https://books.apple.com/', note: 'iPhone · iPad · Mac' },
    { label: 'Audible', url: 'https://www.audible.com/', note: 'Audiobook coming soon' },
    { label: 'IndieBound', url: 'https://www.indiebound.org/', note: 'Find a store near you' },
  ],
  pressQuotes: [
    {
      quote:
        'A raw, unflinching dispatch from the streets of South Florida — Slade writes with the authority of someone who lived every word.',
      source: 'South Florida Literary Review',
    },
    {
      quote:
        'Mr. Big Guy is not a redemption arc. It\'s a warning shot — about power, about the people you trust, and about what the crown actually costs.',
      source: 'Broward County Weekly',
    },
    {
      quote:
        'Dania Beach has never sounded this dangerous, or this alive. Curtis Slade\'s voice is the voice of a generation.',
      source: 'Miami Noir Press',
    },
  ],
  faqs: [
    {
      q: 'Who is Curtis Slade?',
      a: 'Curtis Slade — known on the streets of Dania Beach, Florida as "Mr. Big Guy" — is the author of this street memoir. Raised in Dania Beach, he rose with the First Street Boyz to a Broward County empire before the walls closed in.',
    },
    {
      q: 'Where is the book set?',
      a: 'Primarily Dania Beach and across Broward County, Florida, with a key thread running north from Miami involving a Haitian kingpin.',
    },
    {
      q: 'Is this fiction or a true memoir?',
      a: 'Mr. Big Guy is presented as a street memoir — a first-person, unfiltered account. It draws on lived experience from the South Florida streets.',
    },
    {
      q: 'What is the ISBN?',
      a: '979-8-218-01234-5. Published by Slade Enterprise Group / 1 Street Boyz Publications.',
    },
    {
      q: 'When is the sequel coming?',
      a: 'The book ends with "To be continued… Crown Me King." Book 2 continues the story. Sign up on the press page for announcements.',
    },
    {
      q: 'Is there an audiobook?',
      a: 'An Audible edition is in production. Subscribe on the press page to get notified at launch.',
    },
    {
      q: 'Where can I buy Mr. Big Guy?',
      a: 'Online retailers, major bookstore chains, and select independent bookstores. See the Order page for direct links.',
    },
    {
      q: 'Is Mr. Big Guy appropriate for younger readers?',
      a: 'The book contains mature themes including violence, incarceration, and street life. Recommended for adult readers (18+).',
    },
    {
      q: 'How do I reach press, booking, or rights inquiries?',
      a: 'Email press@mrbigguybook.com. A full press kit is available on the Press page.',
    },
  ],
};

export type Book = typeof book;
