import { useRouter } from "vue-router";
import queryString from "query-string";
const filter = queryString.parse(location.search);
console.log(filter);

export default function () {
  const router = useRouter();
  const movePage = (pgName: string) => {
    router.push({ name: pgName, query: { code: filter.code } });
  };
  const getStrage = () => {
    let ls = [] as any;
    const ary = JSON.parse(localStorage.getItem("paper_url") as string);
    if (ary && ary.length > 0) {
      const numbersFiltered = new Set(ary);
      ls = [...numbersFiltered];
    }
    ls.push(location.href);
    return ls;
  };
  return {
    movePage,
    getStrage,
  };
}
