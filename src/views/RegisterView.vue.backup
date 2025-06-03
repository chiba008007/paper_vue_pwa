<script setup lang="ts">
import { ref } from "vue";
import TextComponent from "../components/TextComponent.vue";
import TextAreaComponent from "../components/TextAreaComponent.vue";
import FileComponent from "../components/FileComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import imgConponent from "../components/ImgConponent.vue";
import { requiredValue } from "@/functions/validate";
import CardConfConponent from "@/components/CardConfConponent.vue";

import UserApiService from "../services/UserApiService";
import queryString from "query-string";
import { imagePath } from "@/plugins/const";
import UserHelpers from "../functions/userHelper";
import LoadingComponent from "../components/LoadingComponent.vue";
import { fromJSON } from "flatted";
import NewWorld2Left from "@/components/NewWorld2Left.vue";
import NewWorld2Right from "@/components/NewWorld2Right.vue";
import { useRouter } from "vue-router";

const router = useRouter();
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
      form.value.name = res.data[0].name;
      form.value.email = res.data[0].mail;
    })
    .catch(($e) => {
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
      alert("onUpload ERROR" + e);
    });
};

const editflag = ref(false);
const dialog = ref(false);
const confText = form.value;
const editConfButton = () => {
  dialog.value = true;
};
const editButton = () => {
  dialog.value = false;
  loadFlag.value = true;

  let param = {
    code: filter.c,
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
      dialog.value = false;
      loadFlag.value = false;
      movePage("registerfin");
      //ストライプ支払い画面
      //location.href = "https://buy.stripe.com/test_28odTbeyYd2o1Q43cc";
    })
    .catch((e) => {
      alert(e);
    });
};
// スクロール位置を指定する関数
const scrollToPosition = (elementName: string) => {
  window.location.href = `/home#${elementName}`;
};
</script>
<template>
  <v-dialog v-model="dialog" persistent>
    <CardConfConponent
      :text="confText"
      style="background-color: white"
      class="text-pre-wrap pa-4"
      @inputBack="dialog = false"
      @inputRegist="editButton()"
    ></CardConfConponent>
  </v-dialog>

  <v-container style="background-color: rgb(241, 239, 231)">
    <v-row>
      <NewWorld2Left
        @scrollToPosition="(e:string) => scrollToPosition(e)"
      ></NewWorld2Left>
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-5 bg-white">
        <LoadingComponent v-show="loadFlag"></LoadingComponent>
        <v-row class="mt-1">
          <v-col cols="12">
            <p class="font-weight-black text-h6">名刺データ新規申し込み</p>
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
              @onBlur="(e:string) => (form.display_name = e,buttonFlag())"
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
              @onUpdate="
                (e) => onUpdate((form.myimage_path = e), 'myimage_path')
              "
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
                company_image_path
                  ? company_image_path
                  : form.company_image_path
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
                (e) =>
                  onUpdate((form.company_image_path = e), 'company_image_path')
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
          v-for="companyLoop in companyLoops"
          :key="companyLoop.key"
        >
          <v-col cols="12">
            <TextAreaComponent
              :label="`会社住所` + companyLoop.key"
              variant="outlined"
              type="text"
              :autoGrow="true"
              :hideDetails="true"
              :value="companyLoop.address"
              @onBlur="(e) => setCompanyName(e, companyLoop.key, 'value')"
            ></TextAreaComponent>
            <p class="text-caption">
              例)〒100-0001<br />東京都千代田区千代田1-1
            </p>
            <TextComponent
              label="地図用住所・場所"
              variant="outlined"
              type="text"
              :autoGrow="true"
              :hideDetails="true"
              :value="companyLoop.map_url"
              @onBlur="(e) => setCompanyName(e, companyLoop.key, 'map_url')"
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
        <v-row class="mt-2">
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
              messages="例)ITパスポート（情報処理技術者試験）"
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
        <v-row
          class="mt-5"
          v-for="historyLoop in historyLoops"
          :key="historyLoop"
        >
          <v-col cols="12">
            <TextComponent
              :label="`経歴タイトル` + historyLoop.key"
              variant="outlined"
              type="text"
              autoGrow="auto"
              hideDetails="auto"
              messages="例)〇〇株式会社 営業部"
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
            <p class="text-caption ml-2">
              例)<br />
              営業担当<br />
              新規顧客開拓および既存顧客対応<br />
              月間売上目標を達成し、年間MVPを受賞（2022年度）<br />
              顧客ニーズを分析し、提案内容をカスタマイズして契約数を15％増加させる
            </p>
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
            <div id="buttonFix">
              <AlertComponent
                v-if="editflag"
                text="データ登録を行いました。"
                type="success"
                class="mb-2"
                @onClick="editflag = false"
              ></AlertComponent>
            </div>
            <ButtonComponent
              variant="flat"
              color="blue darken-1"
              class="w-100 mt-3"
              label="登録"
              :disabled="disabledFlag"
              @onClick="editConfButton()"
            ></ButtonComponent>
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
