//定义链表的方法
class ListNode {
    constructor(val){
        this.val =val
        this.next=null
    }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.next =node2
node2.next =node3
//反转链表
console.log(node1)
function reverse(head){
    let  dummy=head;
    let tmp=dummy;
    
    while(head !==null&&head.next !==null){
        dummy = head.next
        head.next =dummy.next
        dummy.next=tmp
        tmp=dummy

    }
    return dummy
}

    console.log(reverse(node1))
