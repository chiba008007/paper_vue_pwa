<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";
import { prop } from "vue-class-component";

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
  autoGrow?: boolean | string;
  hideDetails?: boolean | "auto";
  type?: string;
  rules?: Array<(value: any) => boolean | string> | undefined;
  postflag?: boolean;
  name?: string;
  value?: string | number;
  messages?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  autoGrow: true,
  hideDetails: true,
  type: "text",
  postflag: false,
  name: undefined,
  value: undefined,
  messages: "",
});

const emit = defineEmits<{
  (e: "onKeyup", value: string, name: string | undefined): void;
  (e: "onBlur", value: string, name: string | undefined): void;
}>();
</script>
<template>
  <v-text-field
    :label="props.label"
    :variant="props.variant"
    :auto-grow="props.autoGrow"
    :hide-details="props.hideDetails"
    :type="props.type"
    :rules="props.rules"
    :model-value="props.value"
    :messages="props.messages"
    :density="props.density"
    @keyup="emit('onKeyup', $event.target.value, props.name)"
    @blur="emit('onBlur', $event.target.value, props.name)"
  >
    <template v-slot:prepend v-if="props.postflag"> 〒 </template>
  </v-text-field>
</template>
