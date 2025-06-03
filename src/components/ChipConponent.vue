<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
interface Props {
  text?: string;
  variant?: "text" | "outlined" | "flat" | "elevated" | "tonal" | "plain";
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  variant: "elevated",
  class: "",
});
</script>
<template>
  <v-chip :variant="props.variant" :class="props.class">{{
    props.text
  }}</v-chip>
</template>
