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
    console.log("Sending request:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

// receive inteceptor
axiosInstance.interceptors.response.use((res) => {
  console.log("Receive response:", res);
});

export default axiosInstance;
