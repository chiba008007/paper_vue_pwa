import axios, { AxiosInstance } from "axios";
import { d_Path } from "@/plugins/const";

//const token = localStorage.getItem("userToken") as string;
const token = localStorage.getItem("userToken")?.replace(/"/g, "");
//const token = "16|MYeewprKQ3nNfJczpzr4D86LOHn7JoqNW6cud67Ab175a5a5";
const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: d_Path,
  // リクエストヘッダ
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + token,
  },
});

export default apiClient;
