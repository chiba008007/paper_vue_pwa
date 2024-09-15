<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
type TVariant = VCard["$props"]["variant"];
type TDensity = VCard["$props"]["density"];

interface Props {
  variant?: TVariant;
  density?: TDensity;
  label?: string;
  autoGrow?: boolean | string;
  hideDetails?: boolean | string;
  type?: string;
  rules?: string | undefined | object;
  postflag?: boolean;
  name?: string;
  value?: string;
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
});

const emit = defineEmits<{
  (e: "onKeyup", value: string, name: string | undefined): void;
  (e: "onBlur", value: string, name: string | undefined): void;
}>();
</script>
<template>
  <v-text-field
    :label="props.label"
    rows="1"
    :variant="props.variant"
    :auto-grow="props.autoGrow"
    :hide-details="props.hideDetails"
    :type="props.type"
    :rules="props.rules"
    :model-value="props.value"
    @keyup="emit('onKeyup', $event.target.value, props.name)"
    @blur="emit('onBlur', $event.target.value, props.name)"
  >
    <template v-slot:prepend v-if="props.postflag"> 〒 </template>
  </v-text-field>
</template>
