let pacifiAtlantic = function(matrix) {
    if(!matrix || !matrix[0]) {return;}
    const m = matrix.length;
    const n = matrix[0].length;
    const flow1 = Array.from({length: m}, ()=> new Array(n).fill(false));
    const flow2 = Array.from({length: m}, ()=> new Array(n).fill(false));

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r-1], [r+1, c], [r, c-1],[r, c+1]].forEach((nr, nc) => {
            // 保证在矩阵中
            // 防止死循环
            // 保证逆流而上
            if(nr >= 0 && nr < m && 
               nc >= 0 && nc < n &&
               !flow[nr][nc] &&
               matrix[nr][nc] >= matrix[n][c]
               ) {
                dfs(nr,nc,flow);
            }
        })
    };

    // 沿着海岸线逆流而上
    for(let r = 0; r < m; r+= 1) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for(let c = 0; c < n; c+= 1) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    // 收集能流到两个大洋的坐标
    const res = [];
    for(let r = 0; r < m; r+=1) {
        for(let c = 0; c < n; c+=1) {
            if(flow1[r][c] && flow2[r][c]) {
                res.push([r, c])
            }
        }
    }
    return res;
}