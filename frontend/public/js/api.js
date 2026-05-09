// API Client with caching
const API = {
  cache: new Map(),
  cacheTime: 5 * 60 * 1000, // 5 minutes

  async get(endpoint) {
    const cached = this.cache.get(endpoint);
    if (cached && Date.now() - cached.time < this.cacheTime) {
      return cached.data;
    }

    try {
      const res = await fetch(`/api${endpoint}`);
      const json = await res.json();
      if (json.success) {
        this.cache.set(endpoint, { data: json.data, time: Date.now() });
        return json.data;
      }
      throw new Error(json.message || 'API Error');
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      return null;
    }
  },

  async post(endpoint, body) {
    try {
      const res = await fetch(`/api${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      return await res.json();
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      return { success: false, message: 'Network error' };
    }
  }
};

window.API = API;
