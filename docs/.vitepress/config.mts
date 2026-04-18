import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '中国计算几何四十年',
  description: '1982–2025：一段与国家工业、学科命运同行的记忆',
  base: '/GDCHistory/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap',
      },
    ],
  ],

  markdown: {
    math: true,
    image: { lazyLoading: true },
  },

  themeConfig: {
    logo: { src: '/logo.svg', alt: '计算几何四十年' },
    siteTitle: '计算几何四十年',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '上篇（1960s–1989）',
        items: [
          { text: '第一篇 · 需求的召唤（1960s–1981）', link: '/chapters/01-dawn/ch01' },
          { text: '第二篇 · 星火初燃（1981–1986）',    link: '/chapters/02-spark/ch03' },
          { text: '第三篇 · 学派并行（1982–1989）',    link: '/chapters/03-schools/ch06' },
        ],
      },
      {
        text: '下篇（1990–2026）',
        items: [
          { text: '第四篇 · 风雨九十年代（1990–1999）', link: '/chapters/04-nineties/ch10' },
          { text: '第五篇 · 薪火相传（2000–2012）',     link: '/chapters/05-inheritance/ch13' },
          { text: '第六篇 · 百花齐放（2013–2026）',     link: '/chapters/06-flourish/ch16' },
          { text: '终篇',                               link: '/chapters/epilogue/ch19' },
        ],
      },
      { text: '附录', link: '/chapters/appendix/timeline' },
    ],

    sidebar: {
      '/': [
        {
          text: '前言',
          items: [
            { text: '序：为什么要写这本书', link: '/chapters/preface' },
            { text: '关于本书的写作方式',   link: '/chapters/about' },
          ],
        },
        {
          text: '第一篇　需求的召唤（1960s–1981）',
          collapsed: false,
          items: [
            { text: '第1章　从造船厂与飞机厂出发', link: '/chapters/01-dawn/ch01' },
            { text: '第2章　几位奠基者与早期探索', link: '/chapters/01-dawn/ch02' },
          ],
        },
        {
          text: '第二篇　星火初燃（1981–1986）',
          collapsed: false,
          items: [
            { text: '第3章　1981：一次回国与一次碰撞', link: '/chapters/02-spark/ch03' },
            { text: '第4章　1982青岛：一个时代的起点', link: '/chapters/02-spark/ch04' },
            { text: '第5章　全国计算几何协作组的成立', link: '/chapters/02-spark/ch05' },
          ],
        },
        {
          text: '第三篇　学派并行（1982–1989）',
          collapsed: false,
          items: [
            { text: '第6章　浙江大学：数学根基与几何方法',     link: '/chapters/03-schools/ch06' },
            { text: '第7章　山东大学：从船体放样到系统实现',   link: '/chapters/03-schools/ch07' },
            { text: '第8章　复旦大学：学科引入与早期教学',     link: '/chapters/03-schools/ch08' },
            { text: '第9章　中科院系统与北航：工程与系统意识', link: '/chapters/03-schools/ch09' },
          ],
        },
        {
          text: '第四篇　风雨九十年代（1990–1999）',
          collapsed: true,
          items: [
            { text: '第10章　出国潮与低谷期',           link: '/chapters/04-nineties/ch10' },
            { text: '第11章　守与变：协作组的持续运作', link: '/chapters/04-nineties/ch11' },
            { text: '第12章　新方向的出现',             link: '/chapters/04-nineties/ch12' },
          ],
        },
        {
          text: '第五篇　薪火相传（2000–2012）',
          collapsed: true,
          items: [
            { text: '第13章　2001：GDC 专委会的成立', link: '/chapters/05-inheritance/ch13' },
            { text: '第14章　新一代学者与研究格局',    link: '/chapters/05-inheritance/ch14' },
            { text: '第15章　会议、教材与社区',        link: '/chapters/05-inheritance/ch15' },
          ],
        },
        {
          text: '第六篇　百花齐放（2013–2026）',
          collapsed: true,
          items: [
            { text: '第16章　从学术到产业',         link: '/chapters/06-flourish/ch16' },
            { text: '第17章　中国图形学的国际舞台', link: '/chapters/06-flourish/ch17' },
            { text: '第18章　企业、系统与应用',     link: '/chapters/06-flourish/ch18' },
          ],
        },
        {
          text: '终篇　百家争鸣，未完待续',
          collapsed: true,
          items: [
            { text: '第19章　四十年，我们留下些什么', link: '/chapters/epilogue/ch19' },
            { text: '第20章　写给后来者',             link: '/chapters/epilogue/ch20' },
          ],
        },
        {
          text: '附录',
          collapsed: true,
          items: [
            { text: '专委会沿革',         link: '/chapters/appendix/committee' },
            { text: '重要会议与时间轴',   link: '/chapters/appendix/timeline' },
            { text: '代表人物小传',       link: '/chapters/appendix/biographies' },
            { text: '口述史与回忆摘录',   link: '/chapters/appendix/oral-history' },
            { text: '图片与资料来源说明', link: '/chapters/appendix/sources' },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
      label: '本章目录',
    },

    docFooter: {
      prev: '← 上一章',
      next: '下一章 →',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索全书', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '未找到相关内容',
                resetButtonTitle: '清除',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/your-org/cagd-book' }],

    footer: {
      message: '本书内容受版权保护，转载须注明出处。',
      copyright: '@中国工业与应用数学学会 (CSIAM) 几何设计与计算专业委员会 (GDC)',
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'short' },
    },
  },
})
