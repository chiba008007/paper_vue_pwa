<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import TextAreaComponent from "../components/TextAreaComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import UserHelpers from "../functions/userHelper";
const { movePage } = UserHelpers();

const router = useRouter();
const pwdSendClick = () => {
  movePage("questionFin");
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="font-weight-black text-h6">
          お問い合わせ内容をご入力ください
        </p>
        <TextComponent
          label="お名前"
          variant="outlined"
          type="text"
          hideDetails="auto"
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
        ></TextAreaComponent>
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
