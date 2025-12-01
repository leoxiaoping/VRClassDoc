// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "小瓶®VR课堂官方文档",
    description: "小瓶VR课堂 超级PPT课件 VR多媒体课件",
    lang: 'zh-Hans',
    lastUpdated: true,
    base: '/docs/',
    // 导航栏标题（Logo 右侧的文字）
    siteTitle: '我的网站', // 若不需要文字，可设为 ''
    sitemap: {
        hostname: 'https://vr.pbottle.com/docs/'
    },
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
        ['meta', { name: 'keywords', content: '小瓶VR, VR课堂, 虚拟现实, 教学, VR教学, VR课件, 超级PPT' }],
        ['script', { type: 'text/javascript' }, `
        var _hmt = _hmt || [];
          (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?4f28c271b56a4be165f2b8200a58c47c";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
          })();
      `
        ],
    ],

    themeConfig: {
        docFooter: {// 文章翻页
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel: '外观',    // 移动端 - 外观
        returnToTopLabel: '返回顶部',    // 移动端 - 返回顶部
        sidebarMenuLabel: '菜单',    // 移动端 - menu
        outline: { label: '本页大纲', level: [2, 6] },
        nav: [
            { text: '首页', link: '/' },
            { text: '使用指南', link: '/guide/' },
            { text: '定价', link: 'https://vr.pbottle.com/' },
            { text: '小瓶VR官站', link: 'https://vr.pbottle.com/' },
            { text: '在线客服', link: 'https://yun.pbottle.com/kefu.php' },
        ],
        sidebar: [
            {
                text: '使用指南',
                items: [
                    { text: '小瓶VR课堂简介', link: '/guide/简介.md' },
                    { text: '准备工作', link: '/guide/准备工作.md' },
                    { text: '文件上传', link: '/guide/文件上传.md' },
                    { text: '文件管理', link: '/guide/文件管理.md' },
                    { text: '课件制作', link: '/guide/课件制作.md' },
                    { text: '课件观看', link: '/guide/课件观看.md' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'gitee', link: 'https://gitee.com/pbottle/vrClass-document' }
        ],
    }
})