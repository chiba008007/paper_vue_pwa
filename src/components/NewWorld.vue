<template>
  <v-container>
    <h1>私のプロフ</h1>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/home.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" @click="onClick()" class="w-100">
          新規申込はこちら
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn to="/question" color="success" class="w-100"
          >問い合わせはこちら</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">効率的でエコなプロフ交換</h2>

        <v-row justify="center">
          <p>
            「私のプロフは、ビジネスの新常識。紙の名刺を使うことなく、スマートにプロフィール情報をシェアできます。名刺の情報はすべてオンラインで管理され、更新も簡単。ビジネスのスピードに合わせて、どこでも、誰とでも迅速に名刺交換が可能です。」
          </p>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          あなたのプロフをデジタルで進化させる
        </h2>

        <v-row justify="center">
          <p>
            「従来の名刺交換の方法をアップグレード。デジタル名刺なら、QRコードやリンクで瞬時に情報を共有でき、相手が必要な時にすぐにアクセスできます。紙を使わず、エコで便利、ビジネスシーンにぴったりな新しいツールです。」
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  methods: {
    onClick() {
      location.href = "/regist";
    },
  },
  data() {
    return {};
  },
});
</script>
