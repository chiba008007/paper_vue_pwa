<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref } from "vue";
import { prop } from "vue-class-component";

interface Props {
  text?: string;
  selected?: string;
  templateList?: object;
  inline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "aaa",
  selected: "1",
  inline: false,
});
const internalSelected = ref(props.selected);
const emit = defineEmits<{
  (e: "onKeyup", value: string, name: string | undefined): void;
  (e: "onBlur", value: string, name: string | undefined): void;
}>();
</script>
<template>
  <v-radio-group v-model="internalSelected" column :inline="props.inline">
    <v-radio
      v-for="(label, key) in props.templateList"
      :key="key"
      :label="label"
      :value="key"
      class="mr-4"
    ></v-radio>
  </v-radio-group>
</template>
