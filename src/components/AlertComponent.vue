<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";

interface Props {
  text?: string;
  title?: string;
  type?: "success" | "error" | "warning" | "info" | undefined;
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
  <v-alert :type="props.type" @click="emit('onClick')" class="full-width">
    <div
      class="text-subtitle-1"
      v-if="props.title"
      style="white-space: pre-line"
    >
      {{ props.title }}
    </div>
    <div
      class="text-subtitle-2"
      v-if="props.text"
      style="white-space: pre-line"
    >
      {{ props.text }}
    </div>
  </v-alert>
</template>
<style lang="sass">
.v-timeline-item
  .v-timeline-item__body
    width: 100% !important
</style>
