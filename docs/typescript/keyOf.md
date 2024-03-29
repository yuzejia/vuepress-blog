---
title: typeScript keyof
date: 2020-10-3
categories: 
 - 前端
tags:
 - typeScript
---
TypeScript中的keyof操作符，是将一个类型映射为它所有成员名称的联合类型。

keyof 是将一个类型映射为他所有成员的联合声明

```typeScript

    interface Person {
        name: string;
        age: number;
        gender: string;
    }
    type P = keyof Person; // "name" | "age" | "gender"
```
声明一个类 通过keyof 来实现输入类型限制
```typeScript
    class Student {
        constructor(private info: Person) {}

        getInfo<T extends keyof Person>(key: T): Person[T] {
            return this.info[key];
        }
    }

getInfo 方法通过泛型进行输入输出的约束
解释一下这里的意思
<T extends keyof Person> 
keyof 把 Person 映射成了联合声明 即"name" | "age" | "gender"
extens 标识 T 是包含在Person 的子类。就是 T 只能是 "name" | "age" | "gender"

```
