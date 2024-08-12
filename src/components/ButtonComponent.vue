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
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  type: "",
});
</script>
<template>
  <v-btn
    :variant="props.variant"
    :type="props.type"
    @click="$emit('onClick')"
    >{{ props.label }}</v-btn
  >
</template>
