import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "book",
    link: "/guide/intro",
  },
  {
    text: "在线前端",
    icon: "fa-solid fa-newspaper",
    link: "http://mrui-web.hzchu.top/",
  }
]);
