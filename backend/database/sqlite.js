/**
 * Lightweight JSON-based database with in-memory caching
 * Extremely fast reads (O(1) from memory), writes persisted to disk
 * Perfect for travel website with mostly read operations
 */
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'data.json');

class Database {
  static instance = null;

  constructor() {
    this.data = this.loadFromDisk();
    this.autoIncrements = {};
    this.initAutoIncrements();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  loadFromDisk() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to load DB file, starting fresh:', e.message);
    }
    return {};
  }

  saveToDisk() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (e) {
      console.error('Failed to save DB:', e.message);
    }
  }

  initAutoIncrements() {
    for (const table of Object.keys(this.data)) {
      if (Array.isArray(this.data[table])) {
        const maxId = this.data[table].reduce((max, row) => Math.max(max, row.id || 0), 0);
        this.autoIncrements[table] = maxId;
      }
    }
  }

  // Create table (initialize array)
  createTable(name) {
    if (!this.data[name]) {
      this.data[name] = [];
      this.autoIncrements[name] = 0;
    }
  }

  // Insert a record
  insert(table, record) {
    if (!this.data[table]) this.createTable(table);
    this.autoIncrements[table] = (this.autoIncrements[table] || 0) + 1;
    const newRecord = {
      id: this.autoIncrements[table],
      ...record,
      created_at: record.created_at || new Date().toISOString()
    };
    this.data[table].push(newRecord);
    this.saveToDisk();
    return newRecord;
  }

  // Select all records with optional filter
  select(table, filter = null) {
    const records = this.data[table] || [];
    if (!filter) return [...records];
    return records.filter(row => {
      return Object.entries(filter).every(([key, value]) => {
        if (value === null || value === undefined || value === 'all') return true;
        return row[key] === value;
      });
    });
  }

  // Select by ID
  selectById(table, id) {
    const records = this.data[table] || [];
    return records.find(row => row.id === id) || null;
  }

  // Update a record
  update(table, id, updates) {
    const records = this.data[table] || [];
    const index = records.findIndex(row => row.id === id);
    if (index === -1) return null;
    records[index] = { ...records[index], ...updates };
    this.saveToDisk();
    return records[index];
  }

  // Delete a record
  delete(table, id) {
    const records = this.data[table] || [];
    const index = records.findIndex(row => row.id === id);
    if (index === -1) return false;
    records.splice(index, 1);
    this.saveToDisk();
    return true;
  }

  // Execute raw operations (for compatibility)
  exec(sql) {
    // Parse CREATE TABLE statements and create tables
    const tableMatches = sql.matchAll(/CREATE TABLE IF NOT EXISTS (\w+)/g);
    for (const match of tableMatches) {
      this.createTable(match[1]);
    }
  }

  // Count records
  count(table, filter = null) {
    return this.select(table, filter).length;
  }
}

module.exports = { Database };
