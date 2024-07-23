import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Mirouter-UI",
  description: "基于小米路由器API的展示面板",

  theme,
  head: [
    ['script', { src: "/js/a.js",meta : "noindex,nofollow",async: true}],
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

