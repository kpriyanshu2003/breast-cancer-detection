import axios from "axios";

const API = axios.create({ baseURL: `http://127.0.0.1:3300/` });

// tst api
export const test = () => API.get("/");

// upload file
export const uploadImage = (file) => API.post("/upload", file);
