import http from "@/user-common";
import httpAuth from "@/auth-common";
import { ref } from "vue";

class UserApiService {
  getPost(data: object): Promise<object> {
    return http.post("/api/login", data);
  }
}

export default new UserApiService();
