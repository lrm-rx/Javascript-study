/**
 * 解题思路
 * 1. 反转两个节点: 将n+1的next指向n.
 * 2. 反转多个节点: 双指针遍历链表,重复上述操作.
 * 解题步骤:
 * 1.双指针一前一后遍历链表.
 * 2.反转双指针.
 */

var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while(p1){
        console.log(p1.val, p2 && p2.val)
        const temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}