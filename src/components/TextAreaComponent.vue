<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
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
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  autoGrow: true,
  hideDetails: true,
  type: "",
  value: "",
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
  ></v-textarea>
</template>
