const mapArr = [
  '',
  'A.md',
  'B.md'
]

module.exports = {
  title: 'awesome-pronunciation',
  description: 'Just playing around',
  base: '/awesome-pronunciation/',
  locales: {
    '/': {
      lang: 'English',
      description: 'awesome-pronunciation'
    },
    '/zh/': {
      lang: '简体中文',
      description: 'awesome-pronunciation'
    }
  },
  themeConfig: {
    repo: 'guanpengchn/awesome-pronunciation',
    docsRepo: 'guanpengchn/awesome-pronunciation',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        lang: 'English',
        selectText: 'Languages',
        title: 'awesome-pronunciation',
        description: 'English introduction for awesome-pronunciation',
        nav: [
          { text: 'Content', link: '/content/' }
        ],
        sidebar: {
          '/content/': [
            {
              title: 'Content',
              collapsable: false,
              children: mapArr
            }
          ]
        }
      },
      '/zh/': {
        lang: '简体中文',
        selectText: '选择语言',
        title: 'awesome-pronunciation',
        description: 'awesome-pronunciation的中文介绍',
        nav: [
          { text: '内容', link: '/zh/content/' }
        ],
        sidebar: {
          '/zh/content/': [
            {
              title: '内容',
              collapsable: false,
              children: mapArr
            }
          ]
        }
      }
    }
  }
}