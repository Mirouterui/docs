import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "book",
    link: "/guide/intro",
  },
  {
    text: "下载",
    icon: "fa-solid fa-download",
    link: "/download/",
  },
  {
    text: "代码仓库",
    icon: "fa-solid fa-warehouse",
    children: [
      {
        text: "后端",
        link: "https://github.com/Mirouterui/mirouter-ui",
      },
      {
        text: "文档",
        link: "https://github.com/Mirouterui/docs",
      }
    ]
  },
  {
    text: "在线前端",
    icon: "fa-solid fa-newspaper",
    link: "http://mrui-web.hzchu.top/",
  }
]);
