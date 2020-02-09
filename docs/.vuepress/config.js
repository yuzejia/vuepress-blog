module.exports = {
  title: "红鼻子",
  description: "-----",
  base: '/', // 项目根路径
  dest: '/dist/', // 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上
  // head 标签中的额外内容
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  theme: 'reco',


    // 主题配置
  themeConfig: {
    type: 'blog',
    author: 'YUZEJIA',  // 全局作者
    authorAvatar: '/avatar.png',
    sidebar: 'auto',//在所有页面中启用自动生成侧栏
      // 博客配置
      blogConfig: {
        category: {
          location: 1,     // 在导航栏菜单中所占的位置，默认2
          text: '前端' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      }
  }
}