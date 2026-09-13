// Screenshot every page of the Curtis Slade site using Playwright
import pkg from '/usr/local/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
import path from 'node:path';
import { mkdirSync } from 'node:fs';

const OUT = '/workspace/curtis-slade/screenshots';
mkdirSync(OUT, { recursive: true });

const pages = [
  { url: '/', name: '01-home' },
  { url: '/book', name: '02-book' },
  { url: '/about', name: '03-about' },
  { url: '/order', name: '04-order' },
  { url: '/press', name: '05-press' },
  { url: '/faq', name: '06-faq' },
];

const browser = await chromium.launch({
  executablePath: '/root/.cache/ms-playwright/chromium-1243/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

for (const p of pages) {
  console.log(`→ ${p.url}`);
  await page.goto(`http://127.0.0.1:4173${p.url}`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(800); // font settle
  await page.screenshot({
    path: path.join(OUT, `${p.name}.png`),
    fullPage: true,
  });
  console.log(`  saved ${p.name}.png`);
}

// Mobile pass
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
});
const m = await mobile.newPage();
await m.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await m.waitForTimeout(800);
await m.screenshot({ path: path.join(OUT, '07-home-mobile.png'), fullPage: true });
console.log('  saved 07-home-mobile.png');

await browser.close();
console.log('done');
