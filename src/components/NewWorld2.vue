<script setup lang="ts">
import { ref, onMounted } from "vue";
import ImgConponent from "./ImgConponent.vue";
import CardConponent from "./CardConponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import NewWorld2Left from "./NewWorld2Left.vue";
import NewWorld2Right from "./NewWorld2Right.vue";

const scrollableColumn = ref<HTMLElement | null>(null);

// スクロール位置を指定する関数
const scrollToPosition = (elementName: string) => {
  const element = document.getElementById(elementName);
  element?.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  //scrollToPosition(0);
});
const onClick = () => {
  location.href = "/regist";
};
</script>

<template>
  <v-container>
    <v-row>
      <!-- 左カラム（モバイルでは非表示） -->
      <NewWorld2Left
        @scrollToPosition="(e:string) => scrollToPosition(e)"
      ></NewWorld2Left>

      <!-- 中央カラム（全デバイスで表示） -->
      <v-col cols="12" md="6" class="scrollable-column ma-0 pa-0">
        <v-card class="scrollable-card ma-0 pa-0 my-list">
          <v-card-text class="ma-0 pa-0">
            <div ref="scrollableColumn" class="content ma-0 pa-0">
              <section class="hero">
                <div class="video-box overlay">
                  <video class="video" muted autoplay loop playsinline>
                    <source src="/top/top.mp4" type="video/mp4" />
                  </video>
                </div>
                <div class="text-box">
                  <h1>
                    夢を追い、企業とのコラボレーションに挑戦する情熱を全力でサポート
                  </h1>
                </div>
              </section>
              <section>
                <div class="ma-2">
                  <ImgConponent
                    aspect-ratio="16/9"
                    cover
                    :src="require('@/assets/Sponnect.png')"
                    class="min-image"
                  ></ImgConponent>
                  <CardConponent
                    text="sponnect(スポネクト)とは"
                    color="primary"
                    variant="tonal"
                    ma="ma-1"
                    pa="pa-1"
                    id="targetElement1"
                  ></CardConponent>
                  <p class="pa-2">
                    「Sponnect」は、学生が学園祭やクラブ活動を通じて、自らの情熱を企業に伝え、支援を受けるための『架け橋』として誕生しました。<br />
                    従来の協賛獲得プロセスは、情報が紙や口頭に頼っており、信頼性を証明するのが難しいものでした。<br />
                    しかし、Sponnectはデジタル技術を活用し、学生の活動実績や魅力を一元管理。最新のデータと洗練されたデザインで、企業に「本物の情熱と実績」を伝えるツールとして進化しました。<br />
                    このブランドは、「若者の挑戦を後押しする」という理念のもと、すべての学生に夢を実現するための強力なパートナーとなることを目指しています。Sponnectを通じて、未来を担う若者と企業が共に成長し、地域社会に新しい価値を創造する。
                  </p>
                  <CardConponent
                    text="sponnect(スポネクト)の特徴"
                    color="red"
                    variant="tonal"
                    ma="ma-1"
                    pa="pa-1"
                    id="targetElement2"
                  ></CardConponent>
                  <v-list lines="one" class="mt-0 my-list">
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
                  <CardConponent
                    text="ご注文の流れ"
                    color="purple"
                    variant="tonal"
                    ma="ma-1"
                    pa="pa-1"
                    id="targetElement3"
                  ></CardConponent>
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
                  <CardConponent
                    text="よくある質問"
                    color="primary"
                    variant="tonal"
                    ma="ma-1"
                    pa="pa-1"
                    id="targetElement4"
                  ></CardConponent>
                  <v-card
                    title="初回はどのように注文すれば良いですか？"
                    text="注文ページからご注文ください。"
                    variant="outlined"
                    class="mt-2"
                  ></v-card>
                  <v-card
                    title="料金はいくらですか？"
                    text="1,200円/年額となります。"
                    variant="outlined"
                    class="mt-2"
                  ></v-card>
                  <div class="mt-2">
                    <CardConponent
                      text="お問い合わせ"
                      color="red"
                      variant="tonal"
                      ma="ma-1"
                      pa="pa-1"
                      id="targetElement5"
                    ></CardConponent>

                    <ButtonComponent
                      variant="tonal"
                      style="height: 60px"
                      label="新規申込み"
                      class="bg-yellow-lighten-2 rounded-lg text-h5 mt-3 w-50"
                      prependIcon="mdi-plus"
                      @click="onClick()"
                    ></ButtonComponent>
                    <ButtonComponent
                      variant="tonal"
                      style="height: 60px"
                      label="問合わせ"
                      class="bg-light-blue-lighten-4 rounded-lg text-h5 mt-3 w-50"
                      prependIcon="mdi-account"
                      to="/question"
                    ></ButtonComponent>
                  </div>
                </div>
              </section>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 右カラム（モバイルでは非表示） -->
      <NewWorld2Right :src="require('@/assets/qr.png')"></NewWorld2Right>
    </v-row>
  </v-container>
</template>

<style scoped>
.scrollable-column {
  display: flex;
  flex-direction: column;
}

.scrollable-card {
  height: 100%; /* v-cardの高さを100%に設定 */
}

.content {
  max-height: 100vh; /* 最大高さを80vhに設定してスクロール可能に */
  overflow-y: auto; /* コンテンツがはみ出た場合にスクロールバーを表示 */
  padding: 16px; /* コンテンツ周りにパディングを追加 */
}
.my-list {
  background-color: #f1efe7;
}

.hero {
  position: relative;
}

/* video */

.video-box {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50vh;
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
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  padding: 0 50px;
  text-align: center;
  color: #fff;
}
.min-image {
  width: 160px;
  margin: 10px auto;
}
</style>
