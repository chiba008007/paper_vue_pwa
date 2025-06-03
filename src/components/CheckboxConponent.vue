<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
interface Props {
  label?: string | undefined;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
});
</script>
<template>
  <v-checkbox
    :label="props.label"
    density="compact"
    hide-details="auto"
  ></v-checkbox>
</template>
