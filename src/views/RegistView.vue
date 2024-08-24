<script setup lang="ts">
import { ref } from "vue";
import TextComponent from "../components/TextComponent.vue";
import SelectComponent from "../components/SelectComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { prefecturesNameList } from "../plugins/const";
import { useRouter } from "vue-router";

const router = useRouter();
const reqiredRules = [(v: string) => !!v || "Name is required"];

const registSend = () => {
  router.push({ name: "registFin" });
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
        ></TextComponent>
        <SelectComponent
          label="都道府県"
          class="w-50 mt-2"
          :items="prefecturesNameList"
        ></SelectComponent>

        <TextComponent
          label="住所"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
          :rules="reqiredRules"
          class="mt-2"
        ></TextComponent>
        <ButtonComponent
          variant="flat"
          color="primary"
          class="w-100 mt-2"
          label="送信"
          @onClick="registSend()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
