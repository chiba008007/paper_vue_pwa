<script setup lang="ts">
import { ref } from "vue";
import UserHelpers from "./functions/userHelper";
const open = ref(false);
const { movePage } = UserHelpers();
const menuOpen = () => {
  open.value = open.value ? false : true;
};
</script>
<template>
  <v-app>
    <v-card color="grey-lighten-4" height="auto" rounded="0" flat>
      <v-toolbar density="compact" color="primary" class="caption">
        <router-link
          class="text-h6 ml-2 mylink"
          :to="`/?code=` + $route.query.code"
          >私の名刺</router-link
        >
        <v-spacer></v-spacer>
        <v-btn icon :to="`/lists/?code=` + $route.query.code">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon @click="menuOpen()">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-main>
      <div class="menu" :class="{ 'is-active': open }">
        <div class="menu__item close" @click="menuOpen()">閉じる</div>
        <div class="menu__item" @click="[movePage('question'), menuOpen()]">
          問合せ
        </div>
        <div class="menu__item" @click="[movePage('regist'), menuOpen()]">
          新規申し込み
        </div>
        <div class="menu__item" @click="[movePage('edit'), menuOpen()]">
          名刺データ編集
        </div>
        <div class="menu__item">公開可否</div>
        <div class="menu__item">利用状況</div>
        <div class="menu__item">読込履歴取込み</div>
        <div class="menu__item">読込履歴ファイルインポート</div>
        <div class="menu__item">読込履歴ダウンロード</div>
        <div class="menu__item">利用状況</div>
        <div class="menu__item" @click="[movePage('login'), menuOpen()]">
          ログイン
        </div>
        <div class="menu__item">ログアウト</div>
      </div>
      <router-view />
    </v-main>
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
  z-index: 1;
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
