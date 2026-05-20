import { defineConfig } from "vitepress";

export default defineConfig({
  title: "小瓶®VR课堂官方文档",
  description: "小瓶VR课堂 超级PPT课件 VR多媒体课件",
  lang: "zh-Hans",
  lastUpdated: true,
  base: "/docs/",
  siteTitle: "小瓶VR课堂", // 改为实际的站点名
  sitemap: {
    hostname: "https://vr.pbottle.com/docs/",
  },
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "小瓶VR, VR课堂, 虚拟现实, 教学, VR教学, VR课件, 超级PPT",
      },
    ],
    [
      "script",
      { type: "text/javascript" },
      `
        var _hmt = _hmt || [];
          (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?4f28c271b56a4be165f2b8200a58c47c";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
          })();
      `,
    ],
  ],

  themeConfig: {
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    darkModeSwitchLabel: "外观",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    outline: { label: "本页大纲", level: [2, 6] },
    nav: [
      { text: "首页", link: "/" },
      { text: "使用指南", link: "/guide/" },
      { text: "定价", link: "/guide/price" },
      { text: "小瓶VR官网", link: "https://vr.pbottle.com/" },
      { text: "在线客服", link: "https://yun.pbottle.com/kefu.php" },
    ],
    sidebar: [
      {
        text: "使用指南",
        items: [{ text: "总览", link: "/guide/" }],
      },
      {
        text: "后台编辑端",
        items: [
          { text: "素材从哪里来", link: "/guide/backend/素材从哪里来" },
          { text: "登录后台", link: "/guide/backend/登录后台" },
          { text: "上传课件", link: "/guide/backend/上传课件" },
          { text: "上传素材", link: "/guide/backend/上传素材" },
          { text: "管理课件", link: "/guide/backend/管理课件" },
          { text: "管理素材", link: "/guide/backend/管理素材" },
          {
            text: "编辑课件-界面介绍",
            link: "/guide/backend/编辑课件-界面介绍",
          },
          {
            text: "编辑课件-添加VR元素",
            link: "/guide/backend/编辑课件-添加VR元素",
          },
        {
            text: "编辑课件-添加VR场景特效",
            link: "/guide/backend/编辑课件-添加特效元素",
          },
        ],
      },
      {
        text: "VR眼镜端",
        items: [
          { text: "安装VR应用", link: "/guide/vr/安装VR应用" },
          { text: "登录VR应用", link: "/guide/vr/登录VR应用" },
          { text: "浏览和打开课件", link: "/guide/vr/浏览和打开课件" },
          { text: "操控VR课件", link: "/guide/vr/操控VR课件" },
        ],
      },
      {
        text: "视频教程",
        items: [{ text: "视频教程", link: "/guide/视频教程" }],
      },
      {
        text: "定价",
        items: [{ text: "产品定价", link: "/guide/price" }],
      },
    ],

    socialLinks: [
      { icon: "gitee", link: "https://gitee.com/pbottle/vrClass-document" },
    ],
  },
});
