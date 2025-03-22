<script setup lang="ts">
import { ref } from "vue";
import UserHelpers from "./functions/userHelper";
import { useStoreUser } from "@/store/user";
import queryString from "query-string";
import ButtonComponent from "./components/ButtonComponent.vue";

const store = useStoreUser();

const code = store.userdata as any;
const open = ref(false);
const { movePage, moveLink, moveLinkPageCode, movePageCode, moveLinkPage } =
  UserHelpers();
const menuOpen = () => {
  open.value = open.value ? false : true;
};
const filter = queryString.parse(location.search);

if (filter.code && (filter.code === "undefined" || code.code === "undefined")) {
  //history.back();
  location.href = "/home";
}

let deferredPrompt: any;

window.addEventListener("beforeinstallprompt", (e) => {
  // このイベントをキャンセルしないとブラウザのデフォルトのポップアップが表示される
  e.preventDefault();
  deferredPrompt = e;

  // ユーザーがボタンをクリックした時に、インストールプロンプトを表示する
  const installButton = document.getElementById("install-button");
  installButton.style.display = "block";

  installButton.addEventListener("click", () => {
    // インストールプロンプトを表示
    deferredPrompt.prompt();

    // ユーザーがインストールを選択したかどうかを監視
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});
</script>
<template>
  <v-app>
    <v-card
      color="grey-lighten-4 fixed"
      height="auto"
      rounded="0"
      flat
      v-if="filter.code !== undefined"
    >
      <v-toolbar density="compact" color="primary" class="caption">
        <p class="text-h6 ml-2">
          <a href="/home" style="text-decoration: none; color: #fff"
            >SPONNECT <small>-sponsor+connect-</small>
          </a>
        </p>

        <v-spacer></v-spacer>
        <v-btn
          icon
          v-if="filter.code"
          @click="[moveLinkPageCode('', filter.code)]"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="[movePageCode('lists', filter.code)]"
          v-if="filter.code"
        >
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon @click="menuOpen()">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-main>
      <ButtonComponent
        id="install-button"
        style="display: none; top: 80%; right: 10px; z-index: 1"
        mdi="mdi-account-plus-outline"
        class="position-fixed bg-green-lighten-2"
        size="x-small"
        stacked
        label="ホームに追加"
      ></ButtonComponent>
      <div class="menu" :class="{ 'is-active': open }">
        <div class="menu__item close" @click="menuOpen()">閉じる</div>
        <div class="menu__item" @click="[movePage('question'), menuOpen()]">
          問合せ
        </div>

        <div
          class="menu__item"
          v-if="store.isLogin == true"
          @click="[moveLinkPageCode('edit', code.code)]"
        >
          名刺データ編集
        </div>
        <div
          class="menu__item"
          v-if="store.isLogin == true"
          @click="[movePage('open'), menuOpen()]"
        >
          公開可否
        </div>
        <div class="menu__item" @click="[movePage('lists'), menuOpen()]">
          読込履歴
        </div>
        <div
          class="menu__item"
          v-if="store.isLogin == false"
          @click="[movePage('login'), menuOpen()]"
        >
          ログイン
        </div>
        <div
          class="menu__item"
          v-if="store.isLogin == true"
          @click="[movePage('logout'), menuOpen()]"
        >
          ログアウト
        </div>
        <div class="menu__item" @click="[movePage('regist'), menuOpen()]">
          新規申し込み
        </div>
      </div>
      <router-view :class="filter.code !== undefined ? 'mt-10' : ''" />
    </v-main>
    <div style="height: 40px">
      <v-footer color="primary" height="40" class="d-flex text-caption">
        <div class="w-25">(c)私のプロフ</div>
        <div class="w-75 text-right d-flex">
          <ButtonComponent
            class="text-caption"
            v-if="!filter.code"
            label="個人情報取扱"
            variant="text"
            mdi="mdi-information"
            @click="moveLink('human')"
          ></ButtonComponent>
          <ButtonComponent
            class="text-caption"
            v-if="!filter.code"
            label="特定商取引表記"
            variant="text"
            mdi="mdi-information"
            @click="moveLink('howto')"
          ></ButtonComponent>
        </div>
      </v-footer>
    </div>
  </v-app>
</template>
<style>
/*----------------------------
* メニュー本体
*----------------------------*/
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10001;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background: #555;
}
.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: left;
  color: #fff;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  &.close {
    text-align: left;
    color: #ff0000;
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
}
/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
.menu {
  transform: translateX(100vw);
  transition: all 0.3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active {
  transform: translateX(0);
}
.mylink {
  text-decoration: none;
  color: #fff;
}
</style>
