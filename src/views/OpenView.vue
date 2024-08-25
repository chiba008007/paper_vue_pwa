<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SwitchComponent from "../components/SwitchComponent.vue";
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="font-weight-black text-h6">表示可否設定ページ</p>
        <p class="mt-2">
          表示可否の切り替えを行います。<br />
          非公開中は、ログイン対象者様のみ名刺ページの確認が可能です。
        </p>

        <SwitchComponent label="未公開" :inset="true"></SwitchComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
