const { Database } = require('../../database/sqlite');

async function getGallery() {
  const db = Database.getInstance();
  return db.select('gallery');
}

module.exports = { getGallery };
