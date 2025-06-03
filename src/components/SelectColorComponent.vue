<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref, watch } from "vue";
import type { VSelect } from "vuetify/components";

type TVariant = VSelect["$props"]["variant"];

interface Item {
  value: string;
  color: string;
}

interface Props {
  variant?: TVariant;
  label?: string;
  hideDetails?: boolean | "auto";
  items?: Item[];
  errormessage?: string;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  label: "",
  hideDetails: "auto",
  items: () => [],
  errormessage: "",
  value: "",
});

const emit = defineEmits<{
  (e: "onBlur", value: string): void;
  (e: "update:value", value: string): void;
}>();

// バインディング用 v-model の内部値
const model = ref(props.value);

// 外からの値変更を反映
watch(
  () => props.value,
  (val) => (model.value = val)
);

// 値が変わったら親に通知
watch(model, (val) => emit("update:value", val));
</script>

<template>
  <v-select
    v-model="model"
    :items="props.items"
    :item-value="'value'"
    :item-title="'value'"
    :label="props.label"
    :variant="props.variant"
    :hide-details="props.hideDetails"
    :error-messages="props.errormessage"
    @blur="emit('onBlur', model)"
  >
    <!-- 選択済みの表示 -->
    <template #selection="{ item }">
      <div
        :style="{
          backgroundColor: item.raw.color,
          color: '#fff',
          padding: '4px 8px',
          borderRadius: '4px',
        }"
      >
        {{ item.raw.value }}
      </div>
    </template>
  </v-select>
</template>
