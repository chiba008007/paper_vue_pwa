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
  mdi?: string;
  prependIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  type: "",
  mdi: "",
  prependIcon: "",
});
</script>
<template>
  <v-btn
    :variant="props.variant"
    :type="props.type"
    @click="$emit('onClick')"
    :prepend-icon="props.prependIcon"
  >
    {{ props.label }}
    <v-icon v-if="props.mdi">{{ props.mdi }}</v-icon>
  </v-btn>
</template>
