<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";

interface Props {
  width?: string | number;
  aspect?: string;
  src?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: undefined,
  aspect: undefined,
  src: undefined,
});
</script>
<template>
  <v-img
    :width="props.width"
    :aspect-ratio="props.aspect"
    cover
    :src="props.src"
  ></v-img>
</template>
