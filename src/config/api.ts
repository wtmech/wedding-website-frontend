import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL || '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: {
        url: error.config?.url,
        method: error.config?.method,
      }
    });
    return Promise.reject(error);
  }
);

export const endpoints = {
  inviteSearch: (name: string) => `/api/invites/search?name=${encodeURIComponent(name)}`,
  rsvpSubmit: `/api/rsvps/rsvp`,
  inviteList: `/api/invites`,
};

export default axiosInstance;