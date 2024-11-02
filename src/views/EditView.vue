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

const loadFlag = ref(false);
const { movePage } = UserHelpers();
const disabledFlag = ref(true);
const filter = queryString.parse(location.search);
const companyLoops = ref([{ key: 1 }]) as any;
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

// 新規登録の時
if (filter.c) {
  UserApiService.getRegistData({ code: filter.c })
    .then((res: any) => {
      if (res.data == "") {
        alert("ERROR");
        throw new Error("Whoops!");
      }
      form.value.name = res.data.name;
      form.value.email = res.data.mail;
    })
    .catch(($e) => {
      console.log("ERROR");
      console.log($e);
      movePage("error");
    });
}
// ボタン
const buttonFlag = () => {
  disabledFlag.value = true;
  if (requiredValue(form.value.display_name, "表示名").length === 0) {
    disabledFlag.value = false;
  }
};

const onAddCompany = (type: string) => {
  let cnt = companyLoops.value.length + 1;
  if (type == "add") companyLoops.value.push({ key: cnt });
  if (type == "delete") companyLoops.value.splice(cnt - 2, 1);
};
const skillLoops = ref([{ key: 1 }]) as any;
const onAddSkill = (type: string) => {
  let cnt = skillLoops.value.length + 1;
  if (type == "add") skillLoops.value.push({ key: cnt });
  if (type == "delete") skillLoops.value.splice(cnt - 2, 1);
};
const historyLoops = ref([{ key: 1 }]) as any;
const onAddHistory = (type: string) => {
  let cnt = historyLoops.value.length + 1;
  if (type == "add") historyLoops.value.push({ key: cnt });
  if (type == "delete") historyLoops.value.splice(cnt - 2, 1);
};

const setCompanyName = (val: string, n: number, type: string) => {
  companyLoops.value[n - 1]["key"] = n;
  companyLoops.value[n - 1][type] = val;
  form.value.company_address = companyLoops;
};
const setSkillName = (val: string, n: number) => {
  skillLoops.value[n - 1]["key"] = n;
  skillLoops.value[n - 1]["value"] = val;
  form.value.skills = skillLoops;
};
const setHistories = (val: string, n: number, type: string) => {
  historyLoops.value[n - 1]["key"] = n;
  historyLoops.value[n - 1][type] = val;
  form.value.histories = historyLoops;
};

// データを取得
if (filter.code) {
  UserApiService.getUserEditData()
    .then((res: any) => {
      alert("success");
      console.log(res);
      /*
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
      form.value.companies = res.data.company;
*/
      /*
      companyLoops.value = [];
      for (let i = 0; i < companies.value.length; i++) {
        companyLoops.value.push({
          key: i + 1,
          address: companies.value[i].address,
          map_url: companies.value[i].map_url,
        });
      }
      skills.value = res.data.skill;
      skillLoops.value = [];
      for (let i = 0; i < skills.value.length; i++) {
        skillLoops.value.push({
          key: i + 1,
          note: skills.value[i].note,
        });
      }
      histories.value = res.data.history;
      historyLoops.value = [];
      for (let i = 0; i < histories.value.length; i++) {
        historyLoops.value.push({
          key: i + 1,
          title: histories.value[i].title,
          note: histories.value[i].note,
        });
      }
        */
    })
    .catch(($e) => {
      console.log("ERROR");
      console.log($e);
      alert("getData ERROR");
    });
}

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
  loadFlag.value = true;
  let param = {
    code: filter.c,
    name: form.value.name,
    display_name: form.value.display_name,
    email: form.value.email,
    syozoku: form.value.syozoku,
    kana: form.value.kana,
    myimage_path: form.value.myimage_path,
    company_image_path: form.value.company_image_path,
    company_name: form.value.company_name,
    company_url: form.value.company_url,
    company_address: form.value.company_address,
    tel: form.value.tel,
    skills: form.value.skills,
    histories: form.value.histories,
    profile: form.value.profile,
  };
  UserApiService.setRegistData(param)
    .then((res) => {
      loadFlag.value = false;
      console.log(res);
      movePage("registerfin");
    })
    .catch((e) => {
      alert(e);
    });
  /*
  UserApiService.editUserData(param)
    .then((res: any) => {
      console.log(res);
      editflag.value = true;
    })
    .catch(() => {
      alert("editData ERROR");
    });
  */
};
</script>
<template>
  <v-container>
    <v-row class="mt-1">
      <v-col cols="12">
        <p class="font-weight-black text-h6" v-if="filter.c">
          名刺データ新規申し込み
        </p>
        <p class="font-weight-black text-h6" v-else>名刺データ編集</p>
      </v-col>
    </v-row>

    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="表示名"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          :value="form.display_name"
          :rules="requiredValue(form.display_name, '表示名')"
          @onBlur="(e:string) => (form.display_name = e,buttonFlag())"
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
          :value="form.syozoku"
          @onBlur="(e:string) => (form.syozoku = e)"
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
          :value="form.kana"
          @onBlur="(e:string) => (form.kana = e)"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="3">
        <imgConponent
          :width="200"
          :aspect="`16/9`"
          cover
          :src="myimage_path"
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
          :src="company_image_path"
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
          :value="form.company_url"
          @onBlur="(e:string) => (form.company_url = e)"
        ></TextComponent>
      </v-col>
    </v-row>

    <v-row class="mt-2" v-for="companyLoop in companyLoops" :key="companyLoop">
      <v-col cols="12">
        <TextAreaComponent
          :label="`会社住所` + companyLoop.key"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="companyLoop.value"
          @onBlur="(e) => setCompanyName(e, companyLoop.key, 'value')"
        ></TextAreaComponent>
        <TextComponent
          label="地図URL"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="companyLoop.map_url"
          @onBlur="(e) => setCompanyName(e, companyLoop.key, 'map_url')"
        ></TextComponent>
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-col cols="12" class="mt-0 pt-0">
        <div class="text-right mt-0 pt-0">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25"
            label="削除"
            @click="onAddCompany('delete')"
            :disabled="companyLoops.length <= 1 ? true : false"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 ml-1"
            label="追加"
            @click="onAddCompany('add')"
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
    <v-row class="mt-5">
      <v-col cols="12">
        <TextComponent
          v-for="skillLoop in skillLoops"
          :key="skillLoop"
          :label="`スキル` + skillLoop.key"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          :value="skillLoop.note"
          @onBlur="(e) => setSkillName(e, skillLoop.key)"
        ></TextComponent>
        <div class="text-right">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25 mt-2"
            label="削除"
            @click="onAddSkill('delete')"
            :disabled="skillLoops.length <= 1 ? true : false"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 mt-2 ml-1"
            label="追加"
            @click="onAddSkill('add')"
          ></ButtonComponent>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-5" v-for="historyLoop in historyLoops" :key="historyLoop">
      <v-col cols="12">
        <TextComponent
          :label="`経歴タイトル` + historyLoop.key"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          :value="historyLoop.title"
          @onBlur="(e) => setHistories(e, historyLoop.key, 'title')"
        ></TextComponent>
        <TextAreaComponent
          :label="`経歴内容` + historyLoop.key"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="historyLoop.value"
          @onBlur="(e) => setHistories(e, historyLoop.key, 'value')"
        ></TextAreaComponent>
      </v-col>
    </v-row>
    <v-row class="mt-0 pt-0">
      <v-col class="mt-0 pt-0">
        <div class="text-right mt-0 pt-0">
          <ButtonComponent
            variant="flat"
            color="red darken-1"
            class="w-25"
            label="削除"
            @click="onAddHistory('delete')"
            :disabled="historyLoops.length <= 1 ? true : false"
          ></ButtonComponent>
          <ButtonComponent
            variant="flat"
            color="blue darken-1"
            class="w-25 ml-1"
            label="追加"
            @click="onAddHistory('add')"
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
        text="データ登録を行いました。"
        type="success"
        class="mb-2"
        @onClick="editflag = false"
      ></AlertComponent>
      <ButtonComponent
        variant="flat"
        color="blue darken-1"
        class="w-100"
        label="登録"
        :disabled="disabledFlag"
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
