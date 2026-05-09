const { Database } = require('./sqlite');

async function initDatabase() {
  const db = Database.getInstance();

  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS packages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL CHECK(type IN ('umroh', 'haji')),
      category TEXT DEFAULT 'reguler',
      price REAL NOT NULL,
      duration TEXT NOT NULL,
      hotel_makkah TEXT,
      hotel_madinah TEXT,
      airline TEXT,
      departure_date TEXT,
      seats_available INTEGER DEFAULT 45,
      description TEXT,
      includes TEXT,
      image TEXT,
      is_featured INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT,
      package_name TEXT,
      rating INTEGER DEFAULT 5,
      message TEXT NOT NULL,
      avatar TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS gallery (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      image_url TEXT NOT NULL,
      category TEXT DEFAULT 'umroh',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT,
      message TEXT NOT NULL,
      is_read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT UNIQUE NOT NULL,
      value TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_packages_type ON packages(type);
    CREATE INDEX IF NOT EXISTS idx_packages_featured ON packages(is_featured);
    CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery(category);
    CREATE INDEX IF NOT EXISTS idx_contacts_read ON contacts(is_read);
  `);

  console.log('✅ Database initialized successfully');
  return db;
}

module.exports = { initDatabase };

// Run directly
if (require.main === module) {
  initDatabase().then(() => {
    console.log('Database setup complete');
    const { seedDatabase } = require('./seed');
    seedDatabase();
  });
}
