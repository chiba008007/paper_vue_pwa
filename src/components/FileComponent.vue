<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";
import { prop } from "vue-class-component";
import type { VCard } from "vuetify/components";
type TVariant = VCard["$props"]["variant"];

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | string;
  name?: string;
}
const emit = defineEmits<{
  (e: "onKeyup", value: string, name: string | undefined): void;
  (e: "onBlur", value: string, name: string | undefined): void;
  (e: "onChange", value: string, name: string | undefined): void;
  (e: "onUpdate", value: string, name: string | undefined): void;
}>();
const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: undefined,
  label: "",
  hideDetails: true,
  items: undefined,
  name: undefined,
});
</script>
<template>
  <v-file-input
    accept="image/jpeg"
    :label="props.label"
    :variant="props.variant"
    :hide-details="props.hideDetails"
    @update:modelValue="emit('onUpdate', $event, props.name)"
    @change="emit('onChange', $event, props.name)"
  ></v-file-input>
</template>
