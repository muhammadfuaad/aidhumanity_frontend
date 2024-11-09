import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 100000,
  headers: {
    "Content-Type": 'multipart/form-data', // Default header for requests
  },
});

// Add a request interceptor to include authorization token if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage, or any other secure storage mechanism
    const token = localStorage.getItem("token");

    // If the token exists, add it to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response if needed
    return response;
  },
  (error) => {
    // Handle response errors, e.g., token expiration, server errors
    if (error.response?.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login
      console.log("Unauthorized access, redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
