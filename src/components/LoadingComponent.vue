<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  label?: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  type: "",
});
</script>
<template>
  <div id="loading">
    <v-progress-circular
      color="primary"
      :size="128"
      :width="12"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<style type="text/css">
#loading {
  position: absolute;
  background-color: rgba(100, 100, 100, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 100000;
  div {
    position: absolute;
    top: 50px;
    left: 50%;
    right: 50%;
    margin-left: -50px;
  }
}
</style>
