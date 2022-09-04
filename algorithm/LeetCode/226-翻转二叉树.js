
let inverTree = function(root) {
    if(!root) {return null;}
    return {
        val: root.val,
        left: inverTree(root.right),
        right: inverTree(root.left)
    }
}