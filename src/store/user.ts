import { defineStore } from "pinia";
import { useRouter, useRoute } from "vue-router";
export const useStoreUser = defineStore("user", {
  state: () => ({
    userdata: {},
    userToken: {},
    isLogin: false,
  }),
  actions: {
    setUserDataToken(data: string) {
      this.userToken = data;
      this.isLogin = true;
    },
    setUserData(data: object) {
      this.userdata = data;
    },
  },
});
