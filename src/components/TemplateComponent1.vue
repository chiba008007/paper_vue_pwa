<script setup lang="ts">
import { ref } from "vue";
import RadioComponent from "./RadioComponent.vue";
import topImageComponent from "./topImageComponent.vue";
import { d_colors } from "@/plugins/const";
import { templateList, d_Path } from "@/plugins/const";
const templateSelected = ref<string>("1");

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const chartData = {
  labels: ["2021", "2022", "2023", "2024", "2025(目標)"],
  datasets: [
    {
      label: "売上",
      data: [8000, 9000, 13000, 15000, 18000],
      // backgroundColor: '#1976d2', // 色は自動でOK
      clip: false as const,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      min: 0,
      max: 18000,
    },
  },
};

const pieData = {
  labels: [
    "大学生(60%)",
    "一般(20%)",
    "高校生(10%)",
    "ファミリー(5%)",
    "その他(5%)",
  ],
  datasets: [
    {
      data: [60, 20, 10, 5, 5],
      // backgroundColor: ['#f87171', '#60a5fa', '#34d399'], // 色指定も可能
      // borderColor: 'white'
    },
  ],
};
const pieData2 = {
  labels: ["男性(50%)", "女性(40%)", "その他(10%)"],
  datasets: [
    {
      data: [50, 40, 10],
      // backgroundColor: ['#f87171', '#60a5fa', '#34d399'], // 色指定も可能
      // borderColor: 'white'
    },
  ],
};
const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        boxWidth: 12, // 色アイコンのサイズ
        padding: 5, // ラベル間の余白
        font: {
          size: 9, // フォントを小さく
        },
        usePointStyle: true, // 点アイコン表示で横に詰める
      },
    },
    title: { display: false },
  },
};
</script>
<template>
  <div>
    <RadioComponent
      :templateList="templateList"
      :selected="templateSelected"
      :inline="true"
    ></RadioComponent>
  </div>
  <div>
    <topImageComponent
      :section1="true"
      :section2="true"
      :section3="true"
      :section4="true"
      :section5="true"
      :section6="true"
      :top="d_Path + `/default/template1/top.png`"
      :human="d_Path + `/default/template1/human.png`"
      :yaImage="d_Path + `/default/template1/ya.png`"
      text1="〇〇大学 〇〇祭実行委員会"
      text2="渉外局 2 年"
      text3="〇〇学部"
      text4="〇〇県出身"
      name="スポネク 太郎"
      kana="Taro Sponnect"
      mail="〇〇〇〇@ 〇〇. c o m"
      title1="about"
      :title1image="d_Path + `/default/template1/title1.png`"
      text5="〇〇大学 〇〇祭実行委員会"
      text6="所属学生数"
      text7="〇〇〇人( 1 年〇〇人/ 2 年〇〇人/ 3 年〇〇人）"
      text8="男女比"
      text9="〇:〇"
      text10="公式HP"
      text11="h t t p s : / / 〇〇〇〇〇〇"
      text12="M a i l"
      text13="〇〇〇〇@ 〇〇〇〇. c o m"
      text14="TEL"
      text15="0 3 - 〇〇〇〇- 〇〇〇〇"
      :image1="d_Path + `/default/template1/image1.mp4`"
      :image2="d_Path + `/default/template1/image2.png`"
      :image3="d_Path + `/default/template1/image3.png`"
      :image4="d_Path + `/default/template1/image4.png`"
      :image5="d_Path + `/default/template1/image5.png`"
      text16="開催日時"
      text17="2 0 2 5 / 〇〇/ 〇〇 ~ 〇〇"
      text18="開催場所"
      text19="東京都〇〇区〇〇"
      text20="参加団体数"
      text21="〇〇〇団体"
      text22="想定来場者数"
      text23="約〇〇〇〇人"
      textarea1="大学祭の詳細やテーマ 特色などなど
文字の大きさ・色・配置・装飾などを自分たちで設定。 フリーテキストエリア
フリーテキストエリア フリーテキストエリア フリーテキストエリア
フリーテキストエリア フリーテキストエリア フリーテキストエリア
フリーテキストエリア"
      text24="後援"
      text25="〇〇〇〇"
      :chartOptions="chartOptions"
      :chartData="chartData"
      charttitle="来場者数"
      :chartXList="[2021, 2022, 2023, 2024, 2025]"
      :chartYList="[8000, 8500, 13000, 15000, 18000]"
      :pieOptions="pieOptions"
      :pieData="pieData"
      pietitle1="来場者分布1"
      :pieData2="pieData2"
      :pieNameList="[
        '大学生(60%)',
        '一般(20%)',
        '高校生(10%)',
        'ファミリー(5%)',
        'その他(5%)',
      ]"
      :piePointList="[60, 20, 10, 5, 5]"
      pietitle2="来場者分布2"
      :pie2NameList="['男性(50%)', '女性(40%)', 'その他(10%)', '', '']"
      :pie2PointList="[50, 40, 10, 0, 0]"
      textarea2="アピールポイントなど。
フリーテキストエリア フリーテキストエリア フリーテキストエリア フリーテキストエリア
フリーテキストエリア フリーテキストエリア フリーテキストエリア フリーテキストエリア
フリーテキストエリア フリーテキストエリア フリーテキストエリア フリーテキストエリア
フリーテキストエリア フリーテキストエリア フリーテキストエリア フリーテキストエリア"
      title2="plan"
      :chipTitle="['plan1', 'plan2', 'plan3']"
      :chipTitle2="['￥0,000', '￥0,000', '￥0,000']"
      :chipTitle3="['協賛タイトル', '協賛タイトル', '協賛タイトル']"
      :chipBody="['協賛内容', '協賛内容', '協賛内容']"
      buttonLabel="資料Download"
      buttonLink="http://www."
      buttonText="企画書をダウンロードしてご覧いただけます。"
      title3="schedule"
      :items="[
        {
          id: 1,
          title: 'お申し込み',
          text: '◯月◯日までに下記お問い合わせ先までお申し込みください。',
          color: 'green-darken-4',
          colorText: 'green',
        },
        {
          id: 2,
          title: '広告データ入稿',
          text: '◯月◯日までにパンフレットに掲載する広告データを入稿してください。',
          color: 'green-darken-4',
          colorText: 'green',
        },
        {
          id: 3,
          title: '大学祭当日',
          text: '◯月◯日～◯月◯日来場者に御社の広告が掲載された\nパンフレットを配布いたします',
          color: 'cyan-darken-4',
          colorText: 'cyan',
        },
        {
          id: 4,
          title: '実施報告',
          text: '大学祭の報告書をお送りします。本年度の来場者数などご確認いただけます。',
          color: 'green-darken-4',
          colorText: 'green',
        },
        {
          id: 5,
          title: '協賛金お支払い',
          text: '◯月◯日までに請求書をお送りします。\n期日までにお支払いお願いいたします。',
          color: 'green-darken-4',
          colorText: 'green',
        },
      ]"
      :colors="d_colors"
      title4="track record"
      text26="昨年度の協賛金総額"
      money="¥ 0,000,000"
      text27="使用用途"
      :tables="[
        {
          title: '項目1',
          value: '￥000,000',
        },
        {
          title: '項目2',
          value: '￥000,000',
        },
        {
          title: '項目3',
          value: '￥000,000',
        },
        {
          title: '項目4',
          value: '￥000,000',
        },
        {
          title: '項目5',
          value: '￥000,000',
        },
        {
          title: '項目6',
          value: '￥000,000',
        },
        {
          title: '項目7',
          value: '￥000,000',
        },
        {
          title: '項目8',
          value: '￥000,000',
        },
        {
          title: '項目9',
          value: '￥000,000',
        },
        {
          title: '項目10',
          value: '￥000,000',
        },
        {
          title: '項目11',
          value: '￥000,000',
        },
        {
          title: '項目12',
          value: '￥000,000',
        },
      ]"
      :comments="[
        {
          id: 1,
          icon: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: '株式会社〇〇〇〇',
          value:
            'コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント',
        },
        {
          id: 2,
          icon: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: '株式会社〇〇〇〇',
          value:
            'コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント',
        },
        {
          id: 3,
          icon: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: '株式会社〇〇〇〇',
          value:
            'コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント',
        },
      ]"
      title5="SNS"
      :sns="[
        {
          key: 'x',
          flag: true,
          url: 'http://yahoo.com',
          image: d_Path + `/default/template1/x.png`,
        },
        {
          key: 'insta',
          flag: true,
          url: 'http://yahoo.com',
          image: d_Path + `/default/template1/insta.png`,
        },
        {
          key: 'facebook',
          flag: true,
          url: 'http://yahoo.com',
          image: d_Path + `/default/template1/facebook.png`,
        },
        {
          key: 'youtube',
          flag: true,
          url: 'http://yahoo.com',
          image: d_Path + `/default/template1/youtube.png`,
        },
        {
          key: 'n',
          flag: true,
          url: 'http://yahoo.com',
          image: d_Path + `/default/template1/n.png`,
        },
        {
          key: 'tiktok',
          flag: true,
          url: 'http://yahoo.com',
          image: d_Path + `/default/template1/tiktok.png`,
        },
      ]"
      title6="contact"
      text28="下記連絡先まで、ご連絡ください。"
      contactMail="〇〇〇〇@〇〇〇〇.com"
      contactTel="03-〇〇〇〇-〇〇〇〇"
    ></topImageComponent>
  </div>
</template>
