import { useRouter } from "vue-router";
export default function () {
  const router = useRouter();
  const movePage = () => {
    router.push({ name: "login" });
  };
  return {
    movePage,
  };
}
