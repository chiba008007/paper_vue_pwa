<script setup lang="ts">
import { ref } from "vue";
import TextComponent from "../components/TextComponent.vue";
import TextAreaComponent from "../components/TextAreaComponent.vue";
import FileComponent from "../components/FileComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import imgConponent from "../components/ImgConponent.vue";

import UserHelpers from "../functions/userHelper";
import UserApiService from "../services/UserApiService";
import queryString from "query-string";
const filter = queryString.parse(location.search);

const userHelp = UserHelpers();
userHelp.sameCheck();

const editflag = ref(false);

const editButton = () => {
  editflag.value = true;
};

const companyLoops = ref([{ key: 1 }]) as any;
const onAddCompany = (type: string) => {
  let cnt = companyLoops.value.length + 1;
  if (type == "add") {
    companyLoops.value.push({ key: cnt });
  }
  if (type == "delete") {
    companyLoops.value.splice(cnt - 2, 1);
  }
};
const skillLoops = ref([{ key: 1 }]) as any;
const onAddSkill = (type: string) => {
  let cnt = skillLoops.value.length + 1;
  if (type == "add") {
    skillLoops.value.push({ key: cnt });
  }
  if (type == "delete") {
    skillLoops.value.splice(cnt - 2, 1);
  }
};
const historyLoops = ref([{ key: 1 }]) as any;
const onAddHistory = (type: string) => {
  let cnt = historyLoops.value.length + 1;
  if (type == "add") {
    historyLoops.value.push({ key: cnt });
  }
  if (type == "delete") {
    historyLoops.value.splice(cnt - 2, 1);
  }
};

// データを取得
const name = ref();
const kana = ref();
const syozoku = ref();
const myimage_path = ref();
const company_image_path = ref();
const company_name = ref();
const company_url = ref();
const companies = ref();
const tel = ref();
const email = ref();
const skills = ref();
const histories = ref();
const profile = ref();

UserApiService.getUserData(filter.code as string)
  .then((res: any) => {
    name.value = res.data.user.name;
    kana.value = res.data.user.kana;
    syozoku.value = res.data.user.syozoku;
    myimage_path.value = res.data.user.myimage_path;
    company_image_path.value = res.data.user.company_image_path;
    company_name.value = res.data.user.company_name;
    company_url.value = res.data.user.company_url;
    tel.value = res.data.user.tel;
    email.value = res.data.user.email;
    profile.value = res.data.user.profile;

    companies.value = res.data.company;
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
  })
  .catch(() => {
    alert("getData ERROR");
  });

const onKeyup = (e: any, type: string) => {
  if (type == "name") name.value = e.target.value;
};
</script>
<template>
  <v-container>
    <p class="font-weight-black text-h6">名刺データ編集</p>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="表示名"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          :value="name"
          @keyup="(e:any) => onKeyup(e,'name')"
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
          :value="syozoku"
          @keyup="(e:any) => onKeyup(e,'syozoku')"
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
          :value="kana"
          @keyup="(e:any) => onKeyup(e,'kana')"
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
          v-if="myimage_path"
        ></imgConponent>
      </v-col>
      <v-col cols="9">
        <FileComponent
          label="自己画像アップロード"
          variant="outlined"
          hideDetails="auto"
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
          :value="company_name"
          @keyup="(e:any) => onKeyup(e,'company_name')"
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
          v-if="company_image_path"
        ></imgConponent>
      </v-col>
      <v-col cols="9">
        <FileComponent
          label="会社ロゴアップロード"
          variant="outlined"
          hideDetails="auto"
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
          :value="company_url"
          @keyup="(e:any) => onKeyup(e,'company_url')"
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
          :value="companyLoop.address"
          @keyup="(e:any) => onKeyup(e,'company_address')"
        ></TextAreaComponent>
        <TextComponent
          label="地図URL"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="companyLoop.map_url"
          @keyup="(e:any) => onKeyup(e,'company_map_url')"
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
          :value="tel"
          @keyup="(e:any) => onKeyup(e,'tel')"
        ></TextComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <TextComponent
          label="メールアドレス"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="auto"
          :value="email"
          @keyup="(e:any) => onKeyup(e,'email')"
        ></TextComponent>
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
          @keyup="(e:any) => onKeyup(e,'skill_note'+skillLoop.key)"
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
          @keyup="(e:any) => onKeyup(e,'history_title'+historyLoop.key)"
        ></TextComponent>
        <TextAreaComponent
          :label="`経歴内容` + historyLoop.key"
          variant="outlined"
          type="text"
          :autoGrow="true"
          :hideDetails="true"
          :value="historyLoop.note"
          @keyup="(e:any) => onKeyup(e,'history_note'+historyLoop.key)"
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
          :value="profile"
          @keyup="(e:any) => onKeyup(e,'profile')"
        ></TextAreaComponent>
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col cols="12">
        <AlertComponent
          v-if="editflag"
          text="データ登録を行いました。"
          type="success"
          class="mb-2"
        ></AlertComponent>

        <ButtonComponent
          variant="flat"
          color="blue darken-1"
          class="w-100"
          label="登録"
          @onClick="editButton()"
        ></ButtonComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
