// Main Application Entry Point
// Loads all modules and initializes the SPA

(function() {
  'use strict';

  // Load scripts in order
  const scripts = ['router.js', 'api.js', 'components.js', 'pages.js'];
  let loaded = 0;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/kelanaharamain/js/' + src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  async function init() {
    // Load all scripts sequentially
    for (const src of scripts) {
      await loadScript(src);
    }

    // Setup routes
    AppRouter
      .add('/', () => Pages.home())
      .add('/paket-umroh', () => Pages.paketUmroh())
      .add('/paket-haji', () => Pages.paketHaji())
      .add('/tentang', () => Pages.tentang())
      .add('/galeri', () => Pages.galeri())
      .add('/kontak', () => Pages.kontak());

    // Initialize router
    AppRouter.init();
  }

  // Start app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
