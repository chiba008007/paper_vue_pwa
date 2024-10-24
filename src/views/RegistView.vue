<script setup lang="ts">
import { ref } from "vue";

import TextComponent from "../components/TextComponent.vue";
import SelectComponent from "../components/SelectComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
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

const router = useRouter();
const { movePage } = UserHelpers();
const disableFlag = ref(true);
const form = ref({
  name: "",
  email: "",
  tel: "",
  postcode: "",
  pref: "",
  address: "",
});
const sendButton = () => {
  disableFlag.value = true;
  if (
    requiredValue(form.value.name, "お名前") &&
    checkEmail(form.value.email) &&
    checkTel(form.value.tel) &&
    checkPost(form.value.postcode) &&
    requiredValue(form.value.pref, "都道府県") &&
    requiredValue(form.value.address, "住所")
  ) {
    disableFlag.value = false;
  }
};
const onRegist = () => {
  //movePage('registFin');
  alert(form.value.name);
  // alert(form.value.postcode);
  // alert(form.value.pref);
  // alert(form.value.address);
};
const fetchAddress = (postcode: string) => {
  new YubinBangoCore(postcode, (value: any) => {
    form.value.postcode = postcode;
    form.value.pref = value.region;
    form.value.address = value.locality + value.street;
  });
};
</script>
<template>
  <v-container>
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
          @onBlur="(e) => ((form.name = e), sendButton())"
        ></TextComponent>
      </v-col>
      <v-col cols="12">
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          type="text"
          :value="form.email"
          :hideDetails="`auto`"
          :rules="checkEmail(form.email)"
          @onBlur="(e) => ((form.email = e), sendButton())"
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
          :rules="checkTel(form.tel)"
          @onBlur="(e) => (form.tel = e)"
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
          :rules="checkPost(form.postcode)"
          messages="例)000-0000"
          @onKeyup="(e) => fetchAddress(e)"
        ></TextComponent>
        <SelectComponent
          label="都道府県"
          class="w-50 mt-2"
          :items="prefecturesNameList"
          :value="form.pref"
          :rules="requiredValue(form.pref, '都道府県')"
          @onBlur="(e) => ((form.pref = e), sendButton())"
        ></SelectComponent>

        <TextComponent
          label="住所"
          variant="outlined"
          type="text"
          :hideDetails="`auto`"
          class="mt-2"
          :value="form.address"
          :rules="requiredValue(form.address, '住所')"
          @onKeyup="(e) => (form.address = e)"
        ></TextComponent>
        <ButtonComponent
          variant="flat"
          color="primary"
          class="w-100 mt-2"
          label="送信"
          @onClick="onRegist()"
          :disabled="disableFlag"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
