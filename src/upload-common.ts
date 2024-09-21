import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: "http://localhost:8000",
  // リクエストヘッダ
  headers: {
    "content-type": "multipart/form-data",
  },
});

export default apiClient;
