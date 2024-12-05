import axios from "axios";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000, // Request timeout (optional)
    headers: {
        "Content-Type": "application/json", // Default content-type
    },
});

// Interceptors to add authentication token or log requests (optional)
api.interceptors.request.use(
    (config) => {
        // Add token or any authorization logic here
        // config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
