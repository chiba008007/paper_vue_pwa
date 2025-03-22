<script setup lang="ts">
import { ref } from "vue";
import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
import ImgConponent from "@/components/ImgConponent.vue";
import { useRouter } from "vue-router";

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

      <!-- 中央カラム（全デバイスで表示） -->
      <v-col
        cols="12"
        md="6"
        class="scrollable-column ma-0 pa-0"
        style="height: 100vh"
      >
        <ImgConponent
          aspect-ratio="16/9"
          cover
          :src="require('@/assets/Sponnect.png')"
          class="min-image"
        ></ImgConponent>
        <p class="font-weight-black text-h6">
          新規申し込みありがとうございます
        </p>
        <p class="mt-2">
          ご登録いただきましたメールアドレスに問合せ用フォームURLを送信いたしました。
        </p>
        <p class="mt-2">問合せ用フォームURLより登録をお願いいたします。</p>
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
