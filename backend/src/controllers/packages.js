const { Database } = require('../../database/sqlite');

async function getPackages(type) {
  const db = Database.getInstance();
  const filter = type && type !== 'all' ? { type } : null;
  const packages = db.select('packages', filter);
  return packages.map(pkg => ({
    ...pkg,
    includes: pkg.includes ? JSON.parse(pkg.includes) : []
  }));
}

async function getPackageById(id) {
  const db = Database.getInstance();
  const pkg = db.selectById('packages', id);
  if (!pkg) return null;
  return {
    ...pkg,
    includes: pkg.includes ? JSON.parse(pkg.includes) : []
  };
}

module.exports = { getPackages, getPackageById };
