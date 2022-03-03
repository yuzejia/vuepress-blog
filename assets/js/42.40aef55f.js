(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{405:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-ts-构建-google-插件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-ts-构建-google-插件开发"}},[t._v("#")]),t._v(" webpack+ts 构建 google 插件开发")]),t._v(" "),a("h2",{attrs:{id:"项目地址："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目地址："}},[t._v("#")]),t._v(" 项目地址：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yuzejia/webpack-ts-google-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/yuzejia/webpack-ts-google-plugin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[t._v("#")]),t._v(" 设计思路")]),t._v(" "),a("ul",[a("li",[t._v("Google-Plugin 开发规范")]),t._v(" "),a("li",[t._v("webpack 编译 ts 文件")]),t._v(" "),a("li",[t._v("@types/chrome chrome Api ts 类型支持")]),t._v(" "),a("li",[t._v("多入口输出")])]),t._v(" "),a("p",[t._v("Google 插件开发中。manifest.json 是识别插件的唯一标识。")]),t._v(" "),a("p",[t._v("对于 Google 扩展程序来说")]),t._v(" "),a("h3",{attrs:{id:"src-开发目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-开发目录结构"}},[t._v("#")]),t._v(" src 开发目录结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- src\n    |-- manifest.json\n    |-- assets\n    |   |-- img\n    |-- css\n    |   |-- style.less\n    |-- enum\n    |   |-- base-interface.ts\n    |   |-- en.ts\n    |-- html\n    |   |-- index.html\n    |-- ts\n        |-- base.ts\n        |-- bg.ts\n        |-- content.ts\n        |-- message.ts\n")])])]),a("p",[t._v("html 和 ts 目录是必须的")]),t._v(" "),a("h3",{attrs:{id:"dist-输出结果目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dist-输出结果目录"}},[t._v("#")]),t._v(" dist 输出结果目录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- undefined\n    |-- main.zip\n    |-- manifest.json\n    |-- html\n    |   |-- index.html\n    |   |-- index2.html\n    |-- js\n        |-- base.js\n        |-- bg-ext.js\n        |-- bg.js\n        |-- content.js\n        |-- content.js.LICENSE.txt\n        |-- main.js\n        |-- message.js\n")])])]),a("p",[t._v("正常编译输出后 ts 下的文件将输出到 dist/js 目录中。\nhtml 文件输出到 dist/html 目录中。\nmanifest.json 将正常输出到根目录。")]),t._v(" "),a("h3",{attrs:{id:"ts-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts-编译"}},[t._v("#")]),t._v(" ts 编译")]),t._v(" "),a("p",[t._v("对于浏览器来说只识别 js html css\nts 只是开发的辅助工具。webpack 自动识别 src/ts 下的文件列表。进行转换后输出 dist/js")]),t._v(" "),a("div",{staticClass:"language-typeScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取ts 文件夹下的文件自动打包输出")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entryResolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EntryObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tsPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/ts/"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tsList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readdirSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tsPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tsListObj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EntryObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" tsList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tsList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/([.][^.]+)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            tsListObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("js/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tsPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" tsList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tsListObj\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),a("p",[t._v("webpack 自动读取 ts 目录下的文件进行，编译输出到 dist js 目录")])])}),[],!1,null,null,null);s.default=e.exports}}]);