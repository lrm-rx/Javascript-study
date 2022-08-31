// const bt = require('./bt');

const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
// ----------------   递归版 --------------
// 先序遍历算法
const preorder = (root) => {
    if (!root) { return; }
    console.log(root.val); // 根
    preorder(root.left);
    preorder(root.right);
}
preorder(bt)

/**
 * 中序遍历算法口诀:
 * 1. 对根节点的左子树进行中序遍历;
 * 2. 访问根节点;
 * 3. 对根节点的右子树进行中序遍历.
 */
const inorder = (root) => {
    inorder(root.left);
    console.log(root.val); // 根
    inorder(root.right)
}

// 后序遍历算法
const postOrder = (root) => {
    if (!root) { return; }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val); // 根
}

// ------------- 非递归版本 ----------------
// 先序遍历算法
const preorder1 = (root) => {
    if (!root) { return; }
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }
}

// 中序遍历算法
const inorder1 = (root) => {
    if(!root) {return;}
    const stack = [];
    let p = root;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = p.right;
    }
}

// 后序遍历算法
const postOrder1 = (root) => {
    if (!root) { return; }
    const outputStack = [];
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while(outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}