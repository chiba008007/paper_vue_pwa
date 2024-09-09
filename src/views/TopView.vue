<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import cardConponent from "../components/CardConponent.vue";
import UserHelpers from "../functions/userHelper";

const user = UserHelpers();
// ローカルストレージ取得
const ls = user.getStrage();
// ローカルストレージに保存
localStorage.setItem("paper_url", JSON.stringify(ls));
</script>
<template>
  <v-container>
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
          <p class="text-h6">開発部</p>
          <p class="text-caption">おのでら こじろう</p>
          <p class="text-h5 font-weight-black">小野寺 小次郎</p>
        </div>
      </v-col>
      <v-col cols="5">
        <v-img
          :width="200"
          aspect-ratio="16/9"
          cover
          src="../../public/img/account/icon.jpg"
        ></v-img>
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
            <v-img
              :width="200"
              aspect-ratio="16/9"
              cover
              src="../../public/img/company/logo.png"
            ></v-img>
          </v-col>
          <v-col cols="9">
            <p class="text-h6 font-weight-black text">株式会社</p>
            <p class="text-h6 font-weight-black text">イノベーションゲート</p>
            <p class="text-h6 font-weight-black text">3行目</p>
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
        <a href="http://sample.co.jp" target="_blank">http://sample.co.jp</a>
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
          text="住所"
        ></cardConponent>
        <v-row>
          <v-col>
            〒 000-0000<br />
            東京都品川区1丁目0-0 サンプルビル品川13F
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3243.1797907341056!2d139.7381620757852!3d35.62329397260596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95ZOB5bed5Yy6MeS4geebrjAtMCDjgrXjg7Pjg5fjg6vjg5Pjg6vlk4Hlt50xM0Y!5e0!3m2!1sja!2sjp!4v1720959078762!5m2!1sja!2sjp"
              width="100"
              style="border: 0; width: 100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            〒 000-0000<br />
            宮城県仙台市1丁目0-0 サンプルビル仙台13F
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3243.1797907341056!2d139.7381620757852!3d35.62329397260596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95ZOB5bed5Yy6MeS4geebrjAtMCDjgrXjg7Pjg5fjg6vjg5Pjg6vlk4Hlt50xM0Y!5e0!3m2!1sja!2sjp!4v1720959078762!5m2!1sja!2sjp"
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
        <p>090-0000-0000</p>
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
        <p>sample@sample.jp</p>
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
        <p>ファイナンシャルプランナー技能士</p>
        <p>中小企業診断士</p>
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
          <v-timeline-item size="small">
            <v-alert value="true">
              <b>OpenAI</b>
              <p class="text-caption">
                ソフトウェアエンジニア<br />
                2020年10月 - 現在<br />
                自然言語処理システムの開発と改善に従事。<br />
                GPTシリーズのアーキテクチャの維持と拡張を担当。<br />
                ディープラーニングモデルの最適化とスケーラビリティの向上に取り組む
              </p>
            </v-alert>
          </v-timeline-item>
        </v-timeline>
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
          text="自己PR"
        ></cardConponent>
      </v-col>
      <v-card class="ml-4 mr-4 pa-2" variant="tonal">
        私は自然言語処理と人工知能の分野で豊富な経験を持つソフトウェアエンジニアです。これまでのキャリアで、次のような経験を積んできました：<br />
        技術的な深さと広さ:<br />
        深層学習モデルの開発や最適化、自然言語理解システムの設計・実装に携わり、高度な技術的課題に対処してきました。<br />
        チームでの協力:<br />
        大規模なプロジェクトでのチームワークを重視し、他のメンバーとの密接な連携を通じて、成果を最大化することに努めています。<br />
        問題解決能力:<br />
        複雑な問題に対して論理的かつ創造的なアプローチで取り組むことが得意であり、常に効率的な解決策を追求しています。<br />
        継続的な学びと成長:<br />
        技術の進化に常に対応するために、新しいアルゴリズムやツールについて学び続け、自己成長を維持しています。<br />
        私はチャレンジを楽しみ、新しい技術やアイデアを探求することに情熱を持っています。革新的なプロジェクトに貢献し、技術の進化に寄与することを目指しています。
      </v-card>
    </v-row>
  </v-container>
</template>
<style>
.text {
  white-space: pre-line;
}
</style>
