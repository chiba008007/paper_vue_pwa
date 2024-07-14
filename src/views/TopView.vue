<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import cardConponent from "../components/CardConponent.vue";
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
          width="200"
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
          width="200"
          color="primary mb-2"
          class="text-caption"
          text="URL"
        ></cardConponent>
        <a href="http://sample.co.jp" target="_blank" class="ml-2"
          >http://sample.co.jp</a
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cardConponent
          variant="tonal"
          density="compact"
          height="20"
          width="200"
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
  </v-container>
</template>
<style>
.text {
  white-space: pre-line;
}
</style>
