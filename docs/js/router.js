// Base path for GitHub Pages
const BASE_PATH = '/kelanaharamain';
// Lightweight SPA Router
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener('popstate', () => this.navigate(window.location.pathname, false));
  }

  add(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  navigate(path, pushState = true) {
    if (pushState) {
      window.history.pushState(null, '', BASE_PATH + path);
    }
    this.currentRoute = path;
    const handler = this.routes[path] || this.routes['/'];
    if (handler) {
      handler();
    }
    window.scrollTo(0, 0);
    this.updateActiveLinks();
  }

  updateActiveLinks() {
    document.querySelectorAll('[data-link]').forEach(link => {
      const href = link.getAttribute('href'); link.classList.toggle('active', href === this.currentRoute || href === BASE_PATH + this.currentRoute);
    });
  }

  init() {
    // Intercept link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        const path = link.getAttribute('href');
        this.navigate(path);
      }
    });

    // Navigate to current URL
    const fullPath = window.location.pathname;
    const path = fullPath.startsWith(BASE_PATH) ? fullPath.slice(BASE_PATH.length) || '/' : fullPath;
    this.navigate(path, false);
  }
}

window.AppRouter = new Router();
