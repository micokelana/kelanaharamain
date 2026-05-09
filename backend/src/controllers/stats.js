const { Database } = require('../../database/sqlite');

async function getStats() {
  const db = Database.getInstance();
  const settings = db.select('settings');

  const getVal = (key) => {
    const s = settings.find(s => s.key === key);
    return s ? s.value : '';
  };

  return {
    total_jamaah: getVal('total_jamaah'),
    years_experience: getVal('years_experience'),
    satisfaction_rate: getVal('satisfaction_rate'),
    total_packages: db.count('packages'),
    contact: {
      phone: getVal('phone'),
      whatsapp: getVal('whatsapp'),
      email: getVal('email'),
      address: getVal('address')
    },
    social: {
      instagram: getVal('instagram'),
      facebook: getVal('facebook'),
      youtube: getVal('youtube'),
      tiktok: getVal('tiktok')
    },
    licenses: {
      ppiu: getVal('izin_ppiu'),
      pihk: getVal('izin_pihk')
    }
  };
}

module.exports = { getStats };
