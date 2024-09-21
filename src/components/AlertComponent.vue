<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";

interface Props {
  text?: string;
  type?: string;
}
const emit = defineEmits<{
  (e: "onClick"): void;
}>();
const props = withDefaults(defineProps<Props>(), {
  text: "",
  type: "success",
});
</script>
<template>
  <v-alert
    :text="props.text"
    :type="props.type"
    @click="emit('onClick')"
  ></v-alert>
</template>
