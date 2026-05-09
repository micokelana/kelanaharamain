const { Database } = require('./sqlite');

function seedDatabase() {
  const db = Database.getInstance();

  // Clear existing data
  db.data.packages = [];
  db.data.testimonials = [];
  db.data.gallery = [];
  db.data.settings = [];
  db.autoIncrements = { packages: 0, testimonials: 0, gallery: 0, settings: 0, contacts: 0 };

  // Seed Packages - Umroh
  const umrohPackages = [
    {
      name: 'Umroh Reguler 9 Hari',
      type: 'umroh',
      category: 'reguler',
      price: 25000000,
      duration: '9 Hari',
      hotel_makkah: 'Hotel Bintang 4 (±500m dari Masjidil Haram)',
      hotel_madinah: 'Hotel Bintang 4 (±300m dari Masjid Nabawi)',
      airline: 'Saudi Airlines',
      departure_date: '2026-07-15',
      seats_available: 40,
      description: 'Paket umroh reguler dengan fasilitas lengkap dan nyaman. Cocok untuk jamaah yang ingin ibadah dengan tenang.',
      includes: JSON.stringify(['Tiket pesawat PP', 'Visa umroh', 'Hotel bintang 4', 'Makan 3x sehari (menu Indonesia)', 'Bus AC full', 'Muthawwif berpengalaman', 'Perlengkapan umroh', 'Ziarah Makkah & Madinah', 'Air zamzam 5 liter', 'Handling bandara']),
      image: '/images/umroh-reguler.webp',
      is_featured: 1
    },
    {
      name: 'Umroh Plus Turki 12 Hari',
      type: 'umroh',
      category: 'plus',
      price: 35000000,
      duration: '12 Hari',
      hotel_makkah: 'Hotel Bintang 5 (±200m dari Masjidil Haram)',
      hotel_madinah: 'Hotel Bintang 5 (±100m dari Masjid Nabawi)',
      airline: 'Turkish Airlines',
      departure_date: '2026-08-10',
      seats_available: 30,
      description: 'Paket umroh plus wisata ke Turki. Kunjungi Istanbul, Blue Mosque, Hagia Sophia, dan Grand Bazaar.',
      includes: JSON.stringify(['Tiket pesawat PP', 'Visa umroh + visa Turki', 'Hotel bintang 5', 'Makan 3x sehari', 'Bus AC full', 'City tour Istanbul 2 hari', 'Muthawwif berpengalaman', 'Perlengkapan umroh', 'Ziarah lengkap', 'Air zamzam 10 liter']),
      image: '/images/umroh-turki.webp',
      is_featured: 1
    },
    {
      name: 'Umroh VIP 9 Hari',
      type: 'umroh',
      category: 'vip',
      price: 45000000,
      duration: '9 Hari',
      hotel_makkah: 'Hotel Bintang 5 (Depan Masjidil Haram)',
      hotel_madinah: 'Hotel Bintang 5 (Depan Masjid Nabawi)',
      airline: 'Garuda Indonesia',
      departure_date: '2026-09-05',
      seats_available: 20,
      description: 'Paket umroh VIP dengan fasilitas premium. Hotel depan Masjidil Haram, penerbangan langsung, dan layanan eksklusif.',
      includes: JSON.stringify(['Tiket pesawat langsung PP (Garuda)', 'Visa umroh', 'Hotel bintang 5 depan Haram', 'Makan 3x sehari (buffet)', 'Bus VIP', 'Muthawwif senior', 'Perlengkapan umroh premium', 'Ziarah eksklusif', 'Air zamzam 10 liter', 'Laundry service', 'Travel kit eksklusif']),
      image: '/images/umroh-vip.webp',
      is_featured: 1
    },
    {
      name: 'Umroh Ramadhan 14 Hari',
      type: 'umroh',
      category: 'reguler',
      price: 38000000,
      duration: '14 Hari',
      hotel_makkah: 'Hotel Bintang 4 (±400m dari Masjidil Haram)',
      hotel_madinah: 'Hotel Bintang 4 (±200m dari Masjid Nabawi)',
      airline: 'Saudi Airlines',
      departure_date: '2027-03-01',
      seats_available: 35,
      description: 'Rasakan keindahan ibadah umroh di bulan Ramadhan. Nikmati sahur dan berbuka di Tanah Suci.',
      includes: JSON.stringify(['Tiket pesawat PP', 'Visa umroh', 'Hotel bintang 4', 'Makan sahur & buka puasa', 'Bus AC full', 'Muthawwif berpengalaman', 'Perlengkapan umroh', 'Ziarah lengkap', 'Air zamzam 5 liter', 'Itikaf support']),
      image: '/images/umroh-ramadhan.webp',
      is_featured: 0
    }
  ];

  // Seed Packages - Haji
  const hajiPackages = [
    {
      name: 'Haji Khusus Reguler',
      type: 'haji',
      category: 'reguler',
      price: 150000000,
      duration: '26 Hari',
      hotel_makkah: 'Hotel Bintang 5 (±300m dari Masjidil Haram)',
      hotel_madinah: 'Hotel Bintang 5 (±200m dari Masjid Nabawi)',
      airline: 'Garuda Indonesia',
      departure_date: '2027-06-01',
      seats_available: 25,
      description: 'Haji khusus dengan pelayanan prima. Tanpa antrian panjang, berangkat dalam waktu 5 tahun.',
      includes: JSON.stringify(['Tiket pesawat PP', 'Visa haji', 'Hotel bintang 5', 'Makan 3x sehari', 'Bus AC full', 'Tenda VIP di Arafah & Mina', 'Pembimbing ibadah senior', 'Manasik haji 5x', 'Perlengkapan haji', 'Asuransi perjalanan', 'Handling bandara']),
      image: '/images/haji-reguler.webp',
      is_featured: 1
    },
    {
      name: 'Haji Khusus VIP',
      type: 'haji',
      category: 'vip',
      price: 220000000,
      duration: '30 Hari',
      hotel_makkah: 'Hotel Bintang 5 (Depan Masjidil Haram)',
      hotel_madinah: 'Hotel Bintang 5 (Depan Masjid Nabawi)',
      airline: 'Garuda Indonesia',
      departure_date: '2027-06-01',
      seats_available: 15,
      description: 'Haji khusus VIP dengan fasilitas terbaik. Pelayanan personal dan kenyamanan maksimal.',
      includes: JSON.stringify(['Tiket pesawat first class PP', 'Visa haji', 'Hotel bintang 5 depan Haram', 'Makan 3x sehari (premium)', 'Bus VIP private', 'Tenda VIP eksklusif di Arafah & Mina', 'Pembimbing ibadah senior khusus', 'Manasik haji 7x', 'Perlengkapan haji premium', 'Asuransi perjalanan premium', 'Dokter pendamping', 'Laundry service']),
      image: '/images/haji-vip.webp',
      is_featured: 1
    }
  ];

  // Insert packages
  [...umrohPackages, ...hajiPackages].forEach(pkg => db.insert('packages', pkg));

  // Seed Testimonials
  const testimonials = [
    {
      name: 'H. Ahmad Ridwan',
      location: 'Jakarta',
      package_name: 'Umroh VIP 9 Hari',
      rating: 5,
      message: 'Alhamdulillah, pelayanan Kelana Haramain sangat memuaskan. Hotel depan Haram, muthawwif yang ramah dan berpengalaman. Insya Allah akan berangkat lagi bersama keluarga.',
      avatar: '/images/avatar-1.webp'
    },
    {
      name: 'Hj. Siti Nurhaliza',
      location: 'Bandung',
      package_name: 'Umroh Reguler 9 Hari',
      rating: 5,
      message: 'Pengalaman umroh pertama saya sangat berkesan. Semua sudah diurus dengan baik dari awal sampai akhir. Terima kasih Kelana Haramain.',
      avatar: '/images/avatar-2.webp'
    },
    {
      name: 'Ir. Bambang Suprapto',
      location: 'Surabaya',
      package_name: 'Haji Khusus Reguler',
      rating: 5,
      message: 'Haji bersama Kelana Haramain sangat nyaman. Tenda di Arafah luas, makanan enak, dan pembimbing sangat sabar. Jazakallahu khairan.',
      avatar: '/images/avatar-3.webp'
    },
    {
      name: 'Dr. Fatimah Azzahra',
      location: 'Yogyakarta',
      package_name: 'Umroh Plus Turki 12 Hari',
      rating: 5,
      message: 'Paket umroh plus Turki sangat worth it! Ibadah lancar, wisata ke Istanbul juga sangat menyenangkan. Recommended banget!',
      avatar: '/images/avatar-4.webp'
    },
    {
      name: 'H. Muhammad Fauzi',
      location: 'Medan',
      package_name: 'Umroh Reguler 9 Hari',
      rating: 4,
      message: 'Sudah 3 kali umroh bersama Kelana Haramain. Pelayanan konsisten bagus, harga bersaing, dan amanah. Semoga terus istiqomah.',
      avatar: '/images/avatar-5.webp'
    },
    {
      name: 'Hj. Aisyah Putri',
      location: 'Makassar',
      package_name: 'Umroh VIP 9 Hari',
      rating: 5,
      message: 'Masya Allah, ibadah umroh terasa khusyuk dengan fasilitas yang sangat baik. Hotel bersih, makan enak, dan jadwal tidak terburu-buru.',
      avatar: '/images/avatar-6.webp'
    }
  ];

  testimonials.forEach(t => db.insert('testimonials', t));

  // Seed Gallery
  const galleryItems = [
    { title: 'Jamaah di Masjidil Haram', description: 'Kebersamaan jamaah Kelana Haramain di Masjidil Haram', image_url: '/images/gallery-1.webp', category: 'umroh' },
    { title: 'Sholat di Masjid Nabawi', description: 'Jamaah menunaikan sholat di Masjid Nabawi', image_url: '/images/gallery-2.webp', category: 'umroh' },
    { title: 'Ziarah Jabal Uhud', description: 'Kunjungan ke Jabal Uhud, Madinah', image_url: '/images/gallery-3.webp', category: 'umroh' },
    { title: 'Manasik Haji', description: 'Kegiatan manasik haji sebelum keberangkatan', image_url: '/images/gallery-4.webp', category: 'haji' },
    { title: 'Wukuf di Arafah', description: 'Momen wukuf di Padang Arafah', image_url: '/images/gallery-5.webp', category: 'haji' },
    { title: 'City Tour Istanbul', description: 'Paket umroh plus wisata ke Turki', image_url: '/images/gallery-6.webp', category: 'wisata' },
    { title: 'Blue Mosque Istanbul', description: 'Kunjungan ke Blue Mosque, Istanbul', image_url: '/images/gallery-7.webp', category: 'wisata' },
    { title: 'Keberangkatan Jamaah', description: 'Momen keberangkatan jamaah dari bandara', image_url: '/images/gallery-8.webp', category: 'umroh' },
  ];

  galleryItems.forEach(g => db.insert('gallery', g));

  // Seed Settings
  const settings = [
    { key: 'company_name', value: 'Kelana Haramain' },
    { key: 'tagline', value: 'Perjalanan Suci, Pelayanan Istimewa' },
    { key: 'phone', value: '+62 812-3456-7890' },
    { key: 'whatsapp', value: '6281234567890' },
    { key: 'email', value: 'info@kelanaharamain.id' },
    { key: 'address', value: 'Jl. Raya Haramain No. 123, Jakarta Selatan, DKI Jakarta 12345' },
    { key: 'izin_ppiu', value: 'PPIU/123/2020' },
    { key: 'izin_pihk', value: 'PIHK/456/2021' },
    { key: 'total_jamaah', value: '5000' },
    { key: 'years_experience', value: '10' },
    { key: 'satisfaction_rate', value: '98' },
    { key: 'instagram', value: 'https://instagram.com/kelanaharamain' },
    { key: 'facebook', value: 'https://facebook.com/kelanaharamain' },
    { key: 'youtube', value: 'https://youtube.com/@kelanaharamain' },
    { key: 'tiktok', value: 'https://tiktok.com/@kelanaharamain' },
  ];

  settings.forEach(s => db.insert('settings', s));

  db.saveToDisk();
  console.log('✅ Database seeded successfully');
  console.log(`   - ${umrohPackages.length + hajiPackages.length} packages`);
  console.log(`   - ${testimonials.length} testimonials`);
  console.log(`   - ${galleryItems.length} gallery items`);
  console.log(`   - ${settings.length} settings`);
}

module.exports = { seedDatabase };

// Run directly
if (require.main === module) {
  seedDatabase();
}
