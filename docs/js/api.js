// Static API Client for GitHub Pages (reads from pre-built JSON)
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
        'Assalamualaikum, saya ' + body.name + '.\n' +
        'Email: ' + body.email + '\n' +
        'Subjek: ' + (body.subject || 'Pertanyaan') + '\n' +
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
