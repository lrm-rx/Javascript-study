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
/**
 * 
 * @param {*} root 
 */
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
}
dfs(tree)
console.log('********************************')
// 广度遍历
const bfs = (root) => {
    const q = [root];
    while(q.length > 0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
           q.push(child); 
        });
    }
}

bfs(tree)
