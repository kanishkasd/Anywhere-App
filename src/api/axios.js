import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-type": "application/json",
  },
});

// request interceptor

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// receive inteceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.res?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
