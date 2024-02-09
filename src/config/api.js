import axios from "axios";

export const API = axios.create({
    baseURL: 'https://0f8f-2a09-bac1-76a0-c1a0-00-e-2e4.ngrok-free.app'
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

