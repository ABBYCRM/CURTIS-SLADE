// Screenshot the live deployed site
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

const pages = [
  { path: '/', name: 'live-01-home' },
  { path: '/book', name: 'live-02-book' },
  { path: '/about', name: 'live-03-about' },
  { path: '/order', name: 'live-04-order' },
];

for (const p of pages) {
  console.log(`→ ${p.path}`);
  try {
    await page.goto(`${URL}${p.path}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `/workspace/curtis-slade/screenshots/${p.name}.png`, fullPage: false });
    console.log(`  saved ${p.name}.png`);
  } catch (e) {
    console.log(`  ERR: ${e.message}`);
  }
}

await browser.close();
