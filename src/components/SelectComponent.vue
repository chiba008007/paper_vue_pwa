<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
type TVariant = VCard["$props"]["variant"];

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | string;
  items?: object;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  autoGrow: true,
  hideDetails: true,
  items: undefined,
});
</script>
<template>
  <v-select
    :label="props.label"
    :items="props.items"
    :variant="props.variant"
    :hideDetails="props.hideDetails"
  ></v-select>
</template>
