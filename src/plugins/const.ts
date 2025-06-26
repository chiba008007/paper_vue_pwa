interface NumberCodeOrNullListType {
  [key: number]: string;
  null: string;
}
/** 画像 */
const uri = new URL(window.location.href);
const reg = /localhost/;
let tmp = "";
if (reg.test(uri.toString())) {
  tmp = "http://localhost:8000";
} else {
  tmp = "https://paperadmin.uh-oh.jp";
}

export const d_Path = tmp;

/** 画像 */
export const imagePath = d_Path + "/storage/app/myImage/";

/** 性別 */
export const gender: NumberCodeOrNullListType = {
  null: "-",
  1: "男性",
  2: "女性",
};
/** 年代 */
export const generation: NumberCodeOrNullListType = {
  null: "-",
  1: "10代",
  2: "20代",
  3: "30代",
  4: "40代",
  5: "50代～",
};
/** template */
export const templateList = {
  1: "テンプレート1",
  2: "テンプレート2",
};

/** pieグラフカラー */
export const d_pie_colors = [
  "#FF6384", // 柔らかい赤（ピンク系）
  "#36A2EB", // 明るめの青
  "#FFCE56", // 穏やかな黄色
  "#4BC0C0", // グリーン寄りの青緑
  "#9966FF", // 薄めの紫
];
/** 色コード */
export const d_colors = [
  { value: "green", color: "#1B5E20" },
  { value: "cyan", color: "#006064" },
  { value: "teal", color: "#004D40" },
  { value: "light-blue", color: "#01579B" },
  { value: "light-green", color: "#33691E" },
  { value: "brown", color: "#3E2723" },
];

/**chartグラフ */
export const chartOptions = (max: number) => ({
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      min: 0,
      max: Math.ceil((max * 1.1) / 1000) * 1000,
    },
  },
});

export const pieOptions = {
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

/** 都道府県_Data */
export const prefecturesNameList = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];
