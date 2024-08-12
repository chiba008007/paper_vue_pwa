import { useRouter } from "vue-router";
export default function () {
  const router = useRouter();
  const movePage = (pgName: string) => {
    router.push({ name: pgName });
  };
  return {
    movePage,
  };
}
