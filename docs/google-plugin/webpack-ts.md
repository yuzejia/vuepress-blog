---
title: webpack+ts 构建google插件开发
date: 2021-12-13
categories: 
 - Google
tags:
 - Google-Plugin
---

# webpack+ts 构建google插件开发
## 项目地址：
[https://github.com/yuzejia/webpack-ts-google-plugin](https://github.com/yuzejia/webpack-ts-google-plugin)

## 设计思路
+ Google-Plugin 开发规范
+ webpack 编译ts 文件
+ @types/chrome  chrome Api ts类型支持

Google 插件开发中。manifest.json 是识别插件的唯一标识。

### src 开发目录结构 
```
|-- src
    |-- manifest.json
    |-- assets
    |   |-- img
    |-- css
    |   |-- style.less
    |-- enum
    |   |-- base-interface.ts
    |   |-- en.ts
    |-- html
    |   |-- index.html
    |-- ts
        |-- base.ts
        |-- bg-ext.ts
        |-- bg.ts
        |-- content.ts
        |-- message.ts
```  
html 和 ts 目录是必须的

### dist 输出结果目录
```
|-- undefined
    |-- main.zip
    |-- manifest.json
    |-- html
    |   |-- index.html
    |   |-- index2.html
    |-- js
        |-- base.js
        |-- bg-ext.js
        |-- bg.js
        |-- content.js
        |-- content.js.LICENSE.txt
        |-- main.js
        |-- message.js
```
正常编译输出后 ts 下的文件将输出到 dist/js 目录中。
html 文件输出到 dist/html 目录中。
manifest.json 将正常输出到根目录。

### ts 编译
对于浏览器来说只识别 js html css
ts只是开发的辅助工具。webpack 自动识别 src/ts 下的文件列表。进行转换后输出dist/js
```typeScript
    // 获取ts 文件夹下的文件自动打包输出
    function entryResolve(): webpack.EntryObject | string[] {

        const tsPath = "./src/ts/"
        const tsList: string[] = fs.readdirSync(tsPath)
        const tsListObj: webpack.EntryObject = {}

        for (const p in tsList) {
            const s = tsList[p].replace(/([.][^.]+)$/, "")
            tsListObj[`js/${s}`] = tsPath + tsList[p]
        }

        return tsListObj
    }


```
webpack 自动读取ts 目录下的文件进行，编译输出到dist js目录
