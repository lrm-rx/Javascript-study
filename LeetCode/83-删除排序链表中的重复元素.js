/**
 * 解题思路:
 * 1. 因为链表是有序的,所以重复元素一定相邻.
 * 2. 遍历链表,如果发现当前元素和下一个元素值相同,就删除下个元素值.
 * 
 * 解题步骤:
 * 1. 遍历链表,如果发现当前元素和下一个元素值相同,就删除下个元素值.
 * 2. 遍历结束后,返回原链表的头部.
 */

let deleteDuplicates = function(head) {
    let p = head;
    while(p &&p.next) {
        if(p.val === p.next.val) {
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
    return head;
}