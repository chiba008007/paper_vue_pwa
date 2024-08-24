<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
type TVariant = VCard["$props"]["variant"];

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  hideDetails: true,
  items: undefined,
});
</script>
<template>
  <v-file-input
    :label="props.label"
    :variant="props.variant"
    :hide-details="props.hideDetails"
  ></v-file-input>
</template>
