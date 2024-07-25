import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "book",
      prefix: "guide/",
      children: [
        {
          text: "快速开始",
          prefix: "guide/",
          children: [
            { text: "项目介绍", icon: "fa-brands fa-squarespace", link: "/guide/intro" },
            { text: "程序部署", icon: "fa-solid fa-rocket", link: "/guide/deploy" },
            { text: "程序部署（路由器）", icon: "fa-solid fa-hard-drive", link: "/guide/deploytorouter" }
          ],
        },
        {
          text: "万物互联",
          prefix: "connect/",
          children: [
            { text: "Netdata", icon: "fa-solid fa-network-wired", link: "/connect/netdata" }
          ],
        },
        {
          text: "常见问题",
          prefix: "questions/",
          children: [
            { text: "反馈须知", icon: "fa-solid fa-flag", link: "/questions/notices" },
            { text: "普遍问题", icon: "fa-solid fa-question", link: "/questions/qa" },
            { text: "安全性", icon: "fa-solid fa-user-shield", link: "/questions/safety" }
          ],
        },
        {
          text: "扩展阅读",
          prefix: "more/",
          children: [
            { text: "命令行参数", icon: "fa-solid fa-terminal", link: "/more/command" },
            { text: "守护进程", icon: "fa-solid fa-person-military-pointing", link: "/more/guard" },
            { text: "简化版", icon: "fa-solid fa-leaf", link: "/more/lite" },
            { text: "多语言", icon: "fa-solid fa-globe", link: "/more/i18n" },
            { text: "开发规划", icon: "fa-solid fa-note-sticky", link: "/more/plan" },
            { text: "统计", icon: "fa-solid fa-chart-column", link: "/more/statistics" }
          ],
        },
        {
          text: "下载",
          prefix: "download/",
          children: [
            { text: "MRUI", icon: "fa-solid fa-cat", link: "/download/mrui" },
            { text: "MiKVIVator", icon: "fa-solid fa-wand-magic-sparkles", link: "/download/mikvivator" },
          ],
        }
      ],
    },

  ],
});
