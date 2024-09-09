<script setup lang="ts">
import UserHelpers from "../functions/userHelper";

const clickItem = () => {
  alert(111);
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
        :prepend-avatar="`https://randomuser.me/api/portraits/women/8.jpg`"
        @click="clickItem()"
      >
        <v-list-item-title>株式会社サンプル </v-list-item-title>
        <v-list-item-subtitle>佐藤太郎 様</v-list-item-subtitle>
        <v-list-item-subtitle class="text-right"
          >0000/00/00 [取込済]</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item
        :prepend-avatar="`https://randomuser.me/api/portraits/women/8.jpg`"
        @click="clickItem()"
      >
        <v-list-item-title>株式会社サンプル </v-list-item-title>
        <v-list-item-subtitle>佐藤太郎 様</v-list-item-subtitle>
        <v-list-item-subtitle class="text-right"
          >0000/00/00 [取込済]</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item
        :prepend-avatar="`https://randomuser.me/api/portraits/women/8.jpg`"
        @click="clickItem()"
      >
        <v-list-item-title>株式会社サンプル </v-list-item-title>
        <v-list-item-subtitle>佐藤太郎 様</v-list-item-subtitle>
        <v-list-item-subtitle class="text-right"
          >0000/00/00 [取込済]</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item
        :prepend-avatar="`https://randomuser.me/api/portraits/women/8.jpg`"
        @click="clickItem()"
      >
        <v-list-item-title>株式会社サンプル </v-list-item-title>
        <v-list-item-subtitle>佐藤太郎 様</v-list-item-subtitle>
        <v-list-item-subtitle class="text-right"
          >0000/00/00 [取込済]</v-list-item-subtitle
        >
      </v-list-item>
    </v-list>
  </v-container>
</template>
