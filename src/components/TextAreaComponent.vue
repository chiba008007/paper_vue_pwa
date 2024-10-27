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
  autoGrow?: boolean;
  hideDetails?: boolean | string;
  type?: string;
  rowHeight?: number;
  rows?: number;
  value?: string | undefined;
  name?: string;
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
    @keyup="emit('onKeyup', $event.target.value, props.name)"
    @blur="emit('onBlur', $event.target.value, props.name)"
  ></v-textarea>
</template>
