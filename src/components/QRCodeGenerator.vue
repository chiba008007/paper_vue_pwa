<script setup lang="ts">
import VueQrcode from "@chenfengyuan/vue-qrcode";
import { useRoute } from "vue-router";
const route = useRoute();
const fullUrl = window.location.origin + route.fullPath;
</script>
<template>
  <VueQrcode :value="fullUrl"></VueQrcode>
</template>
