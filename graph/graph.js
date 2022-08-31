const graph = {
    0: [1,2],
    1: [2],
    2: [0, 3],
    3: [3]
}
// 深度优先遍历
const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(c => {
        if(!visited.has(c)) {
            dfs(c);
        }
    });
}
dfs(2);

// 广度优先遍历
const visited2 = new Set();
visited2.add(2)
const q = [2];
while(q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach(c => {
        if(!visited2.has(c)) {
            q.push(c);
            visited2.add(c)
        }
    });
}