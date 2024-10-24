export const requiredValue = (value: string, item: string) => {
  if (!value) {
    return [item + "は必須です。"];
  }
  return [];
};

export const checkEmail = (value: string) => {
  if (!value) return ["メールアドレスは必須です"];
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(value)) {
    return ["メールアドレスの形式に誤りがあります。"];
  }
  return [];
};
export const checkTel = (phoneNumber: string) => {
  const phonePattern = /^\d{2,4}-\d{2,4}-\d{4}$/;
  if (!phonePattern.test(phoneNumber)) {
    return ["電話番号は半角数値及びハイフンを付けて入力してください。"];
  }
};
export const checkPost = (postNumber: string) => {
  const pattern = /^[0-9]{3}-[0-9]{4}$/;
  if (!pattern.test(postNumber)) {
    return ["郵便番号に不備があります。"];
  }
};
