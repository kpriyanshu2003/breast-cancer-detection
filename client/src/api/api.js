import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3300",
});

// Test API
export const test = () => API.get("/");

// Upload File
export const uploadImage = (file) => API.post("/upload", file);
