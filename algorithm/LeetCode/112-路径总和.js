let hasPathSum = function(root, sum) {
    if(!root) {return false;}
    let res = false;
    const dfs = (n, s) => {
        if(!n.left && !n.right && s === sum) {
            res = true;
        }
        if(n.left) {
            dfs(n.left, s + n.left.val);
        }
        if(n.right) {
            dfs(n.right, s + n.right.val);
        }
    }
    dfs(root, root.val);
    return res;
}