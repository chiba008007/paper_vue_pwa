<script setup lang="ts">
import { ref, defineProps, withDefaults, defineEmits, computed } from "vue";
import RadioComponent from "./RadioComponent.vue";
import topImageComponent from "./topImageComponent.vue";
import { d_colors, d_pie_colors } from "@/plugins/const";
import {
  templateList,
  d_Path,
  chartOptions,
  pieOptions,
} from "@/plugins/const";
const templateSelected = ref<string>("1");

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface Props {
  data?: Record<string, any>;
  user_id?: number;
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({}),
});

const emit = defineEmits<{
  (e: "updateTopImage", value: string, type: string): void;
  (e: "onKeyup", value: string, type: string): void;
  (e: "onChecked", value: boolean | null, type: string): void;
  (e: "onImageChecked", value: boolean | null, type: string): void;
  (e: "onPoints", value: string, type: string, key: number): void;
  (
    e: "onTimeLine",
    value: string,
    type: string,
    clumn: string,
    key: number
  ): void;
  (
    e: "onImages",
    value: string,
    type: string,
    clumn: string,
    key: number
  ): void;
  (
    e: "onImageCheckbox",
    value: boolean,
    type: string,
    clumn: string,
    key: number
  ): void;
  (
    e: "onCheckSNS",
    value: boolean | null,
    type: string,
    clumn: string,
    key: number
  ): void;
}>();

const maxY = computed(() => {
  const arr = props?.data?.chart_data;
  if (!Array.isArray(arr)) return 0;

  const numeric = arr.filter((v) => typeof v === "number");
  return numeric.length ? Math.max(...numeric) : 0;
});
</script>
<template>
  <p class="font-weight-black text-h6">テンプレート選択</p>
  <RadioComponent
    :templateList="templateList"
    :selected="templateSelected"
    :inline="true"
  ></RadioComponent>

  <topImageComponent
    @updateTopImage="(e, type) => emit('updateTopImage', e, type)"
    @onKeyup="(e, type) => emit('onKeyup', e, type)"
    @onChecked="(e, type) => emit('onChecked', e, type)"
    @onImageChecked="(e, type) => emit('onImageChecked', e, type)"
    @onPoints="(e, type, key) => emit('onPoints', e, type, key)"
    @onTimeLine="
      (e, type, clumn, key) => emit('onTimeLine', e, type, clumn, key)
    "
    @onImages="(e, type, clumn, key) => emit('onImages', e, type, clumn, key)"
    @onImageCheckbox="
      (e, type, clumn, key) => emit('onImageCheckbox', e, type, clumn, key)
    "
    @onCheckSNS="
      (e, type, clumn, key) => emit('onCheckSNS', e, type, clumn, key)
    "
    :user_id="props.user_id"
    :section1="props.data.section1"
    :section2="props.data.section2"
    :section3="props.data.section3"
    :section4="props.data.section4"
    :section5="props.data.section5"
    :section6="props.data.section6"
    :top="d_Path + props.data.top"
    :human="d_Path + props.data.human"
    :yaImage="d_Path + `/default/template1/ya.png`"
    :text1="props.data.text1"
    :text2="props.data.text2"
    :text3="props.data.text3"
    :text4="props.data.text4"
    :name="props.data.name"
    :kana="props.data.kana"
    :mail="props.data.mail"
    :title1="props.data.title1"
    :title1image="d_Path + props.data.title1_image"
    :title1_image_checked="props.data.title1_image_checked"
    :text5="props.data.text5"
    :text6="props.data.text6"
    :text7="props.data.text7"
    :text8="props.data.text8"
    :text9="props.data.text9"
    :text10="props.data.text10"
    :text11="props.data.text11"
    :text12="props.data.text12"
    :text13="props.data.text13"
    :text14="props.data.text14"
    :text15="props.data.text15"
    :image1="d_Path + props.data.image1"
    :image2="d_Path + props.data.image2"
    :image3="d_Path + props.data.image3"
    :image4="d_Path + props.data.image4"
    :image5="d_Path + props.data.image5"
    :image1_checked="props.data.image1_checked"
    :image2_checked="props.data.image2_checked"
    :image3_checked="props.data.image3_checked"
    :image4_checked="props.data.image4_checked"
    :image5_checked="props.data.image5_checked"
    :text16="props.data.text16"
    :text17="props.data.text17"
    :text18="props.data.text18"
    :text19="props.data.text19"
    :text20="props.data.text20"
    :text21="props.data.text21"
    :text22="props.data.text22"
    :text23="props.data.text23"
    :textarea1="props.data.textarea1"
    :text24="props.data.text24"
    :text25="props.data.text25"
    :chartOptions="chartOptions(maxY)"
    :chartData="
    {
      labels: props.data.chart_labels,
      datasets: [
        {
          label: '値',
          data: props.data.chart_data,
          clip: false as const,
        },
      ],
    }"
    :charttitle="props.data.charttitle"
    :chartXList="props.data.chart_labels"
    :chartYList="props.data.chart_data"
    :pieOptions="pieOptions"
    :pieData="{
      labels: props.data.pie_labels,
      datasets: [
        {
          data: props.data.pie_data,
          backgroundColor: d_pie_colors,
        },
      ],
    }"
    :pietitle1="props.data.pietitle1"
    :pieData2="{
      labels: props.data.pie2_labels,
      datasets: [
        {
          data: props.data.pie2_data,
          backgroundColor: d_pie_colors,
        },
      ],
    }"
    :pieNameList="props.data.pie_labels"
    :piePointList="props.data.pie_data"
    :pietitle2="props.data.pietitle2"
    :pie2NameList="props.data.pie2_labels"
    :pie2PointList="props.data.pie2_data"
    :textarea2="props.data.textarea2"
    :title2="props.data.title2"
    :chipTitle="props.data.chip_title"
    :chipTitle2="props.data.chip_title2"
    :chipTitle3="props.data.chip_title3"
    :chipBody="props.data.chip_body"
    :buttonLabel="props.data.button_label"
    :buttonLink="props.data.button_link"
    :buttonText="props.data.button_text"
    :title3="props.data.title3"
    :items="props.data.items"
    :colors="d_colors"
    :title4="props.data.title4"
    :text26="props.data.text26"
    :money="props.data.money"
    :text27="props.data.text27"
    :tables="props.data.tables"
    :comments="props.data.comments"
    :title5="props.data.title5"
    :sns="props.data.sns"
    :title6="props.data.title6"
    :text28="props.data.text28"
    :contactMail="props.data.contact_mail"
    :contactTel="props.data.contact_tel"
  ></topImageComponent>
</template>
