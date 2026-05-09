# Kelana Haramain - Website Travel Umroh & Haji

Website resmi Kelana Haramain yang dibangun ulang dari WordPress menjadi aplikasi modern dengan performa tinggi.

## Tech Stack

- **Frontend**: Vanilla JavaScript SPA (Single Page Application) - Zero framework overhead
- **Backend**: Node.js HTTP Server (zero dependencies)
- **Database**: In-memory JSON database dengan file persistence (sangat cepat untuk read operations)
- **Styling**: Custom CSS dengan responsive design

## Fitur

- 🏠 **Homepage** - Hero section, keunggulan, paket populer, testimonial
- 📦 **Paket Umroh** - Daftar paket dengan filter (Reguler, Plus, VIP)
- 🕋 **Paket Haji** - Paket haji khusus
- 🏢 **Tentang Kami** - Profil perusahaan, visi misi, legalitas
- 🖼️ **Galeri** - Foto perjalanan jamaah dengan filter kategori
- 📞 **Kontak** - Form kontak dan informasi perusahaan
- 💬 **WhatsApp Integration** - Floating button & direct chat

## Optimasi PageSpeed

- ✅ Zero external dependencies (no npm packages needed)
- ✅ SPA routing (no full page reloads)
- ✅ In-memory API caching (5 minute TTL)
- ✅ Aggressive static asset caching (1 year)
- ✅ Deferred script loading
- ✅ CSS preloading
- ✅ Intersection Observer for lazy animations
- ✅ Minimal DOM manipulation
- ✅ Semantic HTML structure
- ✅ SVG favicon (no extra HTTP request for image)

## Cara Menjalankan

```bash
# 1. Inisialisasi & seed database
node backend/database/seed.js

# 2. Jalankan server
node backend/src/server.js

# Server berjalan di http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/packages` | Daftar semua paket (query: `?type=umroh\|haji`) |
| GET | `/api/packages/:id` | Detail paket |
| GET | `/api/testimonials` | Daftar testimonial |
| GET | `/api/gallery` | Daftar galeri |
| GET | `/api/about` | Informasi perusahaan |
| GET | `/api/stats` | Statistik & kontak |
| POST | `/api/contact` | Kirim pesan kontak |

## Struktur Project

```
kelanaharamain/
├── backend/
│   ├── database/
│   │   ├── sqlite.js      # JSON-based database engine
│   │   ├── init.js        # Database initialization
│   │   ├── seed.js        # Data seeder
│   │   └── data.json      # Database file (auto-generated)
│   └── src/
│       ├── server.js       # HTTP server
│       ├── router.js       # API router
│       ├── static.js       # Static file server
│       └── controllers/    # API controllers
├── frontend/
│   └── public/
│       ├── index.html      # SPA entry point
│       ├── styles/main.css # All styles
│       ├── js/             # Application JavaScript
│       └── images/         # Static assets
├── package.json
└── README.md
```

## Responsive Design

- 📱 Mobile-first approach
- 💻 Desktop optimized
- 📐 Breakpoints: 480px, 768px, 1024px
- 🎨 Fluid typography and spacing

## Environment Variables

| Variable | Default | Deskripsi |
|----------|---------|-----------|
| `PORT` | `3000` | Server port |
| `HOST` | `0.0.0.0` | Server host |
