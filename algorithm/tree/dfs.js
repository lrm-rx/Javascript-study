const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                     children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                     children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
};

// 深度遍历
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
}
dfs(tree)

// 广度遍历

