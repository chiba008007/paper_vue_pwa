<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const sendflag = ref(false);
const router = useRouter();
const pwdSendClick = () => {
  alert(1111);
  sendflag.value = true;
};
</script>
<template>
  <v-container>
    <v-alert
      text="パスワード再設定メールを送信しました"
      type="success"
      v-if="sendflag"
    ></v-alert>
    <v-row>
      <v-col cols="12">
        登録しているメールアドレスを入力してください。
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          type="text"
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
