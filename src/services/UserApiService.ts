import http from "@/user-common";
import httpAuth from "@/auth-common";
import { ref } from "vue";

class UserApiService {
  getPost(data: object): Promise<object> {
    return http.post("/api/login", data);
  }
  getUserData(code: string | null): Promise<object> {
    return http.get("/api/top/?code=" + code);
  }
  onLogout(): Promise<object> {
    return httpAuth.post("/api/logout");
  }
  onSendMail(data: object): Promise<object> {
    return http.post("/api/mail", data);
  }
}

export default new UserApiService();
