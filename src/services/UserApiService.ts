import http from "@/user-common";
import httpAuth from "@/auth-common";
import httpUpload from "@/upload-common";
import { ref } from "vue";

class UserApiService {
  getPost(data: object): Promise<object> {
    return http.post("/api/login", data);
  }
  getUserData(code: string | null): Promise<object> {
    return http.get("/api/top?code=" + code);
  }
  getUserEditData(): Promise<object> {
    return httpAuth.get("/api/getEditUser");
  }
  getReadData(): Promise<object> {
    return httpAuth.get("/api/getRead");
  }
  setReadEditData(data: object): Promise<object> {
    return httpAuth.post("/api/setRead", data);
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
  editUserDisplayStatus(form: object): Promise<object> {
    return httpAuth.post("/api/editUserStatus", form);
  }
  setRegist(data: object): Promise<object> {
    return http.post("api/setRegist", data);
  }
  setRegistData(form: object) {
    return http.post("/api/setRegistData", form);
  }
  getRegistData(data: object): Promise<object> {
    return http.post("/api/getRegistData", data);
  }
}

export default new UserApiService();
