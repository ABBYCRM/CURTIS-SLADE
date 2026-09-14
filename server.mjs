import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist');
const types = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.ico': 'image/x-icon', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8' };
const safePath = (pathname) => normalize(pathname).replace(/^(\.\.[\/\\])+/, '').replace(/^[/\\]+/, '');
createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const requested = safePath(pathname);
  const candidates = requested && !requested.endsWith('/') ? [requested, join(requested, 'index.html')] : [join(requested, 'index.html')];
  let file;
  for (const candidate of candidates) { try { const full = join(root, candidate); if ((await stat(full)).isFile()) { file = full; break; } } catch {} }
  if (!file) file = join(root, 'index.html');
  try { const body = await readFile(file); res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': file.endsWith('.html') ? 'no-cache' : 'public, max-age=31536000, immutable' }); res.end(body); } catch { res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Site temporarily unavailable.'); }
}).listen(process.env.PORT || 8080, '0.0.0.0');
