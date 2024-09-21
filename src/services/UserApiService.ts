import http from "@/user-common";
import httpAuth from "@/auth-common";
import httpUpload from "@/upload-common";
import { ref } from "vue";

class UserApiService {
  getPost(data: object): Promise<object> {
    return http.post("/api/login", data);
  }
  getUserData(code: string | null): Promise<object> {
    return http.get("/api/top/?code=" + code);
  }
  getUserEditData(): Promise<object> {
    return httpAuth.get("/api/getEditUser/");
  }
  editUserData(data: object): Promise<object> {
    return httpAuth.post("/api/editUser", data);
  }
  onLogout(): Promise<object> {
    return httpAuth.post("/api/logout");
  }
  onSendMail(data: object): Promise<object> {
    return http.post("/api/mail", data);
  }
  onUpload(form: FormData): Promise<object> {
    return httpUpload.post("/api/upload", form);
  }
}

export default new UserApiService();
