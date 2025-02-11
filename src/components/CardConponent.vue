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
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  height: undefined,
  width: undefined,
  color: undefined,
  class: undefined,
  text: "",
  title: "",
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
    :title="props.title"
  >
    <v-card-text class="text-caption pa-0 ma-0 pl-3 text-black">{{
      props.text
    }}</v-card-text>
  </v-card>
</template>
