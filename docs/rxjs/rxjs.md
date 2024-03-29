---
title: rxjs 安装
date: 2019-02-01
categories: 
 - 前端
tags:
 - Rxjs
---

## 前言：rxjs是什么

RxJS字面意思:（Reactive Extensions for JavaScript）JavaScript的响应式扩展。

Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。

Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。

Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。

Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。

Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。

Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

## 安装

通过 npm 安装 ES6 版本

    npm install rxjs

### CDN
对于 CDN，可以使用 unpkg 。只需要用当前的版本号来替换下面链接中的 version：

对于 RxJS 5.0.0-beta.1 到 beta.11： https://unpkg.com/@reactivex/rxjs@version/dist/global/Rx.umd.js

对于 RxJS 5.0.0-beta.12 及以上版本： https://unpkg.com/@reactivex/rxjs@version/dist/global/Rx.js