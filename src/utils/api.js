import axios from "axios";

export const backendUrl =
  import.meta.env.VITE_BACKEND_URL ||
  "https://atp-24eg109a06-blog-backend.onrender.com";

export const apiClient = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});
