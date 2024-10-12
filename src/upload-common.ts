import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: "https://admin.myselfpaper.online/",
  // リクエストヘッダ
  headers: {
    "content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "https://admin.myselfpaper.online",
    "Access-Control-Allow-Credentials": true,
  },
});

export default apiClient;
