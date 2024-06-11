import axios from "axios";
import api from "./auth";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

let isTokenRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (token) => {
  refreshSubscribers.map((cb) => cb(token));
};

const addRefreshSubscriber = (cb) => {
  refreshSubscribers.push(cb);
};

const refreshToken = async () => {
  if (!isTokenRefreshing) {
    isTokenRefreshing = true;

    try {
      const res = await api.post('/token', {
        grant_type: "refresh_token",
        client_id: process.env.REACT_APP_CLIENT_ID,
        refresh_token: localStorage.getItem("refresh_token"),
      });
      const newToken = res.data.access_token;
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);

      onRefreshed(newToken);
    } catch {
    } finally {
      isTokenRefreshing = false;
      refreshSubscribers = [];
    }
  }
};

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const original = error.config;

    if (error.response.status === 401 && !original._retry) {
      original._retry = true;

      if (!isTokenRefreshing) {
        await refreshToken();
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((token) => {
          original.headers["Authorization"] = `Bearer ${token}`;
          resolve(instance(original));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default instance;
