<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";

interface Props {
  variant?:
    | "outlined"
    | "underlined"
    | "filled"
    | "plain"
    | "solo"
    | "solo-inverted"
    | "solo-filled"
    | undefined;
  density?: "default" | "comfortable" | "compact" | undefined;
  label?: string;
  autoGrow?: boolean;
  hideDetails?: boolean;
  type?: string;
  rowHeight?: number;
  rows?: number;
  value?: string | undefined;
  name?: string;
  messages?: string;
}

const emit = defineEmits<{
  (e: "onKeyup", value: string, name: string | undefined): void;
  (e: "onBlur", value: string, name: string | undefined): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  autoGrow: true,
  hideDetails: true,
  type: "",
  value: "",
  name: "",
  messages: "",
});
</script>
<template>
  <v-textarea
    :label="props.label"
    :variant="props.variant"
    :row-height="props.rowHeight"
    :rows="props.rows"
    :hide-details="props.hideDetails"
    :model-value="props.value"
    :messages="props.messages"
    @keyup="emit('onKeyup', $event.target.value, props.name)"
    @blur="emit('onBlur', $event.target.value, props.name)"
  ></v-textarea>
</template>
