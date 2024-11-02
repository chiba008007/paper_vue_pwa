<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import UserApiService from "../services/UserApiService";

const form = ref({
  email: "",
});
const sendflag = ref(false);
const pwdSendClick = () => {
  let params = {};
  params = {
    email: form.value.email,
  };
  UserApiService.forgetPassword(params)
    .then((res) => {
      sendflag.value = true;
    })
    .catch(($e) => {
      alert("error");
      console.log("ERROR");
      console.log($e);
    });
};
</script>
<template>
  <v-container>
    <AlertComponent
      v-if="sendflag"
      text="パスワード再設定メールを送信しました"
      type="success"
    ></AlertComponent>
    <v-row>
      <v-col cols="12">
        登録しているメールアドレスを入力してください。
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          type="text"
          @onBlur="(e) => (form.email = e)"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ButtonComponent
          class="w-100"
          color="primary"
          :label="`送信`"
          @onClick="pwdSendClick()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
