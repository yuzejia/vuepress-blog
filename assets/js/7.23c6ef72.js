(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(s,t,a){s.exports=a.p+"assets/img/175ef97e31a47be38be8809ebf2d27d.7011be0e.png"},360:function(s,t,a){s.exports=a.p+"assets/img/6a2ea495ac14542b741c1eff1790108.9382b500.png"},361:function(s,t,a){s.exports=a.p+"assets/img/d00906b4c01fd9cd33db44de01b0fef.277d9bba.png"},362:function(s,t,a){s.exports=a.p+"assets/img/1c6887070ad7bf09841e86ba66db872.68d98b61.png"},363:function(s,t,a){s.exports=a.p+"assets/img/84541e98785a36e08a216db60a89ba8.9090fa29.png"},364:function(s,t,a){s.exports=a.p+"assets/img/86bc635da0e40f886f1b96a4c0ac50c.0e2ecaec.png"},365:function(s,t,a){s.exports=a.p+"assets/img/f3c62da2e8861c4cde9ccd70847eeea.e07c1fb2.png"},366:function(s,t,a){s.exports=a.p+"assets/img/e257f88107c5d21c7107ffea91d4cf3.0dc89d47.png"},367:function(s,t,a){s.exports=a.p+"assets/img/ee9d67e00a5da0f2a01fac737f48595.de29c757.png"},368:function(s,t,a){s.exports=a.p+"assets/img/ca9baf8cc61a504770a0a614a17385a.568f7130.png"},369:function(s,t,a){s.exports=a.p+"assets/img/e779af9c846ac7692e3acd6128569a2.383ffd6c.png"},370:function(s,t,a){s.exports=a.p+"assets/img/b1146c615fd85d72b903412ad389709.e54abafa.png"},444:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"接下来我们继续-打包-css-和-图片资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接下来我们继续-打包-css-和-图片资源"}},[s._v("#")]),s._v(" 接下来我们继续 打包 css 和 图片资源")]),s._v(" "),e("p",[s._v("我们先修改目录增加css 文件和 图片资源")]),s._v(" "),e("p",[s._v("src 新建css 目录 新增 style.css 文件")]),s._v(" "),e("p",[s._v("src 新建img 目录")]),s._v(" "),e("p",[s._v("我们本次修改了入口文件：\nsrc 下新建 main.js 我们接下来将main.js 作为我们的主入口文件")]),s._v(" "),e("h3",{attrs:{id:"修改-webpack-config-js-entry参数："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-webpack-config-js-entry参数："}},[s._v("#")]),s._v(" 修改 webpack.config.js entry参数：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("entry"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/main.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入口文件 要打包的文件")]),s._v("\n")])])]),e("h3",{attrs:{id:"修改main-js-为："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改main-js-为："}},[s._v("#")]),s._v(" 修改main.js 为：")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入js 文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./js/index.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入 css ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./css/style.css'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"css-文件打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-文件打包"}},[s._v("#")]),s._v(" css 文件打包")]),s._v(" "),e("h3",{attrs:{id:"接下来我们先安装-css-打包相关-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接下来我们先安装-css-打包相关-loader"}},[s._v("#")]),s._v(" 接下来我们先安装 css 打包相关 loader")]),s._v(" "),e("p",[e("strong",[s._v("style-loader")]),s._v(" "),e("strong",[s._v("css-loader")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install style-loader css-loader --save-dev\n")])])]),e("h3",{attrs:{id:"安装完之后-在-webpack-config-js-中配置-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装完之后-在-webpack-config-js-中配置-loader"}},[s._v("#")]),s._v(" 安装完之后 在 webpack.config.js 中配置 loader")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("    module"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                test"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.css$/i")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                use"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n")])])]),e("h3",{attrs:{id:"index-html-文件新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-html-文件新增"}},[s._v("#")]),s._v(" index.html 文件新增")]),s._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("webpack"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),e("h3",{attrs:{id:"修改-style-css-内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-style-css-内容"}},[s._v("#")]),s._v(" 修改 style.css 内容")]),s._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 12px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),e("p",[e("strong",[s._v("执行 npm run build")])]),s._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:a(359),alt:"An image"}}),s._v("\n 编译成功~\n"),e("p",[e("strong",[s._v("浏览器运行dist文件下的index.html")]),s._v("\ncss 样成功显示！\n"),e("img",{staticStyle:{zoom:"33%"},attrs:{src:a(360),alt:"An image"}})]),s._v(" "),e("h2",{attrs:{id:"图片资源打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片资源打包"}},[s._v("#")]),s._v(" 图片资源打包")]),s._v(" "),e("h3",{attrs:{id:"安装图片相关loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装图片相关loader"}},[s._v("#")]),s._v(" 安装图片相关loader")]),s._v(" "),e("p",[s._v("url-loader\nfile-loader")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install url-loader --save-dev\n")])])]),e("h3",{attrs:{id:"webpack-config-js-配置。在-module-rules-中新增以下配置信息："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-配置。在-module-rules-中新增以下配置信息："}},[s._v("#")]),s._v(" webpack.config.js 配置。在 module rules 中新增以下配置信息：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('     // 打包图片 用到 url-loader\n            {\n                test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,\n                use: {\n                    loader: "url-loader",\n                    options: {\n                        esModule: false,   // \n                        name: "img/[name].[hash:5].[ext]",\n                        limit: 1024,\n                        publicpath: "../img/"\n                    }\n                },\n                type: "javascript/auto"    // webpack5 打包 必须采用 这里要注意\n            }\n\n')])])]),e("p",[e("strong",[s._v("打包输出文件。dist/img/ 生成图片文件。")]),s._v(" "),e("img",{attrs:{src:a(361),alt:"An image"}})]),s._v(" "),e("p",[e("strong",[s._v("页面中正常引用并显示。")]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(362),alt:"An iamge"}})]),s._v(" "),e("p",[e("strong",[s._v("以上为webpack 5 正确的配置信息。")])]),s._v(" "),e("h3",{attrs:{id:"在此特意补充一下（注意！）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在此特意补充一下（注意！）"}},[s._v("#")]),s._v(" "),e("strong",[s._v("在此特意补充一下（注意！）")])]),s._v(" "),e("p",[s._v("在webpack一开始配置的时候，并不知道webpack5丢弃了url-loader 。所以如果我们在webpack5 中使用url-loader 就要做以下配置\n配置的信息为：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包图片 用到 url-loader")]),s._v("\n           "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n               test"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" /\\.(png|jpe?g|gif|svg)(\\?.*)?$/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n               use"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                   loader"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url-loader"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                   options"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                       esModule"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),s._v("\n                       name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"img/[name].[hash:5].[ext]"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                       limit"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("\n                   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n               "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n           "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),e("p",[s._v("打包后在dist中生成了两个图片路径。img文件下。根目录下一个。按照咱们正常的 css 引用路径应该采用 img文件目录下的图片。\n"),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(363),alt:"An image"}})]),s._v(" "),e("p",[s._v("运行index.html文件。发现引用的路径为dist下的图片路径。并且页面也没正常显示。\n"),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(364),alt:"An image"}}),s._v("\n.....")]),s._v(" "),e("p",[s._v("然后去查询了webpack文档。文档中表示在webpack中已经丢弃url-loader")]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(365),alt:"An iamge"}}),s._v(" "),e("p",[s._v(".....")]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(366),alt:"An image"}}),s._v(" "),e("p",[s._v("到这里能够完全正常打包 css 图片了。但是对于webpack5来说，这种写法是webpack5 兼容 url-loader的处理方式。")]),s._v(" "),e("h3",{attrs:{id:"asset-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asset-module"}},[s._v("#")]),s._v(" asset module")]),s._v(" "),e("h4",{attrs:{id:"对于webpack5-来说直接使用-asset-module。接下来我用使用asset-module-来修改配置。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对于webpack5-来说直接使用-asset-module。接下来我用使用asset-module-来修改配置。"}},[s._v("#")]),s._v(" 对于webpack5 来说直接使用 asset module。接下来我用使用asset module 来修改配置。")]),s._v(" "),e("p",[s._v("资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：")]),s._v(" "),e("ul",[e("li",[s._v("asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。")]),s._v(" "),e("li",[s._v("asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。")]),s._v(" "),e("li",[s._v("asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。")]),s._v(" "),e("li",[s._v("asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。")])]),s._v(" "),e("h4",{attrs:{id:"使用-asset-inline-来代替-url-loader。-rules-新增配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-asset-inline-来代替-url-loader。-rules-新增配置"}},[s._v("#")]),s._v(" 使用 "),e("strong",[s._v("asset/inline")]),s._v(" 来代替 url-loader。 rules 新增配置")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("      rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                test"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" /\\.css$/i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                use"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("'style-loader'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 'css-loader'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     test: /\\.(png|jpe?g|gif|svg)$/,")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     use: {")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         loader: ")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url-loader"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         options: {")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             esModule: false,   // 使用es 模板语法 默认 true")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             name: ")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"img/[name].[hash:5].[ext]"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             limit: 1024")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         }")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     type: ")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript/auto"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//asset module 配置")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              test"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" /\\.jpg/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'asset/inline' \n           "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])]),e("p",[s._v("好了就这么简单。我们接下来看下效果。文件输出中没有了图片文件。页面能正常显示图片吗？\n"),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(367),alt:"An image"}})]),s._v(" "),e("p",[e("strong",[s._v("运行index.html")]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(368),alt:"An image"}})]),s._v(" "),e("p",[s._v("asset/inline 将图片资源转换成立 base64 并打包到了main.js 中。\n好了这个时候 css 背景图片可以正常打包了。\n接下来如果现在我在index.html 直接引用图片来打包。我们将使用html-loader进行打包。")]),s._v(" "),e("h3",{attrs:{id:"html-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-loader"}},[s._v("#")]),s._v(" html-loader")]),s._v(" "),e("p",[s._v("将 HTML 导出为字符串。当编译器需要时，将压缩 HTML 字符串。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    npm install --save-dev html-loader\n")])])]),e("h4",{attrs:{id:"rules-新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rules-新增"}},[s._v("#")]),s._v(" rules: 新增")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            test"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" /\\.html$/i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            loader"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"html-loader"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[e("strong",[s._v("编译打包")])]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(369),src:"An iamge"}}),s._v(" "),e("p",[e("strong",[s._v("页面也正常显示")])]),s._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:a(370),src:"An image"}}),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("ul",[e("li",[s._v("webpack5 遗弃了url-loader 的支持。统一采用 asset module 代替。")]),s._v(" "),e("li",[s._v("html 中的图片引入请使用html-loader。")]),s._v(" "),e("li",[s._v("最后发现一个问题html-loader 和 html-webpack-plugin 有冲突。导致title 失效。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);