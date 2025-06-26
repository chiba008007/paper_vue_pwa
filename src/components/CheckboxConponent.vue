<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  modelValue?: boolean;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update", value: boolean | null): void;
}>();
</script>

<template>
  <v-checkbox
    :model-value="props.modelValue ? true : false"
    @update:modelValue="emit('update', props.modelValue)"
    :label="props.label"
    density="compact"
    hide-details="auto"
  />
</template>
