let cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map();
    // const dfs = (n) => {
    //     const nCopy = new Node();
    //     visited.set(n, nCopy);
    //     (n.neighbors || []).forEach(ne => {
    //         if(!visited.has(ne)) {
    //             dfs(ne)
    //         }
    //         nCopy.neighbors.push(visited.get(ne))
    //     });
    // }
    // dfs(node);
    visited.set(node, new Node(node.val));
    const q = [node];
    while (q.length) {
        const n = q.shift();
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne))
        });
    }
    return visited.get(node);
}