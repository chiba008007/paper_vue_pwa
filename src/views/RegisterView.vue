<script setup lang="ts">
import { ref } from "vue";
import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
import TemplateComponent1 from "@/components/TemplateComponent1.vue";
import Template1Selected from "@/components/Template1Selected.vue";
import UserApiService from "@/services/UserApiService";
import { useRoute } from "vue-router";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { d_Path } from "@/plugins/const";
import ButtonComponent from "@/components/ButtonComponent.vue";
const route = useRoute();
const token = route.params.token as string;
const user_id = ref(0);
const loadingFlag = ref(false);
const data = ref();
// テンプレートデータ取得
loadingFlag.value = true;
UserApiService.getRegistedUserData({
  code: token,
})
  .then((res: any) => {
    loadingFlag.value = false;
    data.value = res.data;
    data.value["title1_image_checked"] = false;
    for (let i = 1; i <= 5; i++) {
      let key = "image" + i + "_checked";
      data.value[key] = false;
    }
    for (let i = 0; i <= 2; i++) {
      data.value["comments"][i]["icon_checked"] = false;
    }

    user_id.value = res.data.user_id;
  })
  .catch(() => {
    alert("error");
  });

// スクロール位置を指定する関数
const scrollToPosition = (elementName: string) => {
  window.location.href = `/home#${elementName}`;
};
const inputFlag = ref(true);
const confClick = () => {
  inputFlag.value = false;
};
const registClick = () => {
  console.log(data.value);
};
const setOnImages = (
  e: string | boolean,
  type: string,
  clumn: string,
  key: number
) => {
  if (clumn === "icon") {
    data.value[type][key][clumn] = d_Path + e;
  } else {
    data.value[type][key][clumn] = e;
  }
};
const setOnImageCheckbox = (
  e: string | boolean,
  type: string,
  clumn: string,
  key: number
) => {
  data.value[type][key][clumn] = !e;
};
</script>
<template>
  <v-container style="background-color: rgb(241, 239, 231)">
    <LoadingComponent v-if="loadingFlag"></LoadingComponent>
    <v-row>
      <NewWorld2Left
        @scrollToPosition="(e:string) => scrollToPosition(e)"
      ></NewWorld2Left>
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-5 bg-white">
        <v-row class="mt-1">
          <v-col cols="12">
            <p class="font-weight-black text-h6">名刺データ新規申し込み</p>
          </v-col>
        </v-row>
        <v-row
          class="pa-5 position-sticky top-0"
          style="z-index: 10000; background-color: rgba(238, 238, 238, 0.6)"
        >
          <v-col cols="8">
            <ButtonComponent
              label="確認"
              class="bg-success w-100"
              @onClick="confClick()"
              v-if="inputFlag"
            ></ButtonComponent>
            <ButtonComponent
              label="戻る"
              class="bg-info w-100"
              @onClick="inputFlag = true"
              v-else
            ></ButtonComponent>
          </v-col>
          <v-col cols="4">
            <ButtonComponent
              label="登録"
              class="bg-red w-100"
              @onClick="registClick()"
            ></ButtonComponent>
          </v-col>
          <v-col cols="12" v-if="inputFlag">
            <ul>
              <li>項目の表示が不要の場合は未入力で登録してください。</li>
              <li>グラフ表示有効はタイトルを入力してください。</li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="mt-1">
          <v-col cols="12">
            <TemplateComponent1
              v-if="inputFlag"
              @updateTopImage="(e, type) => (data[type] = e)"
              @onKeyup="(e, type) => (data[type] = e)"
              @onChecked="(e, type) => (data[type] = !e)"
              @onImageChecked="(e:boolean, type:string) => (data[type] = !e)"
              @onPoints="(e, type, key) => (data[type][key] = e)"
              @onTimeLine="
                (e, type, clumn, key) => (data[type][key][clumn] = e)
              "
              @onCheckSNS="
                (e, type, clumn, key) => (data[type][key][clumn] = !e)
              "
              @onImages="
                (e, type, clumn, key) => setOnImages(e, type, clumn, key)
              "
              @onImageCheckbox="
                (e, type, clumn, key) => setOnImageCheckbox(e, type, clumn, key)
              "
              :data="data"
              :user_id="user_id"
            ></TemplateComponent1>

            <Template1Selected v-else :data="data"></Template1Selected>
          </v-col>
        </v-row>
      </v-col>
      <NewWorld2Right></NewWorld2Right>
    </v-row>
  </v-container>
</template>
<style type="text/css">
#buttonFix {
  position: fixed;
  bottom: 10px;
  left: 1%;
  z-index: 10;
  width: 98%;
}
</style>
