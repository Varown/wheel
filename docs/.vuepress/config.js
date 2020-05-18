const path = require('path')
module.exports = {
  base: '/wheel/',
  title: 'wheel UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    plugins: [
      '@goy/svg-icons'
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse',
        ]
      },

    ]
  },
}