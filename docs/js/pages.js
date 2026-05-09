// Page Renderers
const Pages = {
  async home() {
    const app = document.getElementById('app');
    app.innerHTML = Components.navbar() + `
    <main>
      <!-- HERO -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Terpercaya Sejak 2014 • Izin Resmi Kemenag RI
            </div>
            <h1>Perjalanan Suci,<br><span class="gold">Pelayanan Istimewa</span></h1>
            <p>Wujudkan ibadah umroh & haji impian Anda bersama Kelana Haramain. Fasilitas terbaik, pembimbing berpengalaman, dan harga transparan.</p>
            <div class="hero-buttons">
              <a href="/paket-umroh" data-link class="btn btn-gold">Lihat Paket Umroh</a>
              <a href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20paket%20umroh" target="_blank" class="btn btn-wa">Konsultasi Gratis</a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-card">
              <h3 style="font-size:1.25rem;margin-bottom:0.5rem;">🕋 Mengapa Kelana Haramain?</h3>
              <p style="opacity:0.8;font-size:0.9rem;">Dipercaya 5000+ jamaah di seluruh Indonesia</p>
              <div class="hero-stats">
                <div class="stat-item"><div class="stat-number">5000+</div><div class="stat-label">Jamaah</div></div>
                <div class="stat-item"><div class="stat-number">10+</div><div class="stat-label">Tahun</div></div>
                <div class="stat-item"><div class="stat-number">98%</div><div class="stat-label">Puas</div></div>
                <div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">Keberangkatan</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="section features">
        <div class="container">
          <h2 class="section-title">Mengapa Memilih Kami?</h2>
          <p class="section-subtitle">Kelana Haramain berkomitmen memberikan pelayanan terbaik untuk setiap jamaah</p>
          <div class="features-grid">
            <div class="feature-card fade-in">
              <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg></div>
              <h3>Resmi & Terpercaya</h3>
              <p>Terdaftar resmi di Kemenag RI dengan izin PPIU dan PIHK. Amanah menjaga kepercayaan jamaah.</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div>
              <h3>Berpengalaman 10+ Tahun</h3>
              <p>Pengalaman lebih dari 10 tahun melayani ribuan jamaah dengan pelayanan konsisten terbaik.</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
              <h3>Hotel Dekat Haram</h3>
              <p>Hotel strategis dekat Masjidil Haram dan Masjid Nabawi. Akses mudah untuk beribadah.</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></div>
              <h3>Harga Transparan</h3>
              <p>Tidak ada biaya tersembunyi. Semua fasilitas jelas tertera dalam paket perjalanan.</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>
              <h3>Muthawwif Profesional</h3>
              <p>Pembimbing ibadah berpengalaman dan bersertifikat. Bimbingan sesuai sunnah Rasulullah SAW.</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg></div>
              <h3>Layanan 24/7</h3>
              <p>Tim customer service siap melayani Anda kapan saja. Konsultasi gratis sebelum keberangkatan.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED PACKAGES -->
      <section class="section" id="packages-section">
        <div class="container">
          <h2 class="section-title">Paket Populer</h2>
          <p class="section-subtitle">Pilih paket perjalanan ibadah yang sesuai dengan kebutuhan Anda</p>
          <div class="packages-grid" id="featuredPackages">
            <div class="package-card fade-in"><div class="package-body" style="padding:3rem;text-align:center;"><p>Memuat paket...</p></div></div>
          </div>
          <div style="text-align:center;margin-top:2.5rem;">
            <a href="/paket-umroh" data-link class="btn btn-primary">Lihat Semua Paket Umroh →</a>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section class="section testimonials">
        <div class="container">
          <h2 class="section-title">Testimoni Jamaah</h2>
          <p class="section-subtitle">Apa kata jamaah yang telah beribadah bersama Kelana Haramain</p>
          <div class="testimonials-grid" id="testimonialsList">
            <div class="testimonial-card"><p style="text-align:center;padding:2rem;">Memuat testimoni...</p></div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section cta-section">
        <div class="container">
          <h2>Siap Berangkat ke Tanah Suci?</h2>
          <p>Konsultasikan rencana perjalanan ibadah Anda dengan tim kami. Gratis dan tanpa kewajiban.</p>
          <div class="cta-buttons">
            <a href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20paket%20umroh/haji" target="_blank" class="btn btn-wa">Chat via WhatsApp</a>
            <a href="/kontak" data-link class="btn btn-gold">Hubungi Kami</a>
          </div>
        </div>
      </section>
    </main>
    ` + Components.footer() + Components.waFloat();

    // Load data
    this.loadHomeData();
    initPageEffects();
  },

  async loadHomeData() {
    const [packages, testimonials] = await Promise.all([
      API.get('/packages?type=all'),
      API.get('/testimonials')
    ]);

    if (packages) {
      const featured = packages.filter(p => p.is_featured).slice(0, 3);
      document.getElementById('featuredPackages').innerHTML = 
        featured.map(p => Components.packageCard(p)).join('');
    }

    if (testimonials) {
      document.getElementById('testimonialsList').innerHTML = 
        testimonials.slice(0, 3).map(t => Components.testimonialCard(t)).join('');
    }

    observeFadeIn();
  },

  async paketUmroh() {
    const app = document.getElementById('app');
    app.innerHTML = Components.navbar() + 
      Components.pageHeader('Paket Umroh', 'Pilihan paket umroh terbaik untuk perjalanan ibadah Anda') + `
    <main>
      <section class="section">
        <div class="container">
          <div class="packages-filter">
            <button class="filter-btn active" data-filter="all">Semua</button>
            <button class="filter-btn" data-filter="reguler">Reguler</button>
            <button class="filter-btn" data-filter="plus">Plus Wisata</button>
            <button class="filter-btn" data-filter="vip">VIP</button>
          </div>
          <div class="packages-grid" id="umrohPackages">
            <div class="package-card"><div class="package-body" style="padding:3rem;text-align:center;"><p>Memuat paket...</p></div></div>
          </div>
        </div>
      </section>
      <section class="section cta-section">
        <div class="container">
          <h2>Butuh Bantuan Memilih Paket?</h2>
          <p>Tim kami siap membantu Anda menemukan paket yang tepat sesuai budget dan kebutuhan.</p>
          <div class="cta-buttons">
            <a href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20butuh%20bantuan%20memilih%20paket%20umroh" target="_blank" class="btn btn-wa">Konsultasi Gratis</a>
          </div>
        </div>
      </section>
    </main>` + Components.footer() + Components.waFloat();

    const packages = await API.get('/packages?type=umroh');
    if (packages) {
      renderPackages(packages, 'umrohPackages');
      setupFilter(packages, 'umrohPackages');
    }
    initPageEffects();
  },

  async paketHaji() {
    const app = document.getElementById('app');
    app.innerHTML = Components.navbar() + 
      Components.pageHeader('Paket Haji Khusus', 'Program haji khusus dengan pelayanan prima dan fasilitas terbaik') + `
    <main>
      <section class="section">
        <div class="container">
          <div class="packages-grid" id="hajiPackages">
            <div class="package-card"><div class="package-body" style="padding:3rem;text-align:center;"><p>Memuat paket...</p></div></div>
          </div>
        </div>
      </section>
      <section class="section cta-section">
        <div class="container">
          <h2>Daftar Haji Khusus Sekarang</h2>
          <p>Keberangkatan lebih cepat tanpa antrian panjang. Hubungi kami untuk informasi selengkapnya.</p>
          <div class="cta-buttons">
            <a href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20info%20paket%20haji%20khusus" target="_blank" class="btn btn-wa">Daftar Sekarang</a>
          </div>
        </div>
      </section>
    </main>` + Components.footer() + Components.waFloat();

    const packages = await API.get('/packages?type=haji');
    if (packages) {
      renderPackages(packages, 'hajiPackages');
    }
    initPageEffects();
  },

  async tentang() {
    const about = await API.get('/about');
    const app = document.getElementById('app');
    app.innerHTML = Components.navbar() + 
      Components.pageHeader('Tentang Kami', 'Mengenal lebih dekat Kelana Haramain') + `
    <main>
      <section class="section">
        <div class="container">
          <div class="about-content">
            <div class="about-text slide-in-left">
              <h2>${about ? about.company_name : 'Kelana Haramain'}</h2>
              <p>${about ? about.description : ''}</p>
              <div class="about-licenses">
                <div class="license-badge">✓ ${about ? about.licenses.ppiu : 'PPIU Resmi'}</div>
                <div class="license-badge">✓ ${about ? about.licenses.pihk : 'PIHK Resmi'}</div>
                <div class="license-badge">✓ ${about ? about.licenses.kemenag : 'Kemenag RI'}</div>
              </div>
              <h3 style="margin-bottom:0.75rem;color:var(--dark);">Visi</h3>
              <p>${about ? about.vision : ''}</p>
              <h3 style="margin:1.5rem 0 0.75rem;color:var(--dark);">Misi</h3>
              <ul class="mission-list">
                ${about ? about.mission.map(m => `<li>${m}</li>`).join('') : ''}
              </ul>
            </div>
            <div class="about-visual slide-in-right">
              <div class="values-grid">
                ${about ? about.values.map(v => `
                  <div class="value-card">
                    <h4>${v.title}</h4>
                    <p>${v.description}</p>
                  </div>
                `).join('') : ''}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section cta-section">
        <div class="container">
          <h2>Mari Wujudkan Ibadah Impian Anda</h2>
          <p>Hubungi kami untuk konsultasi gratis tentang perjalanan ibadah Anda.</p>
          <div class="cta-buttons">
            <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-wa">Hubungi Kami</a>
            <a href="/kontak" data-link class="btn btn-gold">Form Kontak</a>
          </div>
        </div>
      </section>
    </main>` + Components.footer() + Components.waFloat();

    initPageEffects();
  },

  async galeri() {
    const app = document.getElementById('app');
    app.innerHTML = Components.navbar() + 
      Components.pageHeader('Galeri', 'Momen-momen berharga perjalanan jamaah Kelana Haramain') + `
    <main>
      <section class="section">
        <div class="container">
          <div class="packages-filter">
            <button class="filter-btn active" data-filter="all">Semua</button>
            <button class="filter-btn" data-filter="umroh">Umroh</button>
            <button class="filter-btn" data-filter="haji">Haji</button>
            <button class="filter-btn" data-filter="wisata">Wisata</button>
          </div>
          <div class="gallery-grid" id="galleryGrid">
            <div style="text-align:center;padding:3rem;">Memuat galeri...</div>
          </div>
        </div>
      </section>
    </main>` + Components.footer() + Components.waFloat();

    const gallery = await API.get('/gallery');
    if (gallery) {
      renderGallery(gallery);
      setupGalleryFilter(gallery);
    }
    initPageEffects();
  },

  async kontak() {
    const app = document.getElementById('app');
    app.innerHTML = Components.navbar() + 
      Components.pageHeader('Hubungi Kami', 'Kami siap membantu Anda merencanakan perjalanan ibadah') + `
    <main>
      <section class="section">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-info slide-in-left">
              <h2>Informasi Kontak</h2>
              <p>Jangan ragu untuk menghubungi kami. Tim kami siap melayani Anda 24/7.</p>
              <div class="contact-item">
                <div class="contact-icon"><svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></div>
                <div>
                  <h4>Telepon</h4>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
                <div>
                  <h4>Email</h4>
                  <p>info@kelanaharamain.id</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
                <div>
                  <h4>Alamat</h4>
                  <p>Jl. Raya Haramain No. 123,<br>Jakarta Selatan, DKI Jakarta 12345</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon"><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>Senin - Sabtu: 08.00 - 17.00 WIB<br>Minggu: By Appointment</p>
                </div>
              </div>
            </div>
            <div class="contact-form slide-in-right">
              <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:1.5rem;color:var(--dark);">Kirim Pesan</h3>
              <div class="form-success" id="formSuccess">✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</div>
              <form id="contactForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Nama Lengkap *</label>
                    <input type="text" id="name" name="name" required placeholder="Masukkan nama lengkap">
                  </div>
                  <div class="form-group">
                    <label for="phone">No. WhatsApp</label>
                    <input type="tel" id="phone" name="phone" placeholder="08xx-xxxx-xxxx">
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" id="email" name="email" required placeholder="email@contoh.com">
                </div>
                <div class="form-group">
                  <label for="subject">Subjek</label>
                  <select id="subject" name="subject">
                    <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                    <option value="Info Paket Umroh">Info Paket Umroh</option>
                    <option value="Info Paket Haji">Info Paket Haji</option>
                    <option value="Jadwal Keberangkatan">Jadwal Keberangkatan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Pesan *</label>
                  <textarea id="message" name="message" required placeholder="Tuliskan pesan atau pertanyaan Anda..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary form-submit">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>` + Components.footer() + Components.waFloat();

    setupContactForm();
    initPageEffects();
  }
};

// Helper functions
function renderPackages(packages, containerId) {
  const container = document.getElementById(containerId);
  if (container && packages.length) {
    container.innerHTML = packages.map(p => Components.packageCard(p)).join('');
    observeFadeIn();
  } else if (container) {
    container.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--gray-500);">Belum ada paket tersedia.</p>';
  }
}

function setupFilter(packages, containerId) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const filtered = filter === 'all' ? packages : packages.filter(p => p.category === filter);
      renderPackages(filtered, containerId);
    });
  });
}

function renderGallery(gallery) {
  const grid = document.getElementById('galleryGrid');
  if (grid) {
    grid.innerHTML = gallery.map(item => `
      <div class="gallery-item fade-in" data-category="${item.category}">
        <span class="gallery-icon">📷</span>
        <div class="gallery-item-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `).join('');
    observeFadeIn();
  }
}

function setupGalleryFilter(gallery) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const filtered = filter === 'all' ? gallery : gallery.filter(g => g.category === filter);
      renderGallery(filtered);
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        message: form.message.value
      };
      
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Mengirim...';
      btn.disabled = true;

      const result = await API.post('/contact', formData);
      
      if (result.success) {
        document.getElementById('formSuccess').classList.add('show');
        form.reset();
      } else {
        alert('Gagal mengirim pesan. Silakan coba lagi.');
      }
      
      btn.textContent = 'Kirim Pesan';
      btn.disabled = false;
    });
  }
}

function initPageEffects() {
  // Mobile menu toggle
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
    // Close menu on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('active'));
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Update active links
  AppRouter.updateActiveLinks();
  observeFadeIn();
}

// Intersection Observer for animations
function observeFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
}

window.Pages = Pages;
