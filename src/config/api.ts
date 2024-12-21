import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Add this to debug
console.log('API_URL:', API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const endpoints = {
  inviteSearch: (name: string) => `/api/invites/search?name=${encodeURIComponent(name)}`,
  rsvpSubmit: `/api/rsvps/rsvp`,
  inviteList: `/api/invites`,
};

export default axiosInstance;