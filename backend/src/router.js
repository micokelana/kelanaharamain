const { getPackages, getPackageById } = require('./controllers/packages');
const { getTestimonials } = require('./controllers/testimonials');
const { getGallery } = require('./controllers/gallery');
const { submitContact } = require('./controllers/contact');
const { getAbout } = require('./controllers/about');
const { getStats } = require('./controllers/stats');

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

async function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method;

  try {
    // Packages
    if (path === '/api/packages' && method === 'GET') {
      const type = url.searchParams.get('type'); // umroh, haji, all
      const data = await getPackages(type);
      return sendJSON(res, 200, { success: true, data });
    }

    if (path.match(/^\/api\/packages\/\d+$/) && method === 'GET') {
      const id = parseInt(path.split('/').pop());
      const data = await getPackageById(id);
      if (!data) return sendJSON(res, 404, { success: false, message: 'Package not found' });
      return sendJSON(res, 200, { success: true, data });
    }

    // Testimonials
    if (path === '/api/testimonials' && method === 'GET') {
      const data = await getTestimonials();
      return sendJSON(res, 200, { success: true, data });
    }

    // Gallery
    if (path === '/api/gallery' && method === 'GET') {
      const data = await getGallery();
      return sendJSON(res, 200, { success: true, data });
    }

    // Contact form
    if (path === '/api/contact' && method === 'POST') {
      const body = await parseBody(req);
      const data = await submitContact(body);
      return sendJSON(res, 201, { success: true, data });
    }

    // About
    if (path === '/api/about' && method === 'GET') {
      const data = await getAbout();
      return sendJSON(res, 200, { success: true, data });
    }

    // Stats
    if (path === '/api/stats' && method === 'GET') {
      const data = await getStats();
      return sendJSON(res, 200, { success: true, data });
    }

    // 404 for unknown API routes
    sendJSON(res, 404, { success: false, message: 'API route not found' });
  } catch (error) {
    console.error('Router error:', error);
    sendJSON(res, 500, { success: false, message: 'Internal server error' });
  }
}

module.exports = { router };
