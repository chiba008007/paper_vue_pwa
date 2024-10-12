import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: "https://admin.myselfpaper.online/",
  // リクエストヘッダ
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "https://admin.myselfpaper.online",
  },
  withCredentials: true,
});

export default apiClient;
