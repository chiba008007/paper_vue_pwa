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
const user = useStoreUser();
const onLogin = () => {
  let data = {
    email: "micheal.marquardt@example.com",
    password: "password",
  };
  UserApiService.getPost(data)
    .then((response: any) => {
      user.setUserDataToken(response.data.token);
      user.setUserData(response.data.user);
      alert(user.isLogin);
    })
    .catch(() => {
      alert("LOGIN ERROR");
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
