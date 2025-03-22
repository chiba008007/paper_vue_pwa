<script setup lang="ts">
import { ref, defineEmits } from "vue";
import ImgConponent from "./ImgConponent.vue";

const items = ref<
  { title: string; value: number; icon: string; element: string }[]
>([]);

items.value.push(
  {
    title: "Sponnectとは",
    value: 1,
    icon: "mdi-clock",
    element: "targetElement1",
  },
  {
    title: "Sponnectの特徴",
    value: 2,
    icon: "mdi-account",
    element: "targetElement2",
  },
  {
    title: "ご注文の流れ",
    value: 3,
    icon: "mdi-flag",
    element: "targetElement3",
  },
  {
    title: "よくある質問",
    value: 4,
    icon: "mdi-folder",
    element: "targetElement4",
  },
  {
    title: "お問い合わせ",
    value: 5,
    icon: "mdi-history",
    element: "targetElement5",
  }
);
const emit = defineEmits<{
  (e: "scrollToPosition", value: string): void;
}>();
</script>

<template>
  <v-col cols="12" md="3" class="d-none d-md-block">
    <v-card variant="text">
      <v-card-title>
        <ImgConponent
          aspect-ratio="16/9"
          cover
          :src="require('@/assets/Sponnect.png')"
        ></ImgConponent>
      </v-card-title>
      <v-card-text>
        <v-list class="pa-0 my-list">
          <v-list-item
            v-for="item in items"
            :key="item.value"
            @click="emit('scrollToPosition', item.element)"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>
.my-list {
  background-color: #f1efe7;
}
</style>
