<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import cardConponent from "../components/CardConponent.vue";
import imgConponent from "../components/ImgConponent.vue";
import UserHelpers from "../functions/userHelper";
import UserApiService from "../services/UserApiService";
import queryString from "query-string";
import { useStoreUser } from "../store/user";
const filter = queryString.parse(location.search);
const user = UserHelpers();
const store = useStoreUser();
// alert(store.userToken);
// データを取得
const name = ref();
const code = ref();
const display_name = ref();
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
const display_flag = ref();

const myself = JSON.parse(localStorage.getItem("user") as string);
const myselfCode = myself?.userdata?.code;

// ローカルストレージに保存
if (store.isLogin) {
  localStorage.setItem("user", JSON.stringify(store));
}
UserApiService.getUserData(filter.code as string)
  .then((res: any) => {
    console.log(res.data);
    code.value = res.data.user.code;
    name.value = res.data.user.name;
    display_name.value = res.data.user.display_name;
    kana.value = res.data.user.kana;
    syozoku.value = res.data.user.syozoku;
    myimage_path.value = res.data.user.myimage_path;
    company_image_path.value = res.data.user.company_image_path;
    company_name.value = res.data.user.company_name;
    company_url.value = res.data.user.company_url;
    tel.value = res.data.user.tel;
    email.value = res.data.user.email;
    profile.value = res.data.user.profile;
    display_flag.value = res.data.user.display_flag;

    companies.value = res.data.company;
    skills.value = res.data.skill;
    histories.value = res.data.history;
    // ローカルストレージ取得
    const ls = user.getStrage(
      name.value,
      myimage_path.value,
      company_name.value
    );
    // ローカルストレージに保存
    localStorage.setItem("paper_url", JSON.stringify(ls));
  })
  .catch(() => {
    alert("getData ERROR");
  });
</script>
<template>
  <v-container v-if="display_flag == 0 && myselfCode != code">
    <v-row>
      <v-col>準備中です</v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col cols="12">
        <cardConponent
          v-if="myselfCode == code"
          height="20"
          color="success"
          :text="display_flag ? '公開中' : '非公開'"
          ariant="tonal"
          width="70"
        ></cardConponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="7">
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary"
          class="text-caption"
          text="名前"
        ></cardConponent>
        <div class="ml-2 mt-3">
          <p class="text-h6">{{ syozoku }}</p>
          <p class="text-caption">{{ kana }}</p>
          <p class="text-h5 font-weight-black">{{ display_name }}</p>
        </div>
      </v-col>
      <v-col cols="5">
        <imgConponent
          :width="200"
          :aspect="`16/9`"
          cover
          :src="myimage_path"
        ></imgConponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary"
          class="text-caption"
          text="会社名"
        ></cardConponent>
        <v-row class="ml-2 mt-1">
          <v-col cols="3">
            <imgConponent
              :width="200"
              :aspect="`16/9`"
              cover
              :src="company_image_path"
            ></imgConponent>
          </v-col>
          <v-col cols="9" class="vcenter">
            <p class="text-h6 font-weight-black text">{{ company_name }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption"
          text="URL"
        ></cardConponent>
        <a :href="company_url" target="_blank">{{ company_url }}</a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption"
          text="所在地"
        ></cardConponent>
        <v-row v-for="company in companies" :key="company" class="mt-0 pt-0">
          <v-col class="wraptext">
            {{ company.address }}
            <iframe
              :src="company.map_url"
              width="100"
              style="border: 0; width: 100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption"
          text="電話番号"
        ></cardConponent>
        <p>{{ tel }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption"
          text="メールアドレス"
        ></cardConponent>
        <p>{{ email }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption"
          text="スキル"
        ></cardConponent>
        <p v-for="skill in skills" :key="skill">
          {{ skill.note }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption"
          text="経歴"
        ></cardConponent>
        <v-timeline side="end">
          <v-timeline-item
            size="small"
            v-for="history in histories"
            :key="history"
          >
            <v-alert value="true">
              <b>{{ history.title }}</b>
              <p class="text-caption wraptext">
                {{ history.note }}
              </p>
            </v-alert>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          color="primary mb-2"
          class="text-caption w-100"
          text="自己PR"
        ></cardConponent>
      </v-col>
      <v-card class="ml-4 mr-4 pa-2 wraptext w-100" variant="tonal">
        {{ profile }}
      </v-card>
    </v-row>
  </v-container>
</template>
<style>
.text {
  white-space: pre-line;
}
.vcenter {
  display: flex;
  align-items: center;
}
.wraptext {
  white-space: pre-wrap;
}
</style>
