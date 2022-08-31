/**
 * 解题步骤:
 * 1.新建一个空链表;
 * 2.遍历被相加的两个链表,模拟相加操作,将个位数追加到新链表上,
 * 将十位数留到下一位去相加.
 * 
 */
let addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    while(p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if(p1) {
            p1 = p1.next;
        }
        if(p2) {
            p2 = p2.next;
        }
        p3 = p3.next;
    }
    if(carry) {
        p3.next = new ListNode(carry);
    }
    return l3.next;
}