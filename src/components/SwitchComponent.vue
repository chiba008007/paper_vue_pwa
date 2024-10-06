<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";

interface Props {
  label?: string;
  inset?: boolean;
  name?: string;
  model: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  inset: true,
  name: "",
  model: true,
});
const emit = defineEmits<{
  (e: "onSwitch", value: string, name: string | undefined): void;
}>();
</script>
<template>
  <v-switch
    color="primary"
    :label="props.label"
    :inset="props.inset"
    :model-value="props.model"
    @change="emit('onSwitch', $event.target.value, props.name)"
  ></v-switch>
</template>
