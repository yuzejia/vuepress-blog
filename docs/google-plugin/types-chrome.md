---
title: @types/chome api类型库
date: 2020-4-7
categories: 
 - Google
tags:
 - google-plugin
---

# Google 插件开发 chomeApi ts类型库
[npm地址：https://www.npmjs.com/package/@types/chrome](https://www.npmjs.com/package/@types/chrome)


## 项目依赖安装

执行命令
```
npm install @types/chrome -D
```
package.json 文件

```json
 "devDependencies": {
    "@types/chrome": "0.0.171",
    ...
```

然后在tsconfig.json 文件添加类型：
```json
{
 
    "compilerOptions": {
        ...
 
        "types": [
            ...
             
            "chrome",
 
            ...
        ],
 
 
}
```
没配置之前：
<img src="./img/4d6733da125a655d334a689a694200e.png" alt="An image" style="zoom:50%">

配置后：
<img src="./img/429777c006410de5b42bd6320e12bf4.png" alt="An iamge" style="zoom:50%">

ts类型检测可以正常使用~