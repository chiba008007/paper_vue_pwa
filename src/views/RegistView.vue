<script setup lang="ts">
import { ref } from "vue";

import TextComponent from "../components/TextComponent.vue";
import SelectComponent from "../components/SelectComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import { prefecturesNameList } from "../plugins/const";
import { useRouter } from "vue-router";
import UserHelpers from "../functions/userHelper";
import { Core as YubinBangoCore } from "yubinbango-core2";
import {
  requiredValue,
  checkEmail,
  checkTel,
  checkPost,
} from "../functions/validate";
import UserApiService from "../services/UserApiService";
import AlertComponent from "@/components/AlertComponent.vue";

import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
import ImgConponent from "@/components/ImgConponent.vue";

const useemail = ref([{}]);
UserApiService.sameMail().then((res) => {
  res.data.map(function (value: any) {
    useemail.value.push(value.email);
  });
});
import CardRegistConfConponent from "@/components/CardRegistConfConponent.vue";
const router = useRouter();
const mailSameFlag = ref(false);
const { movePage } = UserHelpers();
const disableFlag = ref(true);
const loadFlag = ref(false);
const form = ref({
  name: "",
  email: "",
  tel: "",
  postcode: "",
  pref: "",
  address: "",
});

const sendButtonFlag = () => {
  disableFlag.value = true;
  mailSameFlag.value = false;

  const nameValid = requiredValue(form.value.name, "お名前").every(
    (fn) => fn(form.value.name) === true
  );
  const emailValid = checkEmail().every((fn) => fn(form.value.email) === true);
  const telValid = checkTel().every((fn) => fn(form.value.tel) === true);
  const postValid = checkPost().every((fn) => fn(form.value.postcode) === true);

  if (useemail.value.indexOf(form.value.email) > 0) {
    disableFlag.value = true;
    mailSameFlag.value = true;
  } else if (nameValid && emailValid && telValid && postValid) {
    disableFlag.value = false;
  } else {
    disableFlag.value = true;
  }
};
const dialog = ref(false);
const confText = ref();
const onRegistConf = () => {
  dialog.value = true;
  confText.value = form.value;
};
const onRegist = () => {
  dialog.value = false;
  loadFlag.value = true;
  let params = {
    name: form.value.name,
    mail: form.value.email,
    tel: form.value.tel,
    post: form.value.postcode,
    pref: form.value.pref,
    address: form.value.address,
  };

  UserApiService.setRegist(params)
    .then(() => {
      loadFlag.value = false;
      movePage("registFin");
    })
    .catch(($e) => {
      console.log("ERROR");
      console.log($e);
    });
};
const fetchAddress = (postcode: string) => {
  new YubinBangoCore(postcode, (value: any) => {
    form.value.postcode = postcode;
    form.value.pref = value.region;
    form.value.address = value.locality + value.street;
  });
};
const scrollToPosition = () => {
  router.push("home");
};
</script>
<template>
  <v-container class="my-list">
    <v-row>
      <!-- 左カラム（モバイルでは非表示） -->
      <NewWorld2Left
        @scrollToPosition="(e:string) => scrollToPosition()"
      ></NewWorld2Left>

      <!-- 中央カラム（全デバイスで表示） -->
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-0">
        <ImgConponent
          aspect-ratio="16/9"
          cover
          :src="require('@/assets/Sponnect.png')"
          class="min-image"
        ></ImgConponent>

        <v-dialog v-model="dialog" persistent>
          <CardRegistConfConponent
            :text="confText"
            style="background-color: white"
            class="text-pre-wrap pa-4"
            @inputBack="dialog = false"
            @inputRegist="onRegist()"
          ></CardRegistConfConponent>
        </v-dialog>
        <LoadingComponent v-show="loadFlag"></LoadingComponent>
        <p class="font-weight-black text-h6">新規申込み</p>
        <v-row class="mt-1" dense>
          <v-col cols="12">
            <TextComponent
              label="お名前"
              variant="outlined"
              type="text"
              :value="form.name"
              :hideDetails="`auto`"
              :rules="requiredValue(form.name, 'お名前')"
              @onBlur="(e) => ((form.name = e), sendButtonFlag())"
            ></TextComponent>
          </v-col>
          <v-col cols="12">
            <TextComponent
              label="メールアドレス"
              variant="outlined"
              type="text"
              :value="form.email"
              :hideDetails="`auto`"
              :rules="checkEmail()"
              @onBlur="(e) => ((form.email = e), sendButtonFlag())"
            ></TextComponent>
          </v-col>
          <v-col cols="12">
            <TextComponent
              label="電話番号"
              variant="outlined"
              type="text"
              :value="form.tel"
              :hideDetails="`auto`"
              messages="例)090-0000-0000"
              :rules="checkTel()"
              @onBlur="(e) => ((form.tel = e), sendButtonFlag())"
            ></TextComponent>
          </v-col>
          <v-col cols="12">
            <p class="mb-2">名刺送り先住所</p>
            <TextComponent
              label="郵便番号"
              variant="outlined"
              type="text"
              :hideDetails="`auto`"
              class="w-75"
              :postflag="true"
              :value="form.postcode"
              :rules="checkPost()"
              messages="例)000-0000"
              @onKeyup="(e) => (fetchAddress(e), sendButtonFlag())"
            ></TextComponent>
            <SelectComponent
              label="都道府県"
              class="w-50 mt-2"
              :items="prefecturesNameList"
              :value="form.pref"
              :rules="requiredValue(form.pref, '都道府県')"
              @onBlur="(e) => ((form.pref = e), sendButtonFlag())"
            ></SelectComponent>

            <TextComponent
              label="住所"
              variant="outlined"
              type="text"
              :hideDetails="`auto`"
              class="mt-2"
              :value="form.address"
              :rules="requiredValue(form.address, '住所')"
              @onKeyup="(e) => ((form.address = e), sendButtonFlag())"
            ></TextComponent>
            <AlertComponent
              text="メールアドレスが重複しています。"
              type="error"
              v-if="mailSameFlag"
            ></AlertComponent>
            <ButtonComponent
              variant="flat"
              color="primary"
              class="w-100 mt-2"
              label="送信"
              @onClick="onRegistConf()"
              :disabled="disableFlag"
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
      </v-col>

      <!-- 右カラム（モバイルでは非表示） -->
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
