
TypeScript中的keyof操作符，是将一个类型映射为它所有成员名称的联合类型。
keyof 是将一个类型映射为他所有成员的联合声明


基本联合类型
声明的变量可以为多种类型
```typeScript
let a: string | number;
a = 'YUZEJIA';
a = 1;

```

对象类型联合
对象联合类型只能访问联合中所有共同成员
```typeScript
    interface a {
        name: string,
        age: number
    }

    interface b {
        name: string,
        age: number,
        get(): void
    }

    declare function ab(): a | b;
    let ab = ab();
    ab.name = 'yzj';
    ab.age = '25';
    ab.get() // err  get 不是共同成员 会报错
```
交叉类型 &
交叉类型就是 多个类型的合集
   interface paramsOne {
        type: string
    }
       interface paramsTwo {
        name: string
    }
init(params: paramsOne & paramsTwo) {
    
}

// params 将为所有的成员
init({type: '1', name: 'yu'})