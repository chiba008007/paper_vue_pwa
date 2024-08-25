<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  label?: string;
  inset?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  inset: true,
});
</script>
<template>
  <v-switch :label="props.label" :inset="props.inset"></v-switch>
</template>
