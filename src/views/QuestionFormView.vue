<script setup lang="ts">
import { ref } from "vue";
import TextComponent from "../components/TextComponent.vue";
import TextAreaComponent from "../components/TextAreaComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import UserHelpers from "../functions/userHelper";
import UserApiService from "../services/UserApiService";
import LoadingComponent from "../components/LoadingComponent.vue";

import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
import ImgConponent from "@/components/ImgConponent.vue";
import { useRouter } from "vue-router";
const { movePage } = UserHelpers();
const loadFlag = ref(false);
const name = ref();
const email = ref();
const body = ref();

const pwdSendClick = () => {
  loadFlag.value = true;
  let data = {
    name: name.value,
    email: email.value,
    body: body.value,
  };
  UserApiService.onSendMail(data)
    .then(() => {
      loadFlag.value = false;
      movePage("questionFin");
    })
    .catch(() => {
      alert("send ERROR");
    });
};

const onKeyup = (e: any, type: string) => {
  if (type == "name") name.value = e.target.value;
  if (type == "email") email.value = e.target.value;
  if (type == "body") body.value = e.target.value;
};
const reqiredRules = [(v: string) => !!v || "必須入力です"];
const buttonDisabled = () => {
  let disabled = true;
  if (name.value && email.value && body.value) {
    disabled = false;
  }
  return disabled;
};
const router = useRouter();
const scrollToPosition = () => {
  router.push("home");
};
</script>
<template>
  <v-container class="my-list">
    <v-row>
      <!-- 左カラム（モバイルでは非表示） -->
      <NewWorld2Left @scrollToPosition="scrollToPosition()"></NewWorld2Left>
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-0">
        <v-row>
          <v-col cols="12">
            <ImgConponent
              aspect-ratio="16/9"
              cover
              :src="require('@/assets/Sponnect.png')"
              class="min-image"
            ></ImgConponent>
            <p class="font-weight-black text-h6">
              お問い合わせ内容をご入力ください
            </p>
            <TextComponent
              label="お名前"
              variant="outlined"
              type="text"
              hideDetails="auto"
              @keyup="(e:any) => onKeyup(e,'name')"
              :rules="reqiredRules"
            ></TextComponent>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <TextComponent
              label="メールアドレス"
              variant="outlined"
              type="text"
              hideDetails="auto"
              @keyup="(e:any) => onKeyup(e,'email')"
              :rules="reqiredRules"
            ></TextComponent>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <TextAreaComponent
              hideDetails="auto"
              label="問合わせ内容"
              :rows="10"
              :row-height="10"
              variant="outlined"
              @keyup="(e:any) => onKeyup(e,'body')"
              :rules="reqiredRules"
            ></TextAreaComponent>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <ButtonComponent
              class="w-100"
              color="primary"
              :variant="`elevated`"
              :label="`送信`"
              @onClick="pwdSendClick()"
              :disabled="buttonDisabled()"
            ></ButtonComponent>
            <ButtonComponent
              variant="flat"
              color="red"
              class="w-100 mt-5"
              label="戻る"
              to="/home"
            ></ButtonComponent>
          </v-col>
        </v-row>
        <LoadingComponent v-show="loadFlag"></LoadingComponent>
      </v-col>
      <NewWorld2Right :src="require('@/assets/qr.png')"></NewWorld2Right>
    </v-row>
  </v-container>
</template>
<style scoped>
.my-list {
  background-color: #f1efe7;
}
.min-image {
  width: 160px;
  margin: 10px auto;
}
</style>
