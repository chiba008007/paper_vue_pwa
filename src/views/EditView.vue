<script setup lang="ts">
import { ref } from "vue";
import TextComponent from "../components/TextComponent.vue";
import TextAreaComponent from "../components/TextAreaComponent.vue";
import FileComponent from "../components/FileComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import imgConponent from "../components/ImgConponent.vue";
import { requiredValue } from "@/functions/validate";

import UserApiService from "../services/UserApiService";
import queryString from "query-string";
import { imagePath } from "@/plugins/const";
import UserHelpers from "../functions/userHelper";
import LoadingComponent from "../components/LoadingComponent.vue";
import { fromJSON } from "flatted";
import { useStoreUser } from "@/store/user";

const store = useStoreUser();
const code = store.userdata as any;

const loadFlag = ref(false);
const {
  movePage,
  onAddCompany,
  onAddSkill,
  onAddHistory,
  setCompanyNameValue,
  setCompanyNameMapUrl,
  setSkillName,
  setHistoriesTitle,
  setHistoriesValue,
  moveLinkPageCode,
} = UserHelpers();

const filter = queryString.parse(location.search);
if (!filter.code || filter.code == "undefined") {
  moveLinkPageCode("edit", code.code);
}
const companyLoops = ref([
  {
    key: 1,
    id: 1,
    user_id: 1,
    address: "",
    map_url: "",
    company_address: "",
    value: "",
  },
]);
const skillLoops = ref([{ key: 1, id: 1, value: "", note: "" }]);
const historyLoops = ref([{ key: 1, id: 1, title: "", value: "", note: "" }]);

const form = ref({
  name: "",
  display_name: "",
  syozoku: "",
  kana: "",
  myimage_path: "",
  company_name: "",
  company_image_path: "",
  company_url: "",
  tel: "",
  email: "",
  profile: "",
  companies: "",
  company_address: [{ key: 1, value: "", map_url: "" }],
  skills: [{ key: 1, value: "" }],
  histories: [{ key: 1, title: "", value: "" }],
});
const myimage_path = ref("");
const company_image_path = ref("");

// データを取得

UserApiService.getUserEditData()
  .then((res: any) => {
    form.value.display_name = res.data.user.display_name;
    form.value.kana = res.data.user.kana;
    form.value.syozoku = res.data.user.syozoku;
    form.value.myimage_path = res.data.user.myimage_path;

    form.value.company_image_path = res.data.user.company_image_path;
    form.value.company_name = res.data.user.company_name;

    form.value.company_url = res.data.user.company_url;
    form.value.tel = res.data.user.tel;
    form.value.email = res.data.user.email;
    form.value.profile = res.data.user.profile;
    // form.value.companies = res.data.company;
    // form.value.skills = res.data.skill;
    companyLoops.value = res.data.company;
    skillLoops.value = res.data.skill;
    historyLoops.value = res.data.history;
  })
  .catch(($e) => {
    moveLinkPageCode("edit", code.code);
  });

const onUpdate = (e: any, type: string) => {
  let blob: Blob;
  let formData = new FormData();
  let imageUrl: string;
  if (type == "myimage_path") {
    blob = new Blob([form.value.myimage_path], { type: "image/jpeg" });
    imageUrl = window.URL.createObjectURL(blob);
    formData.append("photo", blob, "image.jpg");
    myimage_path.value = imageUrl;
  }
  if (type == "company_image_path") {
    blob = new Blob([form.value.company_image_path], { type: "image/jpeg" });
    imageUrl = window.URL.createObjectURL(blob);
    formData.append("photo", blob, "image.jpg");
    company_image_path.value = imageUrl;
  }

  UserApiService.onUpload(formData)
    .then((res: any) => {
      if (type == "myimage_path") {
        form.value.myimage_path = imagePath + res.data;
      }
      if (type == "company_image_path") {
        form.value.company_image_path = imagePath + res.data;
      }
    })
    .catch((e) => {
      alert("editUserData ERROR" + e);
    });
};

const editflag = ref(false);
const editButton = () => {
  // loadFlag.value = true;
  // console.log(companyLoops.value);
  let param = {
    display_name: form.value.display_name,
    syozoku: form.value.syozoku,
    kana: form.value.kana,
    myimage_path: form.value.myimage_path,
    company_name: form.value.company_name,
    company_image_path: form.value.company_image_path,
    company_url: form.value.company_url,
    company_address: companyLoops.value,
    tel: form.value.tel,
    skills: skillLoops.value,
    histories: historyLoops.value,
    profile: form.value.profile,
  };

  UserApiService.editUserData(param)
    .then((res: any) => {
      console.log(res);
      editflag.value = true;
    })
    .catch(() => {
      alert("editData ERROR");
    });
};
</script>
<template>
  <v-container>
    <v-row class="mt-1">
      <v-col cols="12">
        <p class="font-weight-black text-h6">名刺データ編集</p>
      </v-col>
    </v-row>

    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="氏名"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例) 佐藤 太郎"
          :value="form.display_name"
          :rules="requiredValue(form.display_name, '氏名')"
          @onBlur="(e:string) => form.display_name = e"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="ふりがな"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例) さとう たろう"
          :value="form.kana"
          @onBlur="(e:string) => (form.kana = e)"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="所属"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例) 株式会社〇〇〇〇 営業課"
          :value="form.syozoku"
          @onBlur="(e:string) => (form.syozoku = e)"
        ></TextComponent>
      </v-col>
    </v-row>

    <v-row class="mt-1">
      <v-col cols="3">
        <imgConponent
          :width="200"
          :aspect="`16/9`"
          cover
          :src="myimage_path ? myimage_path : form.myimage_path"
        ></imgConponent>
      </v-col>
      <v-col cols="9">
        <FileComponent
          ref="preview"
          label="自己画像アップロード"
          variant="outlined"
          hideDetails="auto"
          v-model="form.myimage_path"
          @onUpdate="(e) => onUpdate((form.myimage_path = e), 'myimage_path')"
        ></FileComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="会社名"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例) 株式会社〇〇〇〇"
          :value="form.company_name"
          @onBlur="(e:string) => (form.company_name = e)"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="3">
        <imgConponent
          :width="200"
          :aspect="`16/9`"
          cover
          :src="
            company_image_path ? company_image_path : form.company_image_path
          "
        ></imgConponent>
      </v-col>
      <v-col cols="9">
        <FileComponent
          label="会社ロゴアップロード"
          variant="outlined"
          hideDetails="auto"
          v-model="form.company_image_path"
          @onUpdate="
            (e) => onUpdate((form.company_image_path = e), 'company_image_path')
          "
        ></FileComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="会社URL"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="https://myselfpaper.online/"
          :value="form.company_url"
          @onBlur="(e:string) => (form.company_url = e)"
        ></TextComponent>
      </v-col>
    </v-row>

    <v-row
      class="mt-2"
      v-for="(companyLoop, index) in companyLoops"
      :key="companyLoop.id"
    >
      <v-col cols="12">
        <TextAreaComponent
          :label="`会社住所`"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="companyLoop.address"
          @onBlur="
            (e) => setCompanyNameValue(e, index, companyLoops, companyLoop.id)
          "
        ></TextAreaComponent>
        <p class="text-caption">例)〒100-0001<br />東京都千代田区千代田1-1</p>
        <TextComponent
          label="地図用住所・場所"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="companyLoop.map_url"
          @onBlur="
            (e) => setCompanyNameMapUrl(e, index, companyLoops, companyLoop.id)
          "
        ></TextComponent>
        <p class="text-caption">例)東京タワー</p>
        <p class="text-red text-caption">場所を入力してください</p>
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-col cols="12" class="mt-0 pt-0">
        <div class="text-right mt-1 pt-0">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25"
            label="削除"
            @click="onAddCompany('delete', companyLoops)"
            :disabled="companyLoops.length <= 1 ? true : false"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 ml-1"
            label="追加"
            @click="onAddCompany('add', companyLoops)"
          ></ButtonComponent>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="電話番号"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例) 03-0000-0000"
          :value="form.tel"
          @onBlur="(e:string) => (form.tel = e)"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        メールアドレス<br />
        {{ form.email }}
      </v-col>
    </v-row>
    <p class="mt-3 mb-2">スキル</p>
    <v-row v-for="(skillLoop, index) in skillLoops" :key="skillLoop.id">
      <v-col cols="12">
        <TextComponent
          :label="`スキル`"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例)ITパスポート（情報処理技術者試験）"
          :value="skillLoop.note"
          @onBlur="(e) => setSkillName(e, index, skillLoops, skillLoop.id)"
        ></TextComponent>
      </v-col>
    </v-row>
    <div class="text-right">
      <ButtonComponent
        variant="flat"
        color="red darken-1"
        class="w-25 mt-2"
        label="削除"
        @click="onAddSkill('delete', skillLoops)"
        :disabled="skillLoops.length <= 1 ? true : false"
      ></ButtonComponent>
      <ButtonComponent
        variant="flat"
        color="blue darken-1"
        class="w-25 mt-2 ml-1"
        label="追加"
        @click="onAddSkill('add', skillLoops)"
      ></ButtonComponent>
    </div>

    <p>経歴</p>
    <v-row v-for="(historyLoop, index) in historyLoops" :key="historyLoop.id">
      <v-col cols="12">
        <TextComponent
          class="mt-2"
          :label="`経歴タイトル`"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          messages="例)〇〇株式会社 営業部"
          :value="historyLoop.title"
          @onBlur="
            (e) => setHistoriesTitle(e, index, historyLoops, historyLoop.id)
          "
        ></TextComponent>
        <TextAreaComponent
          class="mt-2"
          :label="`経歴内容` + historyLoop.id"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="historyLoop.note"
          @onBlur="
            (e) => setHistoriesValue(e, index, historyLoops, historyLoop.id)
          "
        ></TextAreaComponent>
        <p class="text-caption">
          例)<br />
          営業担当<br />
          新規顧客開拓および既存顧客対応<br />
          月間売上目標を達成し、年間MVPを受賞（2022年度）<br />
          顧客ニーズを分析し、提案内容をカスタマイズして契約数を15％増加させる
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-2 pt-0">
      <v-col class="mt-0 pt-0">
        <div class="text-right mt-0 pt-0">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25"
            label="削除"
            @click="onAddHistory('delete', historyLoops)"
            :disabled="historyLoops.length <= 1 ? true : false"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 ml-1"
            label="追加"
            @click="onAddHistory('add', historyLoops)"
          ></ButtonComponent>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <TextAreaComponent
          label="自己PR"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :rows="14"
          :value="form.profile"
          @onBlur="(e:string) => (form.profile = e)"
        ></TextAreaComponent>
      </v-col>
    </v-row>
    <div id="buttonFix">
      <AlertComponent
        v-if="editflag"
        text="データ更新を行いました。"
        type="success"
        class="mb-2"
        @onClick="editflag = false"
      ></AlertComponent>
      <ButtonComponent
        variant="flat"
        color="green darken-1"
        class="w-100"
        label="更新"
        @onClick="editButton()"
      ></ButtonComponent>
      <LoadingComponent v-show="loadFlag"></LoadingComponent>
    </div>
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
