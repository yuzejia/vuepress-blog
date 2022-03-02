class Node {
    constructor(el) {
        this.el = el
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // 追加元素
    append(el) {
        let node = new Node(el);
        let current = null // 指针


        if (this.head === null) {
            this.head = node

        } else {
            current = this.head;

            while (current.next) {
                current = current.next
            }

            current.next = node

        }
        this.length++


    }

    // 头部添加元素
    appHead(el) {
        let node = new Node(el);
        if (this.head) {
            node.next = this.head;
        }

        this.head = node;
        this.length++

    }

    // 查询指定位置元素
    getElementAt(position) {
        // 查询元素不在范围内
        if (position < 0 || position > this.length) return null;

        let current = this.head;
        let i = 0
        while (i < position) {
            current = current.next
            i++
        }

        return current

    }

    // 链表指定位置插入节点
    insert(position, el) {
        if (position < 0 || position > this.length) return false;
        let node = new Node(el);

        // 如果是 0 头部插入
        if (position === 0) {
            this.appHead(el)
            return
        }

        let previous = null;
        let current = this.head;
        let index = 0
        while (index++ < position) {
            previous = current
            current = current.next
        }

        node.next = current;
        previous.next = node;

        this.length++

        console.log("", this.head);
    }


    // 删除链表

    delete(position) {
        // 节点必须在链表范围内
        if (position < 0 || position > this.length) return false;

        let previous = null
        let current = this.head
        let index = 0
        while (index++ < position) {
            previous = current
            current = current.next
        }

        previous.next = current.next
        this.length--
    }

    searchPosition(position) {
        // 节点必须在链表范围内
        if (position < 0 || position > this.length) return null;
        let current = this.head
        while (position--) {
            current = current.next
        }

        return current
    }

    find(el) {

        let current = this.head

        // 判断 当前节点 元素 是否登录查询节点元素 current 为空表示 该链表不存在该查询节点
        while (current !== null && current.el != el) {
            current = current.next
        }
        return current

    }



}

const linked = new linkedList()
linked.append("0")
linked.append("1")
linked.append("2")
linked.append("3")
linked.append("4")
linked.append("5")
// linked.appHead("6")
linked.insert(3, "6")
linked.delete(4)
const c = linked.find("9")
console.log('position', c);
console.log(linked);