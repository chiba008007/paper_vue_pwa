<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
type TVariant = VCard["$props"]["variant"];

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | string;
  items?: object;
  errormessage?: string;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  autoGrow: true,
  hideDetails: "auto",
  items: undefined,
  errormessage: "",
  value: "",
});
const emit = defineEmits<{
  (e: "onBlur", value: string): void;
}>();
</script>
<template>
  <v-select
    :label="props.label"
    :items="props.items"
    :variant="props.variant"
    :hideDetails="props.hideDetails"
    :model-value="props.value"
    :error-messages="props.errormessage"
    @blur="emit('onBlur', $event.target.value)"
  ></v-select>
</template>
