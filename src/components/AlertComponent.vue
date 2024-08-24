<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  text?: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  type: "success",
});
</script>
<template>
  <v-alert :text="props.text" :type="props.type"></v-alert>
</template>
