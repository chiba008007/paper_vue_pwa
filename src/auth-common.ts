import axios, { AxiosInstance } from "axios";
import { d_Path } from "@/plugins/const";

const token = localStorage.getItem("user") as string;
const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: d_Path,
  // リクエストヘッダ
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "https://admin.myselfpaper.online",
    Authorization: "Bearer " + JSON.parse(token)?.userToken,
  },
});

export default apiClient;
