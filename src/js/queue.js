class Queue {
    // 队列遵循先进先出
    /**
     * 在计算机科学中, 一个 队列(queue) 是一种特殊类型的抽象数据类型或集合。 集合中的实体按顺序保存。

     队列基本操作有两种： 入队和出队。 从队列的后端位置添加实体， 称为入队； 从队列的前端位置移除实体， 称为出队。

     队列中元素先进先出 FIFO(first in , first out) 的示意
     */
    // 普通的队列常用的有以下几个方法：

    //     1、enqueue 向队列尾部添加一个(或多个)新的项

    //     2、dequeue 移除队列的第一(即排在队列最前面的)项，并返回被移除的元素

    //     3、head 返回队列第一个元素，队列不做任何变动

    //     4、tail 返回队列最后一个元素，队列不做任何变动

    //     5、isEmpty 队列内无元素返回 true，否则返回 false

    //     6、size 返回队列内元素个数

    //     7、clear 清空队列


    constructor() {

        this._items = [];

    }

    enqueue(item) {

        this._items.push(item);

    }

    dequeue() {

        return this._items.shift();

    }

    firstDequeue() {
        return this._items.shift();
    }

    lastDequeue() {

        return this._items.pop()
    }


    head() {

        return this._items[0];

    }

    tail() {

        return this._items[this._items.length - 1];

    }

    isEmpty() {

        return !this._items.length;

    }

    size() {

        return this._items.length;

    }

    clear() {

        this._items = [];

    }

}

const arr_100 = Array.from({
    length: 5
}, (_, i) => i);

console.log(arr_100);

function delRing(list) {

    const queue = new Queue();

    list.forEach(e => {
        queue.enqueue(e);
    });

    let index = 0;

    while (queue.size() !== 1) {

        const item = queue.dequeue();
        //    console.log(queue._items);
        index += 1;

        if (index % 3 !== 0) {

            queue.enqueue(item);

        }

    }

    return queue.tail();

}


// 回文
function hw(str) {

    console.log("回文---", str);
    const list = str.split("")
    const queue = new Queue()

    for (let index = 0; index < list.length; index++) {
        const e = list[index];
        queue.enqueue(e);
    }

    let type = true;
    while (queue.size() > 1) {
        let first = queue.firstDequeue()
        let last = queue.lastDequeue()

        if (first != last) {
            console.log("不等");
            type = false
        }
        return type
    }

}

const hwType = hw("abcba")
console.log(hwType);

// 击鼓传花