<script setup lang="ts">
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
      <NewWorld2Left @scrollToPosition="scrollToPosition()"></NewWorld2Left>
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-0">
        <v-col cols="12">
          <ImgConponent
            aspect-ratio="16/9"
            cover
            :src="require('@/assets/Sponnect.png')"
            class="min-image"
          ></ImgConponent>
          <p class="font-weight-black text-h6">
            お問い合わせありがとうございます
          </p>
          <p class="my-5">
            お問い合わせいただき、ありがとうございます。<br />
            ご記入いただいた内容を確認し、担当者が近日中にご連絡させていただきます。<br />
            通常、数日以内に回答をお送りするよう努めておりますが、状況によっては少々お時間をいただく場合がございますので、予めご了承ください。<br />
            何かご不明点や緊急のお問い合わせがある場合は、以下の連絡先まで直接ご連絡ください。
          </p>
          <p class="font-weight-black text-h6">連絡先</p>
          <p class="my-5">
            メールアドレス: admin@myselfpaper.online<br />
            また、ご質問やご意見などがございましたら、お気軽にお知らせください。<br />
            お手数をおかけしますが、しばらくお待ちいただけますようお願い申し上げます。
          </p>
        </v-col>
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
