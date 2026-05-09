const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.join(__dirname, '../../frontend/public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function serveStatic(req, res) {
  let filePath = path.join(FRONTEND_DIR, req.url === '/' ? '/index.html' : req.url);

  // SPA fallback - serve index.html for routes without file extensions
  const ext = path.extname(filePath);
  if (!ext) {
    filePath = path.join(FRONTEND_DIR, 'index.html');
  }

  const mimeType = MIME_TYPES[path.extname(filePath)] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback
      fs.readFile(path.join(FRONTEND_DIR, 'index.html'), (err2, html) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache',
        });
        res.end(html);
      });
      return;
    }

    // Cache static assets aggressively (1 year for images/css/js)
    const cacheControl = ext === '.html'
      ? 'no-cache'
      : 'public, max-age=31536000, immutable';

    res.writeHead(200, {
      'Content-Type': mimeType,
      'Cache-Control': cacheControl,
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(data);
  });
}

module.exports = { serveStatic };
