<script setup lang="ts">
import { ref } from "vue";
import TextComponent from "../components/TextComponent.vue";
import TextAreaComponent from "../components/TextAreaComponent.vue";
import FileComponent from "../components/FileComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";

const editflag = ref(false);

const editButton = () => {
  editflag.value = true;
};
</script>
<template>
  <v-container>
    <p class="font-weight-black text-h6">名刺データ編集</p>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="表示名"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="所属"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="ふりがな"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <FileComponent
          label="自己画像アップロード"
          variant="outlined"
          hideDetails="auto"
        ></FileComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="会社名"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <FileComponent
          label="会社ロゴアップロード"
          variant="outlined"
          hideDetails="auto"
        ></FileComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="会社URL"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col cols="12">
        <TextAreaComponent
          label="会社情報"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
        ></TextAreaComponent>
        <TextComponent
          label="地図URL"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
        ></TextComponent>
        <div class="text-right">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25 mt-2"
            label="削除"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 mt-2 ml-1"
            label="追加"
          ></ButtonComponent>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="電話番号"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="生年月日"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <TextComponent
          label="スキル1"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
        <div class="text-right">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25 mt-2"
            label="削除"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 mt-2 ml-1"
            label="追加"
          ></ButtonComponent>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <TextComponent
          label="経歴タイトル"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
        ></TextComponent>
        <TextAreaComponent
          label="経歴内容"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
        ></TextAreaComponent>
        <div class="text-right">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25 mt-2"
            label="削除"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 mt-2 ml-1"
            label="追加"
          ></ButtonComponent>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <TextAreaComponent
          label="自己PR"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :rows="14"
        ></TextAreaComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <AlertComponent
          v-if="editflag"
          text="データ登録を行いました。"
          type="success"
          class="mb-2"
        ></AlertComponent>

        <ButtonComponent
          variant="flat"
          color="blue darken-1"
          class="w-100"
          label="登録"
          @onClick="editButton()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
