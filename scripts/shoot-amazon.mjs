import pkg from '/usr/local/lib/node_modules/playwright/index.js';
const { chromium } = pkg;

const URL = 'https://curtis-slade-slsuc.ondigitalocean.app';

const browser = await chromium.launch({
  executablePath: '/root/.cache/ms-playwright/chromium-1243/chrome-linux/chrome',
  args: ['--no-sandbox', '--ignore-certificate-errors'],
});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  ignoreHTTPSErrors: true,
});
const page = await ctx.newPage();

// Listen for clicks to verify Amazon CTA
const ctaClicks = [];
page.on('click', (req) => ctaClicks.push(req.url?.()));

const targets = [
  { path: '/', name: 'amazon-01-home-hero' },
  { path: '/book', name: 'amazon-02-book' },
  { path: '/order', name: 'amazon-03-order' },
];

for (const t of targets) {
  await page.goto(`${URL}${t.path}?_=${Date.now()}`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  // Get all Amazon hrefs on the page
  const amazonLinks = await page.$$eval('a[href*="a.co/d/0eJcdXta"]', (els) => els.map((e) => ({
    text: e.textContent?.trim().slice(0, 60),
    href: e.getAttribute('href'),
    target: e.getAttribute('target'),
  })));
  console.log(`\n${t.path} (${t.name}):`);
  console.log(`  Amazon links found: ${amazonLinks.length}`);
  amazonLinks.forEach((l, i) => console.log(`   [${i}] "${l.text}" -> ${l.href} target=${l.target}`));
  await page.screenshot({ path: `/workspace/curtis-slade/screenshots/${t.name}.png` });
}

await browser.close();
