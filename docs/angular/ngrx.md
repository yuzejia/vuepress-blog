---
title: angular初探 ngrx
date: 2018-04-01
categories: 
 - 前端
tags:
 - Angular
---

angular 初探 ngrx 进行数据管理 

[ngrx官网：https://ngrx.io/docs](https://ngrx.io/docs)

[redux官网：https://www.redux.org.cn/](https://www.redux.org.cn/)

### 安装
```
npm install @ngrx/store --save
```

```
ng add @ngrx/store
```
执行 ng add@ngrx/store 会自动在 app.module.ts 引入 StoreModule.forRoot()

```typeScript
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({},{})
    ],
```