<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
import ButtonComponent from "./ButtonComponent.vue";
type TVariant = VCard["$props"]["variant"];
type TDensity = VCard["$props"]["density"];

interface Props {
  variant?: TVariant;
  density?: TDensity;
  height?: string | number;
  width?: string | number;
  color?: string;
  class?: string;
  text?:
    | {
        name: string;
        syozoku: string;
        kana: string;
        myimage_path: "";
        company_name: "";
        company_image_path: "";
        company_url: "";
        company_address: [{ key: 0; value: ""; map_url: "" }];
        tel: "";
        email: "";
        skills: [{ key: 0; value: "" }];
        histories: [{ key: 0; title: ""; value: "" }];
        profile: "";
      }
    | any;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  height: undefined,
  width: undefined,
  color: undefined,
  class: undefined,
});
</script>
<template>
  <v-card
    :variant="props.variant"
    :density="props.density"
    :height="props.height"
    :width="props.width"
    :color="props.color"
    :class="props.class"
  >
    <template v-slot:text>
      <b>以下の内容で登録を行います。</b>
      <p class="text-caption">氏名</p>
      <p>{{ props.text?.name }}</p>
      <p class="text-caption">所属</p>
      <p>{{ props.text?.syozoku }}</p>
      <p class="text-caption">かな</p>
      <p>{{ props.text?.kana }}</p>
      <p class="text-caption">自己画像アップロード</p>
      <img
        :src="props.text?.myimage_path"
        class="w-50"
        v-if="props.text?.myimage_path"
      />
      <p class="text-caption">会社名</p>
      <p>{{ props.text?.company_name }}</p>
      <p class="text-caption">会社ロゴアップロード</p>
      <img
        :src="props.text?.company_image_path"
        class="w-50"
        v-if="props.text?.company_image_path"
      />
      <p class="text-caption">会社URL</p>
      <p>{{ props.text?.company_url }}</p>
      <p class="text-caption">メールアドレス</p>
      <p>{{ props.text?.email }}</p>

      <v-row
        class="mt-2"
        v-for="companyLoop in props.text?.company_address"
        :key="companyLoop.key"
      >
        <v-col cols="12">
          <p class="text-caption">会社住所</p>
          <p>{{ companyLoop.value }}</p>
          <p class="text-caption">地図場所</p>
          <p>{{ companyLoop.map_url }}</p>
        </v-col>
      </v-row>

      <p class="text-caption">会社電話番号</p>
      <p>{{ props.text?.tel }}</p>

      <p class="text-caption mb-2">スキル</p>
      <v-row v-for="skillLoop in props.text?.skills" :key="skillLoop.key">
        <v-col cols="12" class="pt-0 pb-0 mt-0">{{ skillLoop.value }}</v-col>
      </v-row>

      <p class="text-caption mb-2 mt-2">経歴</p>
      <v-row
        v-for="historyLoop in props.text?.histories"
        :key="historyLoop.key"
      >
        <v-col cols="12" class="pt-0 pb-0 mt-0">
          <div class="text-caption">経歴タイトル</div>
          {{ historyLoop.title }}
        </v-col>
        <v-col cols="12" class="pt-0 pb-0 mt-0">
          <div class="text-caption">経歴内容</div>
          {{ historyLoop.value }}</v-col
        >
      </v-row>

      <p class="text-caption mt-3">自己PR</p>
      <p>{{ props.text?.profile }}</p>

      <div class="mt-5">
        <ButtonComponent
          label="入力に戻る"
          @onClick="$emit('inputBack')"
        ></ButtonComponent>
        <ButtonComponent
          label="登録する"
          color="primary"
          class="ml-2"
          @onClick="$emit('inputRegist')"
        ></ButtonComponent>
      </div>
    </template>
  </v-card>
</template>
