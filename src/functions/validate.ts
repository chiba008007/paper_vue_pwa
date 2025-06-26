//import UserApiService from "../services/UserApiService";
export const requiredValue = (
  value: string,
  item: string
): ((v: any) => boolean | string)[] => {
  return [(v) => !!v || `${item}は必須です。`];
};
export const checkEmail = (): ((v: string) => boolean | string)[] => {
  return [
    (v) => !!v || "メールアドレスは必須です",
    (v) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) ||
      "メールアドレスの形式に誤りがあります。",
  ];
};
export const checkTel = (
  label = "電話番号"
): ((v: any) => boolean | string)[] => {
  const phonePattern = /^\d{2,4}-\d{2,4}-\d{4}$/;
  return [
    (v) =>
      phonePattern.test(v) ||
      `${label}は半角数字およびハイフン（例: 03-1234-5678）の形式で入力してください。`,
  ];
};
export const checkPost = (
  label = "郵便番号"
): ((v: any) => boolean | string)[] => {
  const pattern = /^[0-9]{3}-[0-9]{4}$/;
  return [
    (v) =>
      pattern.test(v) || `${label}は「123-4567」の形式で入力してください。`,
  ];
};

export const checkPassword = (postNumber: string) => {
  const pattern = /^[a-zA-Z0-9]{4,}$/;
  if (!pattern.test(postNumber)) {
    return ["パスワードに不備があります。"];
  }
  return [];
};
