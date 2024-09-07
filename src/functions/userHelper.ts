import { useRouter } from "vue-router";
export default function () {
  const router = useRouter();
  const movePage = (pgName: string, code?: string | string[]) => {
    router.push({ name: pgName, params: { code: code } });
  };
  return {
    movePage,
  };
}
