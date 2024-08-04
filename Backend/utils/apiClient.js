const axios = require('axios');

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000
});

module.exports = apiClient;
