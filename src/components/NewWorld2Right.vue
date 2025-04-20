<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import ImgConponent from "./ImgConponent.vue";
import QRCodeGenerator from "@/components/QRCodeGenerator.vue";
interface Props {
  src?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: "",
});
</script>
<template>
  <!-- 右カラム（モバイルでは非表示） -->
  <v-col cols="12" md="3" class="d-none d-md-block">
    <v-chip variant="elevated"> スマートフォンでアクセス </v-chip>
    <v-card class="mt-5">
      <v-card-text class="text-center">
        <QRCodeGenerator />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped></style>
