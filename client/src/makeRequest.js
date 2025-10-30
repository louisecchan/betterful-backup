import axios from "axios";

const USE_PROXY =
  process.env.REACT_APP_USE_PROXY === "true" ||
  process.env.NODE_ENV === "production";

export const makeRequest = axios.create({
  baseURL: USE_PROXY ? "/api/strapi-proxy" : process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

makeRequest.interceptors.request.use(
  (config) => {
    if (USE_PROXY) {
      const url = config.url || "";
      config.params = {
        ...config.params,
        path: url,
      };
      config.url = "";
    } else {
      config.headers.Authorization =
        "bearer " + process.env.REACT_APP_API_TOKEN;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
