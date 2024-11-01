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
    <v-progress-circular color="primary" indeterminate></v-progress-circular>
  </div>
</template>
<style type="text/css">
#loading {
  position: absolute;
  background-color: #ccc;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 10%;
  z-index: 10px;
  div {
    position: absolute;
    top: 30%;
    left: 50%;
    right: 50%;
    margin-left: -10px;
  }
}
</style>
