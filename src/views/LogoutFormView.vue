<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import UserApiService from "../services/UserApiService";
import { useStoreUser } from "../store/user";
import queryString from "query-string";
const filter = queryString.parse(location.search);

const router = useRouter();
const user = useStoreUser();

const onLogout = () => {
  UserApiService.onLogout()
    .then((res: any) => {
      user.isLogin = false;
      router.push({ name: "top", query: { code: filter.code } });
    })
    .catch(($e) => {
      alert("LOGOUT ERROR");
    });
};
</script>
<template>
  <v-container>
    <p>ログアウトします。よろしいでしょうか。</p>
    <v-row>
      <v-col cols="12" class="mt-5">
        <ButtonComponent
          color="primary"
          class="w-100"
          :variant="`elevated`"
          :label="`ログアウト`"
          @onClick="onLogout()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
