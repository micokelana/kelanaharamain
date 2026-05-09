const { Database } = require('../../database/sqlite');

async function getTestimonials() {
  const db = Database.getInstance();
  return db.select('testimonials');
}

module.exports = { getTestimonials };
