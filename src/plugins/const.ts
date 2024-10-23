interface NumberCodeOrNullListType {
  [key: number]: string;
  null: string;
}
/** 画像 */
const uri = new URL(window.location.href);
const reg = /localhost/;
let tmp = "";
if (reg.test(uri.toString())) {
  tmp = "http://localhost:8000/";
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
