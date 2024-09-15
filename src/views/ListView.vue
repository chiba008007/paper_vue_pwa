<script setup lang="ts">
import UserHelpers from "../functions/userHelper";

const clickItem = (url: string) => {
  location.href = url;
};
const user = UserHelpers();
const ls = user.getStrage();
console.log(ls);
</script>
<template>
  <v-container>
    <v-card-text>
      <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search templates"
        variant="solo"
        hide-details
        single-line
      ></v-text-field>
    </v-card-text>
    <v-list lines="three">
      <v-list-item
        v-for="list in ls"
        :key="list"
        :prepend-avatar="list.imagepath"
        @click="clickItem(list.url)"
      >
        <v-list-item-title>{{ list.company_name }} </v-list-item-title>
        <v-list-item-subtitle>{{ list.name }} 様</v-list-item-subtitle>
        <v-list-item-subtitle class="text-right"
          >{{ list.time }} [取込済]</v-list-item-subtitle
        >
      </v-list-item>
    </v-list>
  </v-container>
</template>
