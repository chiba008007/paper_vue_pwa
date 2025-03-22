<template>
  <NewWorld :style="{ backgroundColor: '#F1EFE7' }"></NewWorld>
</template>
<link rel="stylesheet" href="css/style.css" />
<script lang="ts">
import { defineComponent } from "vue";

// Components
import NewWorld from "@/components/NewWorld2.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    //HelloWorld,
    NewWorld,
  },
});
</script>
