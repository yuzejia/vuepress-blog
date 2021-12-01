---
title: rxjs subject
date: 2019-02-01
categories: 
 - 前端
tags:
 - Rxjs
---


参考文献： [https://zhuanlan.zhihu.com/p/29130168](https://zhuanlan.zhihu.com/p/29130168)
rxjs 多播的使用。
在使用rxjs 去做某些业务的时候，常常会用多 subject 去做订阅监听。
subject

BehaviorSubject 
它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。


ReplaySubject   

记录 Observable 执行中的多个值并将其回放给新的订阅者。
AsyncSubject