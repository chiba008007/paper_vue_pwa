<script setup lang="ts">
import { defineProps, withDefaults, ref, onMounted } from "vue";
import FileComponent from "./FileComponent.vue";
import ImgConponent from "./ImgConponent.vue";
import ChipConponent from "./ChipConponent.vue";
import TextComponent from "./TextComponent.vue";
import TextAreaComponent from "./TextAreaComponent.vue";
import VideoConponent from "./VideoConponent.vue";
import CheckboxConponent from "./CheckboxConponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import AlertComponent from "./AlertComponent.vue";
import SelectColorComponent from "./SelectColorComponent.vue";
import DeviderComponent from "./DeviderComponent.vue";
import { Bar, Pie } from "vue-chartjs";
import type { ChartOptions, ChartData } from "chart.js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface ColorItem {
  value: string;
  color: string;
}

interface Props {
  width?: string | number;
  aspect?: string;
  top?: string;
  human?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  name?: string;
  kana?: string;
  mail?: string;
  yaImage?: string;
  section1?: boolean;
  title1?: string;
  title1image?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  text10?: string;
  text11?: string;
  text12?: string;
  text13?: string;
  text14?: string;
  text15?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  text16?: string;
  text17?: string;
  text18?: string;
  text19?: string;
  text20?: string;
  text21?: string;
  text22?: string;
  text23?: string;
  textarea1?: string;
  text24?: string;
  text25?: string;
  chartOptions?: ChartOptions<"bar">;
  chartData?: ChartData<"bar">;
  charttitle?: string;
  pieOptions?: ChartOptions<"pie">;
  pieData?: ChartData<"pie">;
  pietitle1?: string;
  pieData2?: ChartData<"pie">;
  pietitle2?: string;
  chartXList?: number[];
  chartYList?: number[];
  pieNameList?: string[];
  piePointList?: number[];
  pie2NameList?: string[];
  pie2PointList?: number[];
  textarea2?: string;
  section2?: boolean;
  title2?: string;
  chipTitle?: string[];
  chipTitle2?: string[];
  chipTitle3?: string[];
  chipBody?: string[];
  buttonLabel?: string;
  buttonLink?: string;
  buttonText?: string;
  section3?: boolean;
  title3?: string;
  items?: {
    id: number;
    text: string;
    title: string;
    color: string;
    colorText: string;
  }[];
  colors?: ColorItem[];
  title4?: string;
  section4?: boolean;
  text26?: string;
  money?: string;
  text27?: string;
  tables?: {
    title: string;
    value: string;
  }[];
  comments?: {
    id: number;
    icon: string;
    title: string;
    value: string;
  }[];
  title5?: string;
  section5?: boolean;
  sns: {
    key: string;
    flag: boolean;
    url: string;
    image: string;
  }[];
  title6?: string;
  section6?: boolean;
  text28: string;
  contactMail: string;
  contactTel: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: undefined,
  aspect: undefined,
  colors: () => [],
});
const imageHeight = ref(400);

onMounted(() => {
  if (props.top) {
    const img = new Image();
    img.src = props.top;
    img.onload = () => {
      imageHeight.value = img.height;
    };
  }
});
</script>
<template>
  <v-sheet
    class="d-flex align-center justify-center ma-2"
    :style="{
      backgroundImage: `url(${props.top})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: imageHeight + 'px',
    }"
  >
    <FileComponent
      label="画像を選択してください"
      checkboxlabel="画像削除"
    ></FileComponent>
  </v-sheet>
  <div class="img-overlap-wrapper">
    <ImgConponent
      :src="props.human"
      :width="180"
      :aspect="1"
      class="img-overlap"
    ></ImgConponent>
  </div>
  <FileComponent
    label="人物画像を選択してください"
    checkboxlabel="画像削除"
  ></FileComponent>
  <div class="mt-2">
    <div class="text-center">
      <TextComponent density="compact" :value="props.text1"></TextComponent>
    </div>
    <div class="text-center">
      <TextComponent density="compact" :value="props.text2"></TextComponent>
    </div>
  </div>
  <div class="mt-4">
    <div class="text-center text-h3">
      <TextComponent density="compact" :value="props.name"></TextComponent>
    </div>
    <div class="text-center text-h6 mt-2">
      <TextComponent density="compact" :value="props.kana"></TextComponent>
    </div>
    <div class="text-center text-h6 mt-2">
      <TextComponent density="compact" :value="props.mail"></TextComponent>
    </div>
  </div>
  <div class="d-flex justify-center mt-2">
    <TextComponent density="compact" :value="props.text3"></TextComponent>
    <TextComponent density="compact" :value="props.text4"></TextComponent>
  </div>

  <v-sheet
    class="d-flex align-left justify-bottom mt-2"
    :style="{
      backgroundImage: `url(${props.yaImage})`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '80px',
    }"
  >
    <CheckboxConponent label="有効"></CheckboxConponent>
    <TextComponent
      class="ml-5"
      density="compact"
      variant="outlined"
      :value="props.title1"
      style="height: 30px"
    ></TextComponent>
  </v-sheet>

  <section v-if="props.section1">
    <div class="d-flex justify-center">
      <ImgConponent :src="props.title1image" class="w-75"></ImgConponent>
    </div>
    <FileComponent
      label="タイトル画像を選択してください"
      checkboxlabel="画像削除"
    ></FileComponent>
    <div class="my-2 pb-2 border-bottom">
      <TextComponent density="compact" :value="props.text5"></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text6"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text7"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text8"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text9"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text10"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text11"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text12"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text13"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text14"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text15"
      ></TextComponent>
    </div>
    <div class="d-flex">
      <div class="w-75">
        <VideoConponent :videoUrl="props.image1"></VideoConponent>
      </div>
      <div class="ml-2 w-25">
        <ImgConponent
          :src="props.image2"
          checkboxlabel="画像削除"
        ></ImgConponent>
      </div>
    </div>
    <FileComponent
      label="動画を選択してください"
      density="compact"
      checkboxlabel="画像削除"
    ></FileComponent>

    <FileComponent
      label="画像を選択してください"
      density="compact"
      checkboxlabel="画像削除"
    ></FileComponent>
    <div class="d-flex">
      <v-sheet
        class="d-flex align-center justify-center mt-2"
        :style="{
          backgroundImage: `url(${props.image3})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '160px',
          width: '33%',
        }"
      >
      </v-sheet>
      <v-sheet
        class="d-flex align-center justify-center mt-2"
        :style="{
          backgroundImage: `url(${props.image4})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '160px',
          width: '33%',
          marginLeft: '1%',
        }"
      >
      </v-sheet>
      <v-sheet
        class="d-flex align-center justify-center mt-2"
        :style="{
          backgroundImage: `url(${props.image4})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '160px',
          width: '33%',
          marginLeft: '1%',
        }"
      >
      </v-sheet>
    </div>
    <div class="mt-2">
      <FileComponent
        label="画像を選択してください"
        density="compact"
        checkboxlabel="画像削除"
      ></FileComponent>
      <FileComponent
        label="画像を選択してください"
        density="compact"
        checkboxlabel="画像削除"
      ></FileComponent>
      <FileComponent
        label="画像を選択してください"
        density="compact"
        checkboxlabel="画像削除"
      ></FileComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text16"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text17"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text18"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text19"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text20"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text21"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text22"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text23"
      ></TextComponent>
    </div>
    <div class="my-2 pb-2 d-flex border-bottom">
      <TextComponent
        class="w-25"
        density="compact"
        :value="props.text24"
      ></TextComponent>
      <TextComponent
        class="w-75"
        density="compact"
        :value="props.text25"
      ></TextComponent>
    </div>
    <div class="text-center bg-teal-darken-4 pa-10">
      <TextAreaComponent :value="props.textarea1"></TextAreaComponent>
    </div>

    <v-card class="pa-4 mt-2 w-100">
      <v-card-title>{{ props.charttitle }}</v-card-title>
      <v-card-text>
        <Bar
          v-if="props.chartData && props.chartOptions"
          :data="props.chartData"
          :options="props.chartOptions"
        />
        <div v-else>グラフデータがありません</div>
        <CheckboxConponent label="グラフ有効"></CheckboxConponent>
        <p>グラフタイトル</p>
        <TextComponent
          density="compact"
          :value="props.charttitle"
        ></TextComponent>
        <v-row no-gutters class="mt-2">
          <v-col cols="6" md="3" v-for="i in 5" :key="i">
            <p>No.{{ i }}</p>
            <div class="d-flex">
              <p class="mt-3 mr-1">縦</p>
              <TextComponent
                type="number"
                density="compact"
                :value="props.chartYList?.[i - 1] ?? ''"
              ></TextComponent>
            </div>
            <div class="d-flex">
              <p class="mt-3 mr-1">横</p>
              <TextComponent
                density="compact"
                :value="props.chartXList?.[i - 1] ?? ''"
              ></TextComponent>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <div class="d-flex mt-2">
      <v-card class="w-100">
        <v-card-title>{{ props.pietitle1 }}</v-card-title>
        <v-card-text>
          <Pie
            v-if="props.pieData && props.pieOptions"
            :data="props.pieData"
            :options="props.pieOptions"
          />
          <div v-else>グラフデータがありません</div>

          <p>グラフタイトル</p>
          <TextComponent
            density="compact"
            :value="props.pietitle1"
          ></TextComponent>
          <v-row no-gutters class="mt-2">
            <v-col cols="12" v-for="i in 5" :key="i">
              <p>No.{{ i }}</p>
              <div class="d-flex">
                <p class="mt-3 mr-1">名</p>
                <TextComponent
                  density="compact"
                  :value="props.pieNameList?.[i - 1]"
                ></TextComponent>
              </div>
              <div class="d-flex">
                <p class="mt-3 mr-1">値</p>
                <TextComponent
                  type="number"
                  density="compact"
                  :value="props.piePointList?.[i - 1]"
                ></TextComponent>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="w-100">
        <v-card-title>{{ props.pietitle2 }}</v-card-title>
        <v-card-text>
          <Pie
            v-if="props.pieData2 && props.pieOptions"
            :data="props.pieData2"
            :options="props.pieOptions"
          />
          <div v-else>グラフデータがありません</div>

          <p>グラフタイトル</p>
          <TextComponent
            density="compact"
            :value="props.pietitle2"
          ></TextComponent>
          <v-row no-gutters class="mt-2">
            <v-col cols="12" v-for="i in 5" :key="i">
              <p>No.{{ i }}</p>
              <div class="d-flex">
                <p class="mt-3 mr-1">名</p>
                <TextComponent
                  density="compact"
                  :value="props.pie2NameList?.[i - 1]"
                ></TextComponent>
              </div>
              <div class="d-flex">
                <p class="mt-3 mr-1">値</p>
                <TextComponent
                  type="number"
                  density="compact"
                  :value="props.pie2PointList?.[i - 1]"
                ></TextComponent>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <div class="text-center bg-teal-darken-4 pa-10">
      <TextAreaComponent :value="props.textarea2"></TextAreaComponent>
    </div>
  </section>

  <v-sheet
    class="d-flex align-left justify-bottom mt-2"
    :style="{
      backgroundImage: `url(${props.yaImage})`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '80px',
    }"
  >
    <CheckboxConponent label="有効"></CheckboxConponent>
    <TextComponent
      class="ml-5"
      density="compact"
      variant="outlined"
      :value="props.title2"
      style="height: 30px"
    ></TextComponent>
  </v-sheet>

  <section v-if="props.section2">
    <div class="areas mb-10" v-for="i in 3" :key="i">
      <v-sheet
        class="d-flex align-center position-relative custom-height-row bg-blue-lighten-4"
      >
        <ChipConponent
          :text="props.chipTitle?.[i - 1]"
          class="position-absolute text-h6 px-10"
        ></ChipConponent>
        <v-row>
          <v-col cols="4" class="text-center border-right text-h4">{{
            props.chipTitle2?.[i - 1]
          }}</v-col>
          <v-col cols="8">
            <p class="text-h6 ml-2">{{ props.chipTitle3?.[i - 1] }}</p>
            <p>{{ props.chipBody?.[i - 1] }}</p>
          </v-col>
        </v-row>
      </v-sheet>
      <TextComponent
        :value="props.chipTitle?.[i - 1]"
        density="compact"
      ></TextComponent>
      <TextComponent
        :value="props.chipTitle2?.[i - 1]"
        density="compact"
      ></TextComponent>
      <TextComponent
        :value="props.chipTitle3?.[i - 1]"
        density="compact"
      ></TextComponent>
      <TextAreaComponent :value="props.chipBody?.[i - 1]"></TextAreaComponent>
    </div>
    <v-row>
      <v-col cols="12" md="4">
        <ButtonComponent
          :label="props.buttonLabel"
          class="bg-green-darken-4 w-100"
        ></ButtonComponent>
      </v-col>
      <v-col cols="12" md="8">{{ props.buttonText }}</v-col>
    </v-row>
  </section>

  <v-sheet
    class="d-flex align-left justify-bottom mt-2"
    :style="{
      backgroundImage: `url(${props.yaImage})`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '80px',
    }"
  >
    <CheckboxConponent label="有効"></CheckboxConponent>
    <TextComponent
      class="ml-5"
      density="compact"
      variant="outlined"
      :value="props.title3"
      style="height: 30px"
    ></TextComponent>
  </v-sheet>

  <section v-if="props.section3" class="mt-0">
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in props.items"
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
        <TextComponent class="mt-1" :value="item.title"></TextComponent>
        <TextAreaComponent :value="item.text"></TextAreaComponent>
        <SelectColorComponent
          :value="item.colorText"
          :items="props.colors"
          :density="`compact`"
        ></SelectColorComponent>
      </v-timeline-item>
    </v-timeline>
  </section>

  <v-sheet
    class="d-flex align-left justify-bottom mt-2"
    :style="{
      backgroundImage: `url(${props.yaImage})`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '80px',
    }"
  >
    <CheckboxConponent label="有効"></CheckboxConponent>
    <TextComponent
      class="ml-5"
      density="compact"
      variant="outlined"
      :value="props.title4"
      style="height: 30px"
    ></TextComponent>
  </v-sheet>

  <section v-if="props.section4" class="mt-0">
    <v-row class="bg-surface-variant rounded-pill">
      <v-col cols="12" md="4" class="text-center">
        <TextComponent :value="props.text26" density="compact"></TextComponent>
      </v-col>
      <v-col cols="12" md="8" class="text-center text-h3">
        <TextComponent :value="props.money" density="compact"></TextComponent>
      </v-col>
    </v-row>
    <v-row class="bg-surface-variant rounded-pill w-25 mt-6">
      <v-col cols="12">
        <TextComponent :value="props.text27" density="compact"></TextComponent>
      </v-col>
    </v-row>
    <v-row v-for="table in tables" :key="table.title">
      <v-col cols="4">
        <TextComponent density="compact" :value="table.title"></TextComponent>
      </v-col>
      <v-col cols="8">
        <TextComponent density="compact" :value="table.value"></TextComponent>
      </v-col>
      <DeviderComponent />
    </v-row>

    <v-card class="mx-auto mt-5">
      <v-list lines="two">
        <div v-for="comment in comments" :key="comment.id">
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar>
                <img :src="comment.icon" alt="avatar" class="w-100" />
              </v-avatar>
            </template>
            <template v-slot:title>
              <FileComponent
                label="左に表示されるアイコン選択"
                checkboxlabel="画像削除"
              ></FileComponent>
              <TextComponent
                :value="comment.title"
                density="compact"
              ></TextComponent>
            </template>
            <template v-slot:subtitle>
              <TextAreaComponent
                :value="comment.value"
                :rows="2"
              ></TextAreaComponent>
            </template>
          </v-list-item>

          <v-divider inset></v-divider>
        </div>
      </v-list>
    </v-card>
  </section>

  <v-sheet
    class="d-flex align-left justify-bottom mt-2"
    :style="{
      backgroundImage: `url(${props.yaImage})`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '80px',
    }"
  >
    <CheckboxConponent label="有効"></CheckboxConponent>
    <TextComponent
      class="ml-5"
      density="compact"
      variant="outlined"
      :value="props.title5"
      style="height: 30px"
    ></TextComponent>
  </v-sheet>
  <section v-if="props.section5" class="mt-0 bg-grey-lighten-2">
    <div class="d-flex pa-3">
      <div v-for="sn in sns" :key="sn.key">
        <v-icon size="x-large" v-if="sn.flag" class="mr-3">
          <a :href="sn.url" target="_blank">
            <img :src="sn.image" alt="avatar" class="w-100" />
          </a>
        </v-icon>
      </div>
    </div>
  </section>
  <v-sheet
    class="d-flex align-left justify-bottom mt-2"
    :style="{
      backgroundImage: `url(${props.yaImage})`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '80px',
    }"
  >
    <CheckboxConponent label="有効"></CheckboxConponent>
    <TextComponent
      class="ml-5"
      density="compact"
      variant="outlined"
      :value="props.title6"
      style="height: 30px"
    ></TextComponent>
  </v-sheet>
  <section v-if="props.section6" class="mt-0 bg-grey-lighten-2 pa-5">
    <TextComponent density="compact" :value="props.text28"></TextComponent>
    <TextComponent density="compact" :value="props.contactMail"></TextComponent>
    <TextComponent density="compact" :value="props.contactTel"></TextComponent>
  </section>
</template>
<style lang="scss" scoped>
.position-relative {
  position: relative;
}

.img-overlap-wrapper {
  display: flex;
  justify-content: center;
  /* wrapper自体で余白を調整してもOK */
}

.img-overlap {
  margin-top: -50px; /* ←ここを好きな分だけマイナスに。画像高さの半分程度が自然です */
  z-index: 10;
  position: relative; /* z-index効かせたい場合に */
}
.border-bottom {
  border-bottom: 1px dotted #000;
}
.custom-height-row {
  height: 140px;
}
.custom-height-row {
  .text-h6 {
    top: 0;
    left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
}
.areas {
  width: 90%;
  margin: 0 auto;
  .border-right {
    border-right: 1px solid #ccc;
  }
}
</style>
