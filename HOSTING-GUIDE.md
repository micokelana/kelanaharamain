# Panduan Deploy Kelana Haramain di Hostinger

## Prasyarat

- Akun Hostinger dengan paket hosting (minimal **Premium Web Hosting** atau **VPS**)
- Domain yang sudah terhubung ke Hostinger (misalnya `kelanaharamain.id`)
- Akses ke hPanel (panel kontrol Hostinger)

---

## Opsi 1: Deploy di Hostinger VPS (Recommended)

VPS memberikan kontrol penuh untuk menjalankan Node.js backend.

### Langkah 1: Beli & Setup VPS

1. Login ke [Hostinger](https://www.hostinger.co.id)
2. Beli paket **VPS Hosting** (minimal KVM 1)
3. Pilih OS: **Ubuntu 22.04**
4. Catat IP address VPS Anda

### Langkah 2: Akses VPS via SSH

```bash
ssh root@IP_ADDRESS_VPS
```

### Langkah 3: Install Node.js

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verifikasi
node --version   # v20.x.x
npm --version    # 10.x.x
```

### Langkah 4: Install Git & Clone Repository

```bash
# Install git
apt install -y git

# Clone repository
cd /var/www
git clone https://github.com/micokelana/kelanaharamain.git
cd kelanaharamain
```

### Langkah 5: Setup Aplikasi

```bash
# Seed database
node backend/database/seed.js

# Test jalankan
node backend/src/server.js
# Harusnya muncul: 🚀 Kelana Haramain server running at http://0.0.0.0:3000
# Tekan Ctrl+C untuk stop
```

### Langkah 6: Install PM2 (Process Manager)

```bash
npm install -g pm2

# Jalankan dengan PM2
pm2 start backend/src/server.js --name "kelana-haramain"

# Auto-start saat reboot
pm2 startup
pm2 save
```

### Langkah 7: Install & Konfigurasi Nginx (Reverse Proxy)

```bash
apt install -y nginx

# Buat konfigurasi
nano /etc/nginx/sites-available/kelanaharamain
```

Isi file konfigurasi:

```nginx
server {
    listen 80;
    server_name kelanaharamain.id www.kelanaharamain.id;

    # Gzip compression untuk performa
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    gzip_min_length 1000;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Aktifkan konfigurasi:

```bash
ln -s /etc/nginx/sites-available/kelanaharamain /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

### Langkah 8: Install SSL (HTTPS) dengan Certbot

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d kelanaharamain.id -d www.kelanaharamain.id
```

### Langkah 9: Setup Firewall

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

### Langkah 10: Update Otomatis (Optional)

Buat script untuk auto-deploy saat push ke GitHub:

```bash
nano /var/www/deploy.sh
```

```bash
#!/bin/bash
cd /var/www/kelanaharamain
git pull origin main
pm2 restart kelana-haramain
echo "Deploy complete: $(date)"
```

```bash
chmod +x /var/www/deploy.sh
```

---

## Opsi 2: Deploy di Hostinger Shared Hosting (Web Hosting)

> ⚠️ **Catatan**: Shared hosting Hostinger TIDAK mendukung Node.js secara langsung. Kita perlu memisahkan frontend (static) dan backend (API terpisah).

### Strategi: Frontend di Hostinger + Backend di Railway/Render (gratis)

#### A. Upload Frontend ke Hostinger

1. Login ke **hPanel** Hostinger
2. Buka **File Manager**
3. Navigasi ke folder `public_html`
4. **Hapus** semua file default di `public_html`
5. Upload seluruh isi folder `frontend/public/`:
   - `index.html`
   - Folder `js/`
   - Folder `styles/`
   - Folder `images/`

6. Atau via **FTP**:
```bash
# Install FileZilla, lalu connect dengan:
# Host: ftp.kelanaharamain.id (atau IP dari hPanel)
# Username: (lihat di hPanel > FTP Accounts)
# Password: (lihat di hPanel)
# Port: 21
```

7. Upload semua file dari `frontend/public/` ke `public_html/`

#### B. Setup .htaccess untuk SPA Routing

Buat file `.htaccess` di `public_html/`:

```apache
RewriteEngine On
RewriteBase /

# Jika file/folder ada, serve langsung
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Redirect semua ke index.html (SPA)
RewriteRule ^(.*)$ /index.html [L]

# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css
    AddOutputFilterByType DEFLATE application/javascript application/json
    AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

#### C. Ubah API URL di Frontend

Edit `frontend/public/js/api.js` - ganti base URL ke backend external:

```javascript
// Ganti dari:
const res = await fetch(`/api${endpoint}`);

// Menjadi (jika backend di Railway/Render):
const API_BASE = 'https://kelana-haramain-api.railway.app';
const res = await fetch(`${API_BASE}/api${endpoint}`);
```

#### D. Deploy Backend ke Railway (Gratis)

1. Buka [railway.app](https://railway.app)
2. Login dengan GitHub
3. **New Project** → **Deploy from GitHub**
4. Pilih repo `micokelana/kelanaharamain`
5. Set **Root Directory**: `./`
6. Set **Start Command**: `node backend/src/server.js`
7. Tambah environment variable: `PORT=3000`
8. Deploy!

---

## Opsi 3: Deploy di Hostinger Node.js Hosting (Business Plan)

Hostinger Business plan mendukung Node.js via **hPanel**.

### Langkah-langkah:

1. Login ke hPanel
2. Pergi ke **Advanced** → **Node.js**
3. Klik **Create Application**
4. Set konfigurasi:
   - **Node.js version**: 20.x
   - **Application root**: `/kelanaharamain`
   - **Application startup file**: `backend/src/server.js`
   - **Application URL**: kelanaharamain.id
5. Upload file via **Git** atau **File Manager**
6. Klik **Run NPM Install** (tidak diperlukan karena zero dependencies)
7. Restart aplikasi

---

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Port 3000 tidak bisa diakses | Pastikan Nginx sudah di-setup sebagai reverse proxy |
| Website blank/white | Cek Console browser untuk error JS |
| API error 404 | Pastikan backend sudah running (`pm2 status`) |
| SSL error | Jalankan ulang `certbot --nginx` |
| Database hilang setelah restart | Pastikan `data.json` ada di `backend/database/` |
| SPA routing tidak work (404) | Pastikan `.htaccess` sudah benar atau Nginx fallback ke index.html |

---

## Checklist Sebelum Go Live

- [ ] Domain sudah pointing ke server Hostinger
- [ ] SSL/HTTPS aktif
- [ ] Seed database sudah dijalankan
- [ ] PM2 auto-start sudah di-setup
- [ ] Gzip compression aktif
- [ ] Cache headers sudah benar
- [ ] Test di PageSpeed Insights
- [ ] Test responsive di mobile
- [ ] WhatsApp link sudah benar (ganti nomor asli)
- [ ] Semua data (paket, harga) sudah diupdate dengan data real

---

## Performa yang Diharapkan

Dengan setup di atas, target PageSpeed score:
- **Performance**: 90-100
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+
