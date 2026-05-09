// Reusable UI Components

const Components = {
  navbar() {
    return `
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a href="/" data-link class="navbar-brand">
          <div class="navbar-logo">KH</div>
          <div class="navbar-title">Kelana <span>Haramain</span></div>
        </a>
        <div class="nav-links" id="navLinks">
          <a href="/" data-link>Beranda</a>
          <a href="/paket-umroh" data-link>Paket Umroh</a>
          <a href="/paket-haji" data-link>Paket Haji</a>
          <a href="/tentang" data-link>Tentang Kami</a>
          <a href="/galeri" data-link>Galeri</a>
          <a href="/kontak" data-link>Kontak</a>
          <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-wa nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.03L.789 23.234l4.39-1.472A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.17 0-4.207-.58-5.963-1.59l-.427-.254-2.604.873.87-2.534-.278-.442A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
            Hubungi Kami
          </a>
        </div>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <a href="/" data-link>Beranda</a>
        <a href="/paket-umroh" data-link>Paket Umroh</a>
        <a href="/paket-haji" data-link>Paket Haji</a>
        <a href="/tentang" data-link>Tentang Kami</a>
        <a href="/galeri" data-link>Galeri</a>
        <a href="/kontak" data-link>Kontak</a>
        <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-wa" style="margin-top:1rem;text-align:center;">Hubungi via WhatsApp</a>
      </div>
    </nav>`;
  },

  footer() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Kelana <span>Haramain</span></h3>
            <p>Biro perjalanan ibadah umroh dan haji khusus terpercaya. Izin resmi Kemenag RI. Melayani dengan sepenuh hati sejak 2014.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Layanan</h4>
            <a href="/paket-umroh" data-link>Paket Umroh</a>
            <a href="/paket-haji" data-link>Paket Haji Khusus</a>
            <a href="/paket-umroh" data-link>Umroh Plus Wisata</a>
            <a href="/paket-umroh" data-link>Umroh Ramadhan</a>
          </div>
          <div class="footer-col">
            <h4>Perusahaan</h4>
            <a href="/tentang" data-link>Tentang Kami</a>
            <a href="/galeri" data-link>Galeri</a>
            <a href="/kontak" data-link>Kontak</a>
            <a href="#">Syarat & Ketentuan</a>
          </div>
          <div class="footer-col">
            <h4>Kontak</h4>
            <a href="tel:+6281234567890">+62 812-3456-7890</a>
            <a href="mailto:info@kelanaharamain.id">info@kelanaharamain.id</a>
            <a href="#">Jakarta Selatan, DKI Jakarta</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Kelana Haramain. All rights reserved. | Izin PPIU/123/2020 | PIHK/456/2021</p>
        </div>
      </div>
    </footer>`;
  },

  waFloat() {
    return `
    <a href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20paket%20umroh/haji" target="_blank" class="wa-float" aria-label="Chat WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.03L.789 23.234l4.39-1.472A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.17 0-4.207-.58-5.963-1.59l-.427-.254-2.604.873.87-2.534-.278-.442A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
    </a>`;
  },

  packageCard(pkg) {
    const includes = (pkg.includes || []).slice(0, 5);
    const price = new Intl.NumberFormat('id-ID').format(pkg.price);
    return `
    <div class="package-card ${pkg.is_featured ? 'featured' : ''} fade-in">
      <div class="package-image">
        <span class="package-image-icon">🕋</span>
        <span class="package-type-badge">${pkg.type === 'umroh' ? 'Umroh' : 'Haji'} ${pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}</span>
      </div>
      <div class="package-body">
        <h3>${pkg.name}</h3>
        <div class="package-meta">
          <span>📅 ${pkg.duration}</span>
          <span>✈️ ${pkg.airline}</span>
          <span>💺 Sisa ${pkg.seats_available} seat</span>
        </div>
        <div class="package-price">Rp ${price}</div>
        <div class="package-price-note">per jamaah (quad sharing)</div>
        <ul class="package-includes">
          ${includes.map(item => `<li>${item}</li>`).join('')}
          ${pkg.includes && pkg.includes.length > 5 ? `<li>dan ${pkg.includes.length - 5} fasilitas lainnya...</li>` : ''}
        </ul>
        <div class="package-actions">
          <a href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}" target="_blank" class="btn btn-wa">Pesan Sekarang</a>
          <a href="https://wa.me/6281234567890?text=Info%20lengkap%20paket%20${encodeURIComponent(pkg.name)}" target="_blank" class="btn btn-outline">Detail</a>
        </div>
      </div>
    </div>`;
  },

  testimonialCard(t) {
    const initial = t.name.charAt(0).toUpperCase();
    const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    return `
    <div class="testimonial-card fade-in">
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-text">"${t.message}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${initial}</div>
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <p>${t.location} • ${t.package_name}</p>
        </div>
      </div>
    </div>`;
  },

  pageHeader(title, subtitle) {
    return `
    <section class="page-header">
      <div class="container">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
    </section>`;
  }
};

window.Components = Components;
