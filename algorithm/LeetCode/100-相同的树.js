
let isSameTree = function (p, q) {
    if (!p && !q) { return true; }
    if (p && q && p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(q.right, q.right)
    ) {
        return true;
    }
    return false;
}