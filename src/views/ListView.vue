<script setup lang="ts">
import { ref } from "vue";
import UserHelpers from "../functions/userHelper";
import TextComponent from "../components/TextComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import { useStoreUser } from "@/store/user";
import UserApiService from "../services/UserApiService";

const store = useStoreUser();
const clickItem = (url: string) => {
  location.href = url;
};
const alertFlag = ref<boolean>(false);
const user = UserHelpers();
const lsData = ref(user.getStrage());
const ls = ref(user.getStrage());
if (store.isLogin) {
  let tmp = UserApiService.getReadData();
  // tmp.then((data: object | any) => {});
}

const searchText = ref();
const addMore = () => {
  let search = lsData.value.filter((word: keyof object) => {
    let string = word["name"] as string;
    let company_name = word["company_name"] as string;
    if (
      string.indexOf(searchText.value) != -1 ||
      company_name.indexOf(searchText.value) != -1
    ) {
      return word;
    }
  });
  ls.value = search;
};
const onkeyup = (e: any) => {
  searchText.value = e.target.value;
};
const addRead = () => {
  let tmp = [];
  for (let i = 0; i < lsData.value.length; i++) {
    tmp.push({
      user_read_code: lsData.value[i].code,
    });
  }
  let read = { data: tmp };
  UserApiService.setReadEditData(read)
    .then((res: any) => {
      alertFlag.value = true;
      //localStorage.removeItem("paper_url");
    })
    .catch(($e) => {
      console.log("ERROR");
      console.log($e);
      alert("setData ERROR");
    });
};
const onClick = () => {
  alertFlag.value = false;
};
</script>
<template>
  <v-container>
    <AlertComponent
      v-if="alertFlag"
      text="取り込み完了しました。"
      class="mb-5"
      @onClick="onClick()"
    ></AlertComponent>
    <v-row class="pa-0 mb-1">
      <v-col cols="9" class="pa-0 ma-0">
        <TextComponent
          append-inner-icon="mdi-magnify"
          label="名前を入力して検索"
          variant="outlined"
          type="text"
          autoGrow="auto"
          hideDetails="true"
          single-line
          @keyup="(e:Event) => onkeyup(e)"
          @click:append-inner="addMore()"
        ></TextComponent>
      </v-col>
      <v-col cols="3" class="pa-0 ma-0 text-right">
        <!-- <ButtonComponent
          v-if="store.isLogin == true"
          label=""
          class="w-75 text-h5"
          mdi="mdi-account-plus"
          height="50"
          color="success"
          variant="elevated"
          @click="addRead()"
        ></ButtonComponent> -->
      </v-col>
    </v-row>
    <v-list lines="three">
      <v-list-item
        v-for="list in ls"
        :key="list"
        :prepend-avatar="list.imagepath ?? list.myimage_path"
        @click="clickItem(list.url ?? '/?code=' + list.code)"
      >
        <v-list-item-title>{{ list.company_name }} </v-list-item-title>
        <v-list-item-subtitle>{{ list.name }} 様</v-list-item-subtitle>
        <v-list-item-subtitle class="text-right"
          >{{ list.time ?? list.date }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>
