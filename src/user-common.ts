import axios, { AxiosInstance } from "axios";
import { d_Path } from "@/plugins/const";

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: d_Path,
  // リクエストヘッダ
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
