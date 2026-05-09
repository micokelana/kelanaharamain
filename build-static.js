/**
 * Build script for GitHub Pages static deployment
 * Generates static JSON files from database and prepares the dist folder
 */
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'docs');
const FRONTEND_DIR = path.join(__dirname, 'frontend/public');

// Ensure database is seeded
const { Database } = require('./backend/database/sqlite');
const { seedDatabase } = require('./backend/database/seed');

// Check if data exists, if not seed it
const db = Database.getInstance();
if (db.count('packages') === 0) {
  seedDatabase();
}

// Generate static API data
const { getPackages, getPackageById } = require('./backend/src/controllers/packages');
const { getTestimonials } = require('./backend/src/controllers/testimonials');
const { getGallery } = require('./backend/src/controllers/gallery');
const { getAbout } = require('./backend/src/controllers/about');
const { getStats } = require('./backend/src/controllers/stats');

async function build() {
  console.log('🔨 Building static site for GitHub Pages...\n');

  // Clean dist
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // Copy frontend files
  copyDir(FRONTEND_DIR, DIST_DIR);
  console.log('✅ Copied frontend files');

  // Generate static API JSON
  const apiDir = path.join(DIST_DIR, 'api');
  fs.mkdirSync(apiDir, { recursive: true });

  const allPackages = await getPackages('all');
  const umrohPackages = await getPackages('umroh');
  const hajiPackages = await getPackages('haji');
  const testimonials = await getTestimonials();
  const gallery = await getGallery();
  const about = await getAbout();
  const stats = await getStats();

  // Write static JSON files
  writeJSON(path.join(apiDir, 'packages.json'), { success: true, data: allPackages });
  writeJSON(path.join(apiDir, 'packages-umroh.json'), { success: true, data: umrohPackages });
  writeJSON(path.join(apiDir, 'packages-haji.json'), { success: true, data: hajiPackages });
  writeJSON(path.join(apiDir, 'testimonials.json'), { success: true, data: testimonials });
  writeJSON(path.join(apiDir, 'gallery.json'), { success: true, data: gallery });
  writeJSON(path.join(apiDir, 'about.json'), { success: true, data: about });
  writeJSON(path.join(apiDir, 'stats.json'), { success: true, data: stats });

  console.log('✅ Generated static API JSON files');

  // Write modified api.js that reads from static JSON
  const apiJsPath = path.join(DIST_DIR, 'js', 'api.js');
  fs.writeFileSync(apiJsPath, generateStaticApiJs());
  console.log('✅ Generated static API client');

  // Create 404.html for SPA routing on GitHub Pages
  const indexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), indexHtml);
  console.log('✅ Created 404.html for SPA routing');

  // Create .nojekyll file (disable Jekyll processing)
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');
  console.log('✅ Created .nojekyll');

  console.log('\n🎉 Build complete! Files are in /docs folder.');
  console.log('📌 Enable GitHub Pages from Settings > Pages > Source: Deploy from branch > /docs');
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data), 'utf-8');
}

function generateStaticApiJs() {
  return `// Static API Client for GitHub Pages (reads from pre-built JSON)
const API = {
  cache: new Map(),
  basePath: '',

  init() {
    // Detect base path for GitHub Pages subdirectory
    const meta = document.querySelector('meta[name="api-base"]');
    this.basePath = meta ? meta.content : '';
  },

  async get(endpoint) {
    const cached = this.cache.get(endpoint);
    if (cached) return cached;

    // Map API endpoints to static JSON files
    const fileMap = {
      '/packages?type=all': '/api/packages.json',
      '/packages?type=umroh': '/api/packages-umroh.json',
      '/packages': '/api/packages.json',
      '/packages?type=haji': '/api/packages-haji.json',
      '/testimonials': '/api/testimonials.json',
      '/gallery': '/api/gallery.json',
      '/about': '/api/about.json',
      '/stats': '/api/stats.json',
    };

    const file = fileMap[endpoint] || fileMap[endpoint.split('?')[0]];
    if (!file) {
      console.warn('No static data for:', endpoint);
      return null;
    }

    try {
      const res = await fetch(this.basePath + file);
      const json = await res.json();
      if (json.success) {
        this.cache.set(endpoint, json.data);
        return json.data;
      }
      return null;
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  },

  async post(endpoint, body) {
    // For static site, redirect contact form to WhatsApp
    if (endpoint === '/contact') {
      const msg = encodeURIComponent(
        'Assalamualaikum, saya ' + body.name + '.\\n' +
        'Email: ' + body.email + '\\n' +
        'Subjek: ' + (body.subject || 'Pertanyaan') + '\\n' +
        'Pesan: ' + body.message
      );
      window.open('https://wa.me/6281234567890?text=' + msg, '_blank');
      return { success: true, data: { message: 'Pesan dikirim via WhatsApp' } };
    }
    return { success: false, message: 'Not available in static mode' };
  }
};

API.init();
window.API = API;
`;
}

build().catch(console.error);
