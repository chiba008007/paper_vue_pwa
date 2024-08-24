<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const router = useRouter();
const pwdForgetClick = () => {
  router.push({ name: "forget" });
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
        <v-btn class="w-100" color="primary">ログイン</v-btn>
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
