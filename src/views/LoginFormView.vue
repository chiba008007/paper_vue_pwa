<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          autoGrow="true"
          hideDetails="true"
          type="text"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TextComponent
          label="パスワード"
          variant="outlined"
          autoGrow="true"
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
        <v-btn class="w-100" color="default">パスワード忘れた人</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
