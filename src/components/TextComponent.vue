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
  hideDetails?: boolean;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  autoGrow: true,
  hideDetails: true,
  type: "",
});
</script>
<template>
  <v-text-field
    :label="props.label"
    rows="1"
    :variant="props.variant"
    :auto-grow="props.autoGrow"
    :hide-details="props.hideDetails"
    :type="props.type"
  ></v-text-field>
</template>
