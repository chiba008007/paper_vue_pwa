<script setup lang="ts">
import { ref } from "vue";
import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
import TemplateComponent1 from "@/components/TemplateComponent1.vue";
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
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-5 bg-white">
        <v-row class="mt-1">
          <v-col cols="12">
            <p class="font-weight-black text-h6">名刺データ新規申し込み</p>
          </v-col>
        </v-row>
        <v-row class="mt-1">
          <v-col cols="12">
            <p class="font-weight-black text-h6">テンプレート選択</p>
            <TemplateComponent1></TemplateComponent1>
          </v-col>
        </v-row>
      </v-col>
      <NewWorld2Right></NewWorld2Right>
    </v-row>
  </v-container>
</template>
<style type="text/css">
#buttonFix {
  position: fixed;
  bottom: 10px;
  left: 1%;
  z-index: 10;
  width: 98%;
}
</style>
