// src/services/api.js
const API_BASE_URL = "http://localhost:5000"; // or your deployed backend URL

// POST /shorten - Create short URL
export const shortenUrl = async (longUrl) => {
  const response = await fetch(`${API_BASE_URL}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ longUrl })
  });
  return response.json();
};

// GET /stats/:shortCode - Get statistics for a short URL
export const getUrlStats = async (shortCode) => {
  const response = await fetch(`${API_BASE_URL}/stats/${shortCode}`);
  return response.json();
};
