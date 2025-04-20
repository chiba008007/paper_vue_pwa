<script setup lang="ts">
import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
// スクロール位置を指定する関数
const scrollToPosition = (elementName: string) => {
  window.location.href = `/home#${elementName}`;
};
</script>
<template>
  <v-container style="background-color: rgb(241, 239, 231)">
    <v-row>
      <NewWorld2Left
        @scrollToPosition="(e:string) => scrollToPosition(e)"
      ></NewWorld2Left>
      <v-col
        cols="12"
        md="6"
        class="scrollable-column ma-0 pa-5 bg-white"
        style="min-height: 800px"
      >
        <p class="font-weight-black text-h6">
          新規申し込みありがとうございます。
        </p>
        <p class="mt-2">
          この度は新規申し込みをいただき、誠にありがとうございます。<br />
          お客様のご要望にお応えできるよう、スタッフ一同、精一杯努めさせていただきます。<br />
          申し込みを承りました。<br />
          名刺カードが届くまで2～3週間ほどお待ちください。<br />
          今後ともご愛顧賜りますよう、よろしくお願い申し上げます。<br />
          何かご不明な点やご質問がございましたら、お気軽にお問い合わせください。<br />
          引き続き、よろしくお願い申し上げます。
        </p>
      </v-col>
      <NewWorld2Right></NewWorld2Right>
    </v-row>
  </v-container>
</template>
<style scoped>
header {
  display: none !important;
}
</style>
