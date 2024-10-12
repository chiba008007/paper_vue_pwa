import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: "https://admin.myselfpaper.online/",
  // リクエストヘッダ
  headers: {
    "content-type": "multipart/form-data",
  },
});

export default apiClient;
