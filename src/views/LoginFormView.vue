<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import UserApiService from "../services/UserApiService";
import { useStoreUser } from "../store/user";

const router = useRouter();
const pwdForgetClick = () => {
  router.push({ name: "forget" });
};
const email = ref();
const password = ref();
const onKeyup = (e: any, name: string) => {
  if (name == "email") email.value = e.target.value;
  if (name == "password") password.value = e.target.value;
};
const user = useStoreUser();
const onLogin = () => {
  let data = {
    email: email.value,
    password: password.value,
  };
  UserApiService.getPost(data)
    .then((response: any) => {
      console.log(response.data);
      localStorage.setItem("userToken", JSON.stringify(response.data.token));
      user.setUserDataToken(response.data.token);
      user.setUserData(response.data.user);
      if (user.isLogin == true) {
        // router.push({ name: "top", query: { code: response.data.user.code } });
        location.href = "?code=" + response.data.user.code;
      }
    })
    .catch((e) => {
      alert("LOGIN ERROR" + e);
    });
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
          @keyup="(e:any) => onKeyup(e,'email')"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TextComponent
          label="パスワード"
          variant="outlined"
          autoGrow="auto"
          hideDetails="true"
          type="password"
          @keyup="(e:any) => onKeyup(e,'password')"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ButtonComponent
          color="primary"
          class="w-100"
          :variant="`elevated`"
          :label="`ログイン`"
          @onClick="onLogin()"
        ></ButtonComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ButtonComponent
          class="w-100"
          :variant="`plain`"
          :label="`パスワード忘れた人`"
          @onClick="pwdForgetClick()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
