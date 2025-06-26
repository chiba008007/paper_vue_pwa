<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref } from "vue";

import type { VFileInput } from "vuetify/components";
import CheckboxConponent from "./CheckboxConponent.vue";
import UserApiService from "@/services/UserApiService";
type TVariant = VFileInput["$props"]["variant"];

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | "auto";
  name?: string;
  user_id?: number;
  checkboxlabel?: string;
  checked?: boolean;
  density?: "default" | "comfortable" | "compact" | undefined;
}
const emit = defineEmits<{
  (e: "onChange", value: string, name: string | undefined): void;
  (e: "onUpdate", value: string, name: string | undefined): void;
  (e: "updateTopImages", value: string, name: string | undefined): void;
  (e: "onChecked", value: boolean): void;
}>();
const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  density: "compact",
  label: "",
  hideDetails: true,
  items: undefined,
  name: undefined,
  checked: false,
});

function onUpdate(fileInput: File | File[] | undefined | null) {
  if (!fileInput) {
    console.warn("ファイルが未選択です");
    return;
  }

  const file = Array.isArray(fileInput) ? fileInput[0] : fileInput;

  if (!(file instanceof File)) {
    console.warn("無効なファイルです");
    return;
  }

  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  const formData = new FormData();
  formData.append("image", file);
  formData.append("user_id", String(props.user_id));
  formData.append("extension", extension);

  UserApiService.onUpload(formData)
    .then((res: { data?: string }) => {
      console.log("アップロード成功", res.data);
      emit("onUpdate", String(res.data), props.name);
    })
    .catch((err) => {
      console.error("アップロード失敗", err);
    });
}

const checked = ref(false);
const onCheckbox = (e: boolean | null) => {
  checked.value = e ? true : false;
  emit("onChecked", checked.value);
};
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
      class="custom-white-file-input"
    ></v-file-input>

    <CheckboxConponent
      v-if="props.checkboxlabel"
      :label="props.checkboxlabel"
      :modelValue="props.checked"
      class="ma-0 pa-0"
      @update="(e) => onCheckbox(e)"
    ></CheckboxConponent>
  </div>
</template>
<style scoped>
.custom-white-file-input ::v-deep .v-field__input {
  background-color: #fff !important;
}
</style>
