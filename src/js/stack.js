class Stack {

    // 普通的栈常用的有以下几个方法：
    // 1、push 添加一个（或几个）新元素到栈顶
    // 2、pop 溢出栈顶元素，同时返回被移除的元素
    // 3、peek 返回栈顶元素，不对栈做修改
    // 4、isEmpty 栈内无元素返回 true，否则返回 false
    // 5、size 返回栈内元素个数
    // 6、clear 清空栈



    constructor() {

        this._items = []; // 储存数据

    }

    // 向栈内压入一个元素

    push(item) {

        this._items.push(item);

    }

    // 把栈顶元素弹出

    pop() {

        return this._items.pop();

    }

    // 返回栈顶元素

    peek() {

        return this._items[this._items.length - 1];

    }

    // 判断栈是否为空

    isEmpty() {

        return !this._items.length;

    }

    // 栈元素个数

    size() {

        return this._items.length;

    }

    // 清空栈

    clear() {

        this._items = [];

    }

}

const stack = new Stack();
stack.push({id: 1})
stack.push({id: 2})
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
console.log(stack._items);