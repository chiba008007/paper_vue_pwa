<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";

interface Props {
  width?: string | number;
  aspect?: number;
  src?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: undefined,
  aspect: 0,
  src: undefined,
});
</script>
<template>
  <div :style="{ width: props.width + 'px' }">
    <v-img :aspect-ratio="props.aspect" cover :src="props.src"></v-img>
  </div>
</template>
