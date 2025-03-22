<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
type TVariant = VCard["$props"]["variant"];
type TDensity = VCard["$props"]["density"];

interface Props {
  variant?: TVariant;
  density?: TDensity;
  height?: string | number;
  width?: string | number;
  color?: string;
  class?: string;
  text?: string;
  pa?: string;
  ma?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  height: undefined,
  width: undefined,
  color: undefined,
  class: undefined,
  text: "",
  pa: "pa-0",
  ma: "ma-0",
});
</script>
<template>
  <v-card
    :variant="props.variant"
    :density="props.density"
    :height="props.height"
    :width="props.width"
    :color="props.color"
    :class="props.color"
    :pa="props.pa"
    :ma="props.ma"
  >
    <v-card-text
      class="text-caption pl-3 text-black"
      :class="[props.ma, props.pa]"
      >{{ props.text }}</v-card-text
    >
  </v-card>
</template>
