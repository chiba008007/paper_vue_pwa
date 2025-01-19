import { useRouter } from "vue-router";
import queryString from "query-string";
import { useStoreUser } from "@/store/user";
const filter = queryString.parse(location.search);

export default function () {
  const router = useRouter();
  const movePage = (pgName: string) => {
    router.push({ name: pgName, query: { code: filter.code } });
  };
  const moveLink = (pgName: string) => {
    router.push({ name: pgName });
  };
  const movePageCode = (pgName: string, code: string | (string | null)[]) => {
    router.push({ name: pgName, query: { code: code } });
  };
  const moveLinkPageCode = (
    pgName: string,
    code: string | (string | null)[]
  ) => {
    location.href = "/" + pgName + "?code=" + code;
  };
  const moveLinkPage = (pgName: string) => {
    location.href = "/" + pgName;
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
  const onAddCompany = (
    type: string,
    companyLoops: { key: number; id: number }[]
  ) => {
    const cnt = companyLoops.length + 1;
    if (type == "add") companyLoops.push({ key: cnt, id: cnt });
    if (type == "delete") companyLoops.splice(cnt - 2, 1);
  };
  const onAddSkill = (
    type: string,
    skillLoops: { id: number; key: number }[]
  ) => {
    const cnt = skillLoops.length + 1;
    if (type == "add") skillLoops.push({ id: cnt, key: cnt });
    if (type == "delete") skillLoops.splice(cnt - 2, 1);
  };
  const onAddHistory = (
    type: string,
    historyLoops: { id: number; key: number }[]
  ) => {
    const cnt = historyLoops.length + 1;
    if (type == "add") historyLoops.push({ id: cnt, key: cnt });
    if (type == "delete") historyLoops.splice(cnt - 2, 1);
  };
  const setCompanyNameValue = (
    val: string,
    n: number,
    companyLoops: { id: number; address: string }[],
    id: number
  ) => {
    companyLoops[n]["id"] = id;
    companyLoops[n]["address"] = val;
    console.log(companyLoops);
  };
  const setCompanyNameMapUrl = (
    val: string,
    n: number,
    companyLoops: { id: number; map_url: string }[],
    id: number
  ) => {
    companyLoops[n]["id"] = id;
    companyLoops[n]["map_url"] = val;
  };
  const setSkillName = (
    val: string,
    n: number,
    skillLoops: { key: number; id: number; value: string; note: string }[],
    id: number
  ) => {
    skillLoops[n]["id"] = id;
    skillLoops[n]["note"] = val;
  };
  const setHistoriesTitle = (
    val: string,
    n: number,
    historyLoops: { key: number; title: string }[],
    id: number
  ) => {
    historyLoops[n]["key"] = id;
    historyLoops[n]["title"] = val;
  };
  const setHistoriesValue = (
    val: string,
    n: number,
    historyLoops: { key: number; value: string; note: string }[],
    id: number
  ) => {
    historyLoops[n]["key"] = id;
    historyLoops[n]["note"] = val;
  };
  return {
    movePage,
    moveLink,
    movePageCode,
    moveLinkPageCode,
    moveLinkPage,
    getStrage,
    sameCheck,
    onAddCompany,
    onAddSkill,
    onAddHistory,
    setCompanyNameValue,
    setCompanyNameMapUrl,
    setSkillName,
    setHistoriesTitle,
    setHistoriesValue,
  };
}
