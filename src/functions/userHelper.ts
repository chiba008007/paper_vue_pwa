import { useRouter } from "vue-router";
import queryString from "query-string";
import { useStoreUser } from "@/store/user";
const filter = queryString.parse(location.search);

export default function () {
  const router = useRouter();
  const movePage = (pgName: string) => {
    router.push({ name: pgName, query: { code: filter.code } });
  };
  const movePageCode = (pgName: string, code: string) => {
    router.push({ name: pgName, query: { code: code } });
  };
  const sameCheck = () => {
    const filter = queryString.parse(location.search);
    const store = useStoreUser();
    const code = store.userdata as any;
    // 自信のcodeとqueryのcodeが同じ場合のみ
    if (code.code != filter.code) {
      alert("page Error:myself only");
      router.push({ name: "top", query: { code: code.code } });
    }
  };

  const getStrage = (
    name?: string | undefined,
    imagepath?: string | undefined,
    company_name?: string | undefined
  ) => {
    let ls = [] as any;
    const d = new Date();
    const date = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate();
    const ary = JSON.parse(localStorage.getItem("paper_url") as string);
    if (ary && ary.length > 0) {
      const numbersFiltered = new Set(ary);
      ls = [...numbersFiltered];
    }
    const search = queryString.parse(location.search);
    const resultFilter = ls.filter((d: any) => {
      return d.code === search.code;
    });
    if (resultFilter.length == 0) {
      ls.push({
        url: location.href,
        time: date,
        name: name,
        code: search.code,
        imagepath: imagepath,
        company_name: company_name,
      });
    }
    return ls;
  };
  return {
    movePage,
    movePageCode,
    getStrage,
    sameCheck,
  };
}
