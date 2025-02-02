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
      <b>個人情報確認</b><br />
      <b
        >以下の情報をご確認いただき、誤りがないかご確認ください。<br />
        内容に問題がない場合、「申込を完了」ボタンを押して次に進んでください。</b
      >
      <p class="text-caption">氏名</p>
      <p>{{ props.text?.name }}</p>

      <p class="text-caption">メールアドレス</p>
      <p>{{ props.text?.email }}</p>
      <p class="text-caption">電話番号</p>
      <p>{{ props.text?.tel }}</p>
      <p class="text-caption">名刺送付先</p>
      <p>〒 {{ props.text?.postcode }}</p>
      <p>{{ props.text?.pref }}</p>
      <p>{{ props.text?.address }}</p>

      <div class="mt-5">
        <ButtonComponent
          label="入力に戻る"
          @onClick="$emit('inputBack')"
        ></ButtonComponent>
        <ButtonComponent
          label="申込を完了"
          color="primary"
          class="ml-2"
          @onClick="$emit('inputRegist')"
        ></ButtonComponent>
      </div>
    </template>
  </v-card>
</template>
