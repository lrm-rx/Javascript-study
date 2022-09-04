/**
 * 解题思路
 * 
 * 4 --> 5 --> 1 --> 9
 * 
 * 1. 无法直接获取被删除节点的上个节点.
 * 2. 将被删除节点转移到下一个节点.
 * 
 * 解决步骤:
 * 1. 将被删节点的值改为下个节点的值.
 * 2. 删除下个节点.
 * 
 */

let deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}