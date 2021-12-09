---
title: rxjs Subject
date: 2019-02-01
categories: 
 - 前端
tags:
 - Rxjs
---


参考文献： [https://zhuanlan.zhihu.com/p/29130168](https://zhuanlan.zhihu.com/p/29130168)
rxjs 多播的使用。
在使用rxjs 去做某些业务的时候，常常会用多 subject 去做订阅监听。
## Subject

```typeScript
    const sub$ = new Subject();

    sub$.subscribe((res) => {
    console.log('S1---', res);
    });

    sub$.next(1);
    sub$.next(2);

    const subscription = sub$.subscribe((res) => {
    console.log('s2---', res);
    });

    sub$.next(3);

    // sub$ 可以被取消订阅  subscription 被取消了订阅 所以 就拿不到接下来的 next 4
    subscription.unsubscribe();

    sub$.next(4);
```

## BehaviorSubject 
它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。

第一次订阅者。会拿到默认值。
第二次订阅者。会拿到最后发射的值。
BehaviorSubject 会储存上次发射的值。在有新的订阅的时候 会先发射上次最后一次储存的值
```typeScript
const behavior$ = new BehaviorSubject(0);
const bei = behavior$.subscribe((res) => {
  console.log('A---', res);   

});

behavior$.next(1);
behavior$.next(2);
behavior$.next(3);

behavior$.subscribe((res) => {
  console.log('B---', res);
});

behavior$.next(4);


// A--- 0
// A--- 1
// A--- 2
// A--- 3
// B--- 3     // B 被订阅的时候 第一次发射储存的最后一个值
// A--- 4
// B--- 3


```

## ReplaySubject   

记录 Observable 执行中的多个值并将其回放给新的订阅者。
ReplaySubject 接收数值，这个数值标识在重复订阅后回放上次几个流。
假如我设置了数值为2。在R2 执行的时候 回先发射上次流的后两个 2，3
```typeScript
    const replace$ = new ReplaySubject(2);

    replace$.subscribe((res) => {
    console.log('R1---', res);
    });

    replace$.next(1);
    replace$.next(2);
    replace$.next(3);

    replace$.subscribe((res) => {
    console.log('R2---', res);
    });
    replace$.next(4);
```

## AsyncSubject
AsyncSubject总是在subject调用complete()后才会将之前最后一个值发送给它的订阅者。
所以说你前面写再多的next 见不到 complete 都不会拿到订阅数据
```typeScript
    const Async$ = new AsyncSubject();

    Async$.subscribe((res) => {
    console.log('A--', res);
    });

    Async$.next(1);
    Async$.next(2);
    Async$.next(3);
    Async$.complete();
```