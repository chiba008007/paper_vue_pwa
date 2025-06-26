import axios, { AxiosInstance } from "axios";
import { d_Path } from "@/plugins/const";

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: d_Path,
});

export default apiClient;
