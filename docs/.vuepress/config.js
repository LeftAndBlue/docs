module.exports = {
  title: "M的个人博客",
  description: "My dream",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  themeConfig: {
    lastUpdated: '更新时间：', // string | boolean
    logo: '/assets/img/logo.png',
    //导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'git', link: '/git/git笔记' },
      { text: 'External', link: 'https://baidu.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ],
    sidebar: {
      "/git/": [
        'git笔记',
      ],
      "/": [
        ""
      ]
    }

  }
}
