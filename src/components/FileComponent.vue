<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";
import { prop } from "vue-class-component";
import type { VFileInput } from "vuetify/components";
import CheckboxConponent from "./CheckboxConponent.vue";
type TVariant = VFileInput["$props"]["variant"];

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | "auto";
  name?: string;
  checkboxlabel?: string;
  density?: "default" | "comfortable" | "compact" | undefined;
}
const emit = defineEmits<{
  (e: "onKeyup", value: string, name: string | undefined): void;
  (e: "onBlur", value: string, name: string | undefined): void;
  (e: "onChange", value: string, name: string | undefined): void;
  (e: "onUpdate", value: string, name: string | undefined): void;
}>();
const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: "compact",
  label: "",
  hideDetails: true,
  items: undefined,
  name: undefined,
});
// 型補完しやすくするための型ガード関数
function extractFileName(input: File | File[] | null | undefined): string {
  if (Array.isArray(input)) {
    return input[0]?.name ?? "";
  }
  return input?.name ?? "";
}
function onUpdate(files: File | File[] | null) {
  emit("onUpdate", extractFileName(files), props.name);
}

function onChange(files: File | File[] | null) {
  emit("onChange", extractFileName(files), props.name);
}
</script>
<template>
  <div class="d-flex flex-column w-100">
    <v-file-input
      :density="props.density"
      accept="image/jpeg, image/png, image/gif, video/mp4, video/webm"
      :label="props.label"
      :variant="props.variant"
      :hide-details="props.hideDetails"
      @update:modelValue="onUpdate"
      @change="onChange"
      class="custom-white-file-input"
    ></v-file-input>

    <CheckboxConponent
      :label="props.checkboxlabel"
      v-if="props.checkboxlabel"
      class="ma-0 pa-0"
    ></CheckboxConponent>
  </div>
</template>
<style scoped>
.custom-white-file-input ::v-deep .v-field__input {
  background-color: #fff !important;
}
</style>
