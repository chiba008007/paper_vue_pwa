<script setup lang="ts">
import { defineProps, withDefaults, ref, onMounted, computed } from "vue";
import {
  d_Path,
  chartOptions,
  pieOptions,
  d_pie_colors,
} from "@/plugins/const";
import VideoConponent from "@/components/VideoConponent.vue";
import ImgConponent from "@/components/ImgConponent.vue";
import ChipConponent from "@/components/ChipConponent.vue";
import { Bar, Pie } from "vue-chartjs";
import { nl2br } from "@/plugins/nl2br";
import ButtonComponent from "@/components/ButtonComponent.vue";
import AlertComponent from "./AlertComponent.vue";

interface Props {
  data?: Record<string, any>;
  user_id?: number;
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({}),
});

const imageHeight = ref(200);

onMounted(() => {
  if (props.data.top) {
    const img = new Image();
    img.src = props.data.top;
    img.onload = () => {
      imageHeight.value = img.height;
    };
  }
});
const maxY = computed(() => {
  const arr = props?.data?.chart_data;
  if (!Array.isArray(arr)) return 0;

  const numeric = arr.filter((v) => typeof v === "number");
  return numeric.length ? Math.max(...numeric) : 0;
});
</script>
<template>
  <v-sheet
    class="d-flex align-center justify-center ma-2"
    :style="{
      backgroundImage: `url(${d_Path}${props.data.top})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: imageHeight + 'px',
    }"
  >
  </v-sheet>

  <div class="img-overlap-wrapper">
    <ImgConponent
      :src="`${d_Path}${props.data.human}`"
      :width="180"
      :aspect="1"
      class="img-overlap"
    ></ImgConponent>
  </div>
  <div class="mt-2">
    <div class="text-center">
      {{ props.data.text1 }}
    </div>
    <div class="text-center">
      {{ props.data.text2 }}
    </div>
  </div>
  <div class="mt-4">
    <div class="text-center text-h3">
      {{ props.data.name }}
    </div>
    <div class="text-center text-h6 mt-2">
      {{ props.data.kana }}
    </div>
    <div class="text-center text-h6 mt-2">
      {{ props.data.mail }}
    </div>
  </div>
  <div class="d-flex justify-center mt-2">
    <ChipConponent
      v-if="props.data.text3"
      :text="props.data.text3"
      class="text-h6 px-10 bg-green-darken-4"
    ></ChipConponent>
    <ChipConponent
      v-if="props.data.text4"
      :text="props.data.text4"
      class="text-h6 ml-2 px-10 bg-green-darken-4"
    ></ChipConponent>
  </div>
  <section v-show="props.data.section1">
    <v-sheet
      class="d-flex align-left justify-bottom mt-2 yaImage mt-5"
      :style="{
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50px',
      }"
    >
      {{ props.data.title1 }}
    </v-sheet>
    <div class="d-flex justify-center my-2">
      <ImgConponent
        :src="`${d_Path}${props.data.title1_image}`"
        class="w-75"
      ></ImgConponent>
    </div>
    <v-row class="my-2 pb-2 border-bottom text-h4 mt-10">
      {{ props.data.text5 }}
    </v-row>
    <v-row class="my-2 pb-2 d-flex border-bottom" v-for="n in 5" :key="n">
      <v-col cols="4">
        {{ props.data["text" + (4 + n * 2)] }}
      </v-col>
      <v-col cols="8">
        {{ props.data["text" + (5 + n * 2)] }}
      </v-col>
    </v-row>

    <div class="d-flex">
      <div class="w-75">
        <VideoConponent
          :videoUrl="`${d_Path}${props.data.image1}`"
        ></VideoConponent>
      </div>
      <div class="ml-2 w-25">
        <ImgConponent :src="`${d_Path}${props.data.image2}`"></ImgConponent>
      </div>
    </div>
    <v-row dense>
      <v-col
        ><ImgConponent :src="`${d_Path}${props.data.image3}`"></ImgConponent
      ></v-col>
      <v-col
        ><ImgConponent :src="`${d_Path}${props.data.image4}`"></ImgConponent
      ></v-col>
      <v-col
        ><ImgConponent :src="`${d_Path}${props.data.image5}`"></ImgConponent
      ></v-col>
    </v-row>

    <v-row class="my-2 pb-2 d-flex border-bottom" v-for="n in 4" :key="n">
      <v-col cols="4">
        {{ props.data["text" + (16 + n * 2)] }}
      </v-col>
      <v-col cols="8">
        {{ props.data["text" + (17 + n * 2)] }}
      </v-col>
    </v-row>
    <div class="text-center bg-teal-darken-4 pa-10">
      {{ props.data.textarea1 }}
    </div>

    <v-card class="pa-4 mt-2 w-100" v-if="props.data.charttitle">
      <v-card-title>{{ props.data.charttitle }}</v-card-title>
      <Bar
        :data="
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
        :options="chartOptions(maxY)"
      />
    </v-card>
    <div class="d-flex mt-2">
      <v-card class="w-100">
        <v-card-title>{{ props.data.pietitle1 }}</v-card-title>
        <v-card-text>
          <Pie
            :data="{
              labels: props.data.pie_labels,
              datasets: [
                {
                  data: props.data.pie_data,
                  backgroundColor: d_pie_colors,
                },
              ],
            }"
            :options="pieOptions"
          />
        </v-card-text>
      </v-card>
      <v-card class="w-100">
        <v-card-title>{{ props.data.pietitle2 }}</v-card-title>
        <v-card-text>
          <Pie
            :data="{
              labels: props.data.pie2_labels,
              datasets: [
                {
                  data: props.data.pie2_data,
                  backgroundColor: d_pie_colors,
                },
              ],
            }"
            :options="pieOptions"
          />
        </v-card-text>
      </v-card>
    </div>
    <div class="text-center bg-teal-darken-4 pa-10">
      <p v-html="nl2br(props.data.textarea2)"></p>
    </div>
  </section>
  <section v-show="props.data.section2">
    <v-sheet
      class="d-flex align-left justify-bottom mt-2 yaImage mt-5"
      :style="{
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50px',
      }"
    >
      {{ props.data.title2 }}
    </v-sheet>

    <div class="areas mb-10" v-for="i in 3" :key="i">
      <v-sheet
        class="d-flex align-center position-relative custom-height-row bg-blue-lighten-4"
      >
        <ChipConponent
          v-if="props.data.chip_title?.[i - 1]"
          :text="props.data.chip_title?.[i - 1]"
          class="position-absolute text-h6 px-10"
        ></ChipConponent>
        <v-row>
          <v-col cols="4" class="text-center border-right text-h4">{{
            props.data.chip_title2?.[i - 1]
          }}</v-col>
          <v-col cols="8">
            <p class="text-h6 ml-2">{{ props.data.chip_title3?.[i - 1] }}</p>
            <p v-html="nl2br(props.data.chip_body?.[i - 1])"></p>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
    <v-row>
      <v-col cols="12" md="4">
        <ButtonComponent
          v-if="props.data.button_label"
          :label="props.data.button_label"
          class="bg-green-darken-4 w-100"
        ></ButtonComponent>
      </v-col>
      <v-col cols="12" md="8">{{ props.data.button_text }}</v-col>
    </v-row>
  </section>
  <section v-show="props.data.section3">
    <v-sheet
      class="d-flex align-left justify-bottom mt-2 yaImage mt-5"
      :style="{
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50px',
      }"
    >
      {{ props.data.title3 }}
    </v-sheet>
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in props.data.items"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <AlertComponent
          class="w-100"
          :text="item.text"
          :title="item.title"
          :color="item.color"
          :value="true"
          icon="mdi-information"
        ></AlertComponent>
      </v-timeline-item>
    </v-timeline>
  </section>
  <section v-show="props.data.section4">
    <v-sheet
      class="d-flex align-left justify-bottom mt-2 yaImage mt-5"
      :style="{
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50px',
      }"
    >
      {{ props.data.title4 }}
    </v-sheet>

    <v-row class="bg-surface-variant rounded-pill mt-8">
      <v-col cols="12" md="4" class="text-center">
        <p class="mt-4 body-1">{{ props.data.text26 }}</p>
      </v-col>
      <v-col cols="12" md="8" class="text-center text-h3">
        {{ props.data.money }}
      </v-col>
    </v-row>

    <v-row
      class="bg-surface-variant rounded-pill w-25 mt-6 text-center"
      v-if="props.data.text27"
    >
      <v-col cols="12">
        {{ props.data.text27 }}
      </v-col>
    </v-row>

    <v-row
      class="border-bottom"
      v-for="(table, tableIndex) in props.data.tables"
      :key="tableIndex"
    >
      <v-col cols="4">
        {{ table.title }}
      </v-col>
      <v-col cols="8">
        {{ table.value }}
      </v-col>
    </v-row>
    <v-card class="mx-auto mt-5">
      <v-list lines="two">
        <div v-for="comment in props.data.comments" :key="comment.id">
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar>
                <img :src="comment.icon" alt="avatar" class="w-100" />
              </v-avatar>
            </template>
            <template v-slot:title>
              {{ comment.title }}
            </template>
            <template v-slot:subtitle>
              {{ comment.value }}
            </template>
          </v-list-item>

          <v-divider inset></v-divider>
        </div>
      </v-list>
    </v-card>
  </section>
  <section v-show="props.data.section5" class="mt-5">
    <v-sheet
      class="d-flex align-left justify-bottom mt-2 yaImage mt-5"
      :style="{
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50px',
      }"
    >
      {{ props.data.title5 }}
    </v-sheet>

    <v-row no-gutters>
      <v-col cols="1" v-for="sn in props.data.sns" :key="sn.key">
        <v-icon size="x-large" v-if="sn.flag" class="mr-3">
          <a :href="sn.url" target="_blank">
            <img
              :src="d_Path + sn.image"
              alt="avatar"
              class="w-100"
              target="_blank"
            />
          </a>
        </v-icon>
      </v-col>
    </v-row>
  </section>
  <section v-show="props.data.section6" class="mt-5">
    <v-sheet
      class="d-flex align-left justify-bottom mt-2 yaImage mt-5"
      :style="{
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50px',
      }"
    >
      {{ props.data.title6 }}
    </v-sheet>
    <p>{{ props.data.text28 }}</p>
    <p>
      <a :href="`mailto:${props.data.contact_mail}`">
        {{ props.data.contact_mail }}
      </a>
    </p>
    <p>
      <a :href="`tel:${props.data.contact_tel}`">
        {{ props.data.contact_tel }}
      </a>
    </p>
  </section>
</template>
<style lang="scss">
@use "@/assets/template1.scss" as *;
</style>
