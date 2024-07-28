<script lang="ts"></script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-textarea
          label="メールアドレス"
          rows="1"
          variant="outlined"
          auto-grow
          hide-details="false"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          label="パスワード"
          rows="1"
          variant="outlined"
          auto-grow
          hide-details="false"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn class="w-100" color="primary">ログイン</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn class="w-100" color="default">パスワード忘れた人</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
