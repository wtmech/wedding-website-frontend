const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const endpoints = {
  inviteSearch: (name: string) => `${API_URL}/api/invites/search?name=${encodeURIComponent(name)}`,
  rsvpSubmit: `${API_URL}/api/rsvps/rsvp`,
  inviteList: `${API_URL}/api/invites`,
}