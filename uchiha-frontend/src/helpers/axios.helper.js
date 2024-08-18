import axios from "axios";
// import { loadProgressBar } from "axios-progress-bar";
// import "axios-progress-bar/dist/nprogress.css";

// const baseURL = "https://playtubebyyashpz.onrender.com/api/v1";
const baseURL = "http://localhost:9000/api/v1";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// loadProgressBar({}, axiosInstance);
