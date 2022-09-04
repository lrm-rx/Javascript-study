/**
 *                          数组 vs 链表
 * 数组: 增删非首尾元素时往往需要移动元素.
 * 链表: 增删非首尾元素,不需要移动元素,只需要更改next的指向即可.
 */

const a = {val: 'a'};
const b = {val: 'b'};
const c = {val: 'c'};
const d = {val: 'd'};

a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while(p) {
    console.log(p.val);
    p = p.next;
}

// 插入
const e = {val: 'e'};
c.next = e;
e.next = d;

// 删除
c.next = d;