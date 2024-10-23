<script setup lang="ts">
import { ref } from "vue";

import TextComponent from "../components/TextComponent.vue";
import SelectComponent from "../components/SelectComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { prefecturesNameList } from "../plugins/const";
import { useRouter } from "vue-router";
import UserHelpers from "../functions/userHelper";
import { Core as YubinBangoCore } from "yubinbango-core2";

const router = useRouter();
const reqiredRules = [(v: string) => !!v || "Name is required"];
const { movePage } = UserHelpers();
const disableFlag = ref(false);
const form = ref({
  postcode: "",
  pref: "",
  address: "",
});
const onRegist = () => {
  //movePage('registFin');
  alert(form.value.postcode);
  alert(form.value.pref);
  alert(form.value.address);
  alert(124);
};
const fetchAddress = (postcode: string) => {
  new YubinBangoCore(postcode, (value: any) => {
    console.log(value);
    form.value.postcode = postcode;
    form.value.pref = value.region;
    form.value.address = value.locality + value.street;
  });
};
</script>
<template>
  <v-container>
    <p class="font-weight-black text-h6">新規申込み</p>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="お名前"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
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
          autoGrow="auto"
          hideDetails="true"
          :rules="reqiredRules"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TextComponent
          label="電話番号"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
          :rules="reqiredRules"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="mb-2">名刺送り先住所</p>
        <TextComponent
          label="郵便番号"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
          :rules="reqiredRules"
          class="w-75"
          :postflag="true"
          :value="form.postcode"
          @onKeyup="(e) => fetchAddress(e)"
        ></TextComponent>
        <SelectComponent
          label="都道府県"
          class="w-50 mt-2"
          :items="prefecturesNameList"
          :value="form.pref"
          @onBlur="(e) => (form.pref = e)"
        ></SelectComponent>

        <TextComponent
          label="住所"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
          :rules="reqiredRules"
          class="mt-2"
          :value="form.address"
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
