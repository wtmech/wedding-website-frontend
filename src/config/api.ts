import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.withCredentials = true;

export const endpoints = {
  inviteSearch: (name: string) => `${API_URL}/api/invites/search?name=${encodeURIComponent(name)}`,
  rsvpSubmit: `${API_URL}/api/rsvps/rsvp`,
  inviteList: `${API_URL}/api/invites`,
}