const http = require('http');
const { router } = require('./router');
const { serveStatic } = require('./static');
const { initDatabase } = require('../database/init');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API routes
  if (req.url.startsWith('/api/')) {
    return router(req, res);
  }

  // Serve static files (frontend)
  return serveStatic(req, res);
});

// Initialize database and start server
async function start() {
  try {
    await initDatabase();
    server.listen(PORT, HOST, () => {
      console.log(`🚀 Kelana Haramain server running at http://${HOST}:${PORT}`);
      console.log(`📁 Serving frontend from /projects/sandbox/kelanaharamain/frontend/public`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();
