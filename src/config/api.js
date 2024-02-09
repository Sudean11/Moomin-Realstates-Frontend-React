import axios from "axios";

export const API = axios.create({
    baseURL: 'https://e9ed-2a09-bac5-74d5-4e6-00-7d-5a.ngrok-free.app'
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

