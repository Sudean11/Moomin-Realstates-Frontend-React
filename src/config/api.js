import axios from "axios";

export const API = axios.create({
    baseURL: 'https://ceee-2a09-bac5-74d2-4e6-00-7d-5b.ngrok-free.app'
})

API.interceptors.request.use(
    config => {
        const token = localStorage.getItem('auth');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
