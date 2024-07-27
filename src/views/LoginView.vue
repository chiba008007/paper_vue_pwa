<script lang="ts">
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    // required(v) {
    //   return !!v || "Field is required";
    // },
  },
};
</script>
<template>
  <v-container>
    <v-card class="mx-auto px-6 py-8" variant="plain">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <br />

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          ログイン
        </v-btn>
      </v-form>
      <v-btn link nuxt class="mt-4 w-100" variant="text">
        パスワード忘れた人
      </v-btn>
    </v-card>
  </v-container>
</template>
