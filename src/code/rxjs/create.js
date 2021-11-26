// 创造操作符 create


console.log('creat.js ===>', rxjs);
const { range, of, create, fromEvent } = rxjs;
const { map, filter,debounceTime } = rxjs.operators;
var ob = rxjs.Observable;
var Rx = rxjs;
var app = document.getElementById("app");
const a = document.createElement('p');


// 创建 create  ---------------
const observable = ob.create(observer => {

    // 执行
    observer.next(1);
    observer.next(2);
    observer.next(3);

    // 执行错误信息
    observer.error('error---')

    // 执行结束
    observer.complete();
});

// 订阅
const subscription = observable.subscribe(e => {
    console.log(e);
})

// ------------------------------------


// empty -- 立即完成

Rx.empty().subscribe({
    next: () => {
        console.log('empty next');
    },
    complete: () => {
        console.log('complete')
    }
})



// from   将数组、promise 或迭代器转换成 observable 。

Rx.from([1,2,34]).pipe(
    map((e) => {
        return e*6
    }),
    filter(e => e > 14)
).subscribe({
    next:(t) => {
        console.log(t);
    }
})


// fromEvent   将事件转换成 observable 序列。

fromEvent(document, 'click').pipe(
    debounceTime(500)
).subscribe((val) => {
    console.log(val);
})



subscription.unsubscribe(); // 取消订阅

class obj {
    name = null;
    age = null;
    constructor(n, g) {
        this.name = 'name' + n;
        this.age =  '年龄' + g;
    }
}

range(1, 10)
    .pipe(
        filter(x => x % 2 === 1),
        map(x => {
           o = new obj(x,x);
           o.c = '哈哈哈';
           return o;
        })
    )
    .subscribe(x => {
        let dom = createElement('div');
        dom.appendChild(createElement('p', x))
        app.appendChild(dom);
    });




// 创建dom
function createElement(d, t) {
    const dom = document.createElement(d);
    if(t) {
        let txt = '';
        if(Object.isExtensible(t)) {
            Object.keys(t).forEach(x => { txt = txt + '---' + t[x];})
        }
    
        dom.innerHTML = t.name;
    }

    
    return dom;

}
