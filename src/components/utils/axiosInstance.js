import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 100000,
  headers: {
    "Content-Type": 'multipart/form-data',
    // "Content-Type": 'application/json',
  },
});

// Add a request interceptor to include authorization token and set Content-Type dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage, or any other secure storage mechanism
    const token = localStorage.getItem("token");

    // If the token exists, add it to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // // Remove Content-Type if the data is FormData to allow axios to set it automatically
    // if (config.data instanceof FormData) {
    //   delete config.headers["Content-Type"]; // Let axios set it for FormData
    // } else {
    //   config.headers["Content-Type"] = "application/json";
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response if needed
    return response;
  },
  (error) => {
    // Handle response errors, e.g., token expiration, server errors
    if (error.response?.status === 401) {
      console.log("Unauthorized access, redirecting to login...");
      // Optionally, handle redirection or token refresh logic here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
