(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{443:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("小程序发布后，某些用户表示不能及时获取到新版本。")]),t._v(" "),a("p",[a("strong",[t._v("参考文献")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/update-mechanism.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更新机制：https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/update-mechanism.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("运行机制：https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"什么原因导致小程序无法自动更新？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么原因导致小程序无法自动更新？"}},[t._v("#")]),t._v(" 什么原因导致小程序无法自动更新？")]),t._v(" "),a("p",[t._v("开发者在后台发布版本后，是不会立即更新到所有用户的。微信客户端会有若干个时机去检查是否存在新版本，并进行小程序代码更新，但是本地如果存在旧版本，打开的还是旧版本。\n这时候小程序只能等到下次"),a("strong",[t._v("冷启动")]),t._v("时才会打开最新版本。")]),t._v(" "),a("p",[t._v("我们在使用小程序的时候 退出小程序后。小程序是不会立即被销毁的。这个时候小程序只是被挂起了。挂起时间大概30分钟未操作小程序。这时候小程序就会被销毁。再次打开就是所谓的冷启动。")]),t._v(" "),a("h2",{attrs:{id:"小程序在启动时候分两种情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序在启动时候分两种情况"}},[t._v("#")]),t._v(" 小程序在启动时候分两种情况")]),t._v(" "),a("h3",{attrs:{id:"冷启动："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冷启动："}},[t._v("#")]),t._v(" 冷启动：")]),t._v(" "),a("p",[t._v("如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。")]),t._v(" "),a("p",[t._v("小程序在每次冷启动的时候都会异步检测是否存在新版本，如果有新版本的话将会异步下载。但本次的启动还是用的旧版代码包，这样就只能等到下一次冷启动才会被应用上。")]),t._v(" "),a("h3",{attrs:{id:"热启动："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热启动："}},[t._v("#")]),t._v(" 热启动：")]),t._v(" "),a("p",[t._v("如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。")]),t._v(" "),a("h2",{attrs:{id:"解决方案："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案："}},[t._v("#")]),t._v(" 解决方案：")]),t._v(" "),a("h3",{attrs:{id:"wx-getupdatemanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-getupdatemanager"}},[t._v("#")]),t._v(" wx.getUpdateManager")]),t._v(" "),a("p",[t._v("通过小程序每次打开后手动执行更新检测逻辑；")]),t._v(" "),a("h4",{attrs:{id:"逻辑实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑实现"}},[t._v("#")]),t._v(" 逻辑实现")]),t._v(" "),a("div",{staticClass:"language-javaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小程序启动检测更新服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WxUpdateService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'开始检测小程序是否更新-----------------'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本更新")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canIUse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getUpdateManager"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" updateManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCheckForUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求完新版本信息的回调")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateReady")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"更新提示"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新版本已经准备好，是否重启应用？"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success===="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启")]),t._v("\n                  updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户点击取消按钮的处理，如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了")]),t._v("\n                  wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"温馨提示~"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"本次版本更新涉及到新的功能添加，旧版本将无法正常访问"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    showCancel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//隐藏取消按钮")]),t._v("\n                    confirmText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"确定更新"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只保留确定更新按钮")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateFailed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的版本下载失败")]),t._v("\n            wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新版本提醒"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"检测到新版本，请您删除当前小程序重新搜索打开！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),a("h4",{attrs:{id:"app-js-onlaunch-中调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-js-onlaunch-中调用"}},[t._v("#")]),t._v(" app.js onLaunch 中调用")]),t._v(" "),a("div",{staticClass:"language-javaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WxUpdateService "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/code/service/wx-update-service.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小程序更新检测机制引入")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLaunch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小程序更新检测")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WxUpdateService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),a("p",[t._v("小程序在用户每次打开的时候 都会进行检测。给用户带来良好体验~")])])}),[],!1,null,null,null);s.default=e.exports}}]);