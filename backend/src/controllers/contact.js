const { Database } = require('../../database/sqlite');

async function submitContact(body) {
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    throw new Error('Name, email, and message are required');
  }

  const db = Database.getInstance();
  const contact = db.insert('contacts', {
    name,
    email,
    phone: phone || '',
    subject: subject || 'Pertanyaan Umum',
    message,
    is_read: 0
  });

  return { id: contact.id, message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' };
}

module.exports = { submitContact };
