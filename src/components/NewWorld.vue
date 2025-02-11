<script setup lang="ts">
import { defineComponent } from "vue";
import cardConponent from "../components/CardConponent.vue";
import ButtonComponent from "./ButtonComponent.vue";

const onClick = () => {
  location.href = "/regist";
};
</script>
<template>
  <section class="hero">
    <div class="video-box overlay">
      <video class="video" muted autoplay loop playsinline>
        <source src="/top/top.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="text-box">
      <h1>名刺交換の常識を変える。</h1>
    </div>
  </section>
  <div
    class="text-center position-sticky pl-3 pr-3"
    style="z-index: 999; bottom: 30px; right: 30px"
  >
    <ButtonComponent
      style="height: 60px"
      label="新規申込み"
      class="bg-success rounded-lg text-h5 mt-3 w-50"
      prependIcon="mdi-plus"
      @click="onClick()"
    ></ButtonComponent>
    <ButtonComponent
      style="height: 60px"
      label="問合わせ"
      class="bg-red rounded-lg text-h5 mt-3 w-50"
      prependIcon="mdi-account"
      to="/question"
    ></ButtonComponent>
  </div>

  <section>
    <div class="ma-3">
      <v-alert
        text="スマホをかざすだけの名刺"
        color="deep-purple-accent-4"
        type="success"
      ></v-alert>
      <v-card color="primary" variant="tonal" class="mt-2">
        <v-card-text class="text-caption ma-0 pl-3 text-black">
          <v-list lines="one" class="mt-0">
            <v-list-item :title="'簡便さ'">
              <v-list-item-content>
                スマートフォンやカードをかざすだけで、簡単に名刺交換が完了！紙の名刺を持ち歩く必要はなく、わずらわしい入力作業も一切なし。瞬時に自分の情報を相手と共有でき、データの更新もスムーズに行えます。時間も手間も省けて、どこでもすぐにネットワーキングができる便利さを実感してください。スマートなビジネスをサポートします。
              </v-list-item-content>
            </v-list-item>
            <v-list-item :title="'環境'">
              <v-list-item-content>
                紙や時間を無駄にすることなく、スマートに名刺交換を行いましょう。手間なく、瞬時にプロフィール情報を相手に共有でき、必要な時にすぐにデータを更新・管理することができます。従来の紙の名刺では面倒だった在庫管理や印刷費用もゼロに。環境にも優しく、効率的なネットワーキングをサポートします。今すぐ、デジタル名刺で新しいビジネスライフを始めましょう。
              </v-list-item-content>
            </v-list-item>
            <v-list-item :title="'プロフィール'">
              <v-list-item-content>
                自分の情報を簡単にカスタマイズできます。名前、写真、自己紹介文など、あらゆる個人情報を自由に変更・更新することができ、より自分らしいプロフィールを作成できます。さらに、趣味や特技などの詳細も追加できるので、他のユーザーとの交流を深める手助けになります。自分のプロフィールを最新の状態に保ち、より魅力的な印象を与えましょう！
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <v-card class="mx-auto w-100 pa-3 mb-1" variant="tonal">
      <v-alert
        text="デジタル名刺購入から利用まで"
        color="deep-purple-accent-4"
        type="info"
      ></v-alert>
      <v-timeline class="mt-2" align="start" density="compact">
        <v-timeline-item size="x-small">
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>まずは注文</strong>
            </div>
            <div>
              <a
                @click="onClick()"
                class="text-decoration-underline font-weight-bold"
                >新規申し込み</a
              >ページから、「お名前」「メールアドレス」「電話番号」「名刺送り先住所」を入力し「送信」します。
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item size="x-small">
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>名刺プロフィール内容の入力</strong>
            </div>
            <div>
              スマホに表示される入力フォームに従ってプロフィールページを作成してください
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item size="x-small">
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>デジタル名刺カードの配達</strong>
            </div>
            <div>
              注文日から2週間前後で「デジタル名刺カード」が届きます（ポスト投函されます）
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item size="x-small">
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>デジタル名刺カードの利用開始</strong>
            </div>
            <div>
              カードが届いたら、スマホにタッチですぐに使い始めることができます！
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
    <div>
      <ButtonComponent
        style="height: 60px"
        label="新規申込み"
        class="bg-success rounded-lg text-h5 w-50"
        prependIcon="mdi-plus"
        @click="onClick()"
      ></ButtonComponent>
      <ButtonComponent
        style="height: 60px"
        label="問合わせ"
        class="bg-red rounded-lg text-h5 w-50"
        prependIcon="mdi-account"
        to="/question"
      ></ButtonComponent>
    </div>
  </section>
</template>

<style type="text/css">
.hero {
  position: relative;
}

/* video */

.video-box {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* overlay */

.overlay::after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(0, 0, 0, 0.4);
}

/* text */

.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
h1 {
  font-family: "メイリオ", "Meiryo", sans-serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1.2;
  padding: 0 50px;
  text-align: center;
  color: #fff;
}
</style>
