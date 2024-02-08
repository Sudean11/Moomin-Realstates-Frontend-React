import axios from "axios";

export const API = axios.create({
    baseURL: 'https://aaf8-2a09-bac5-74d2-8c-00-e-2e9.ngrok-free.app'
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