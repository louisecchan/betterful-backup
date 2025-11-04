import axios from "axios";

const token = process.env.REACT_APP_API_TOKEN;

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: token
    ? {
        Authorization: "bearer " + token,
      }
    : {},
  timeout: 10000, // 10 second timeout
});

// Add response caching for GET requests
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

makeRequest.interceptors.request.use((config) => {
  if (config.method === "get") {
    const cachedResponse = cache.get(config.url);
    if (
      cachedResponse &&
      Date.now() - cachedResponse.timestamp < CACHE_DURATION
    ) {
      // Return cached response
      config.adapter = () => Promise.resolve(cachedResponse.response);
    }
  }
  return config;
});

makeRequest.interceptors.response.use((response) => {
  if (response.config.method === "get") {
    cache.set(response.config.url, {
      response,
      timestamp: Date.now(),
    });
  }
  return response;
});
