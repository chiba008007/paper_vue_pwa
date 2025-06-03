<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  width?: string | number;
  aspect?: number;
  videoUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: undefined,
  aspect: 0,
  videoUrl: undefined,
});
</script>
<template>
  <video :src="props.videoUrl" controls width="100%"></video>
</template>
