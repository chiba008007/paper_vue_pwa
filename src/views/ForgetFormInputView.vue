<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

import UserApiService from "../services/UserApiService";
import { checkPassword } from "../functions/validate";
import queryString from "query-string";

const form = ref({
  password: "",
  passwordConf: "",
});
const sendflag = ref(true);

const onblur = () => {
  sendflag.value = true;
  if (
    form.value.password == form.value.passwordConf &&
    checkPassword(form.value.password).length == 0
  ) {
    sendflag.value = false;
  }
};
const filter = queryString.parse(location.search);
const pwdSendClick = () => {
  let params = {};
  params = {
    password: form.value.password,
    forgetcode: filter.c,
  };
  UserApiService.forgetPasswordInput(params)
    .then((res: any) => {
      sendflag.value = true;
      location.href = "/?code=" + res.data;
    })
    .catch(($e) => {
      console.log("ERROR");
      console.log($e);
    });
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        新しいパスワードを入力してください。<br />
        4文字以上半角英数字で入力してください。
        <TextComponent
          label="パスワード"
          variant="outlined"
          type="text"
          :rules="checkPassword(form.password)"
          :hideDetails="`auto`"
          @onBlur="(e) => ((form.password = e), onblur())"
        ></TextComponent>
        <TextComponent
          class="mt-2"
          label="確認用パスワード"
          variant="outlined"
          type="text"
          @onBlur="(e) => ((form.passwordConf = e), onblur())"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ButtonComponent
          class="w-100"
          color="primary"
          :label="`送信`"
          :disabled="sendflag"
          @onClick="pwdSendClick()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
