<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SwitchComponent from "../components/SwitchComponent.vue";
import UserApiService from "../services/UserApiService";
const isSwitchFlag = ref<boolean>(true);
const onSwitch = (e: Event) => {
  isSwitchFlag.value = isSwitchFlag.value ? false : true;
  let params = {
    display_flag: isSwitchFlag.value ? 1 : 0,
  };
  UserApiService.editUserDisplayStatus(params)
    .then((res: any) => {
      console.log(res);
    })
    .catch(($e: any) => {
      console.log($e);
      alert("editData ERROR");
    });
};

UserApiService.getUserEditData()
  .then((res: any) => {
    console.log(res);
    isSwitchFlag.value = res.data.user.display_flag ? true : false;
  })
  .catch(($e) => {
    console.log($e);
    alert("getData ERROR");
  });
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="font-weight-black text-h6">表示可否設定ページ</p>
        <p class="mt-2">
          表示可否の切り替えを行います。<br />
          非公開中は、ログイン対象者様のみ名刺ページの確認が可能です。
        </p>

        <SwitchComponent
          :label="isSwitchFlag ? `公開中` : `未公開`"
          :inset="true"
          name="status"
          :model="isSwitchFlag"
          @change="(e:Event) => onSwitch(e)"
        ></SwitchComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
