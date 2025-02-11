<template>
  <!--
  <hello-world />
-->
  <NewWorld></NewWorld>
</template>
<link rel="stylesheet" href="css/style.css" />
<script lang="ts">
import { defineComponent } from "vue";

// Components
//import HelloWorld from "../components/HelloWorld.vue";
import NewWorld from "@/components/NewWorld.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    //HelloWorld,
    NewWorld,
  },
});
</script>
