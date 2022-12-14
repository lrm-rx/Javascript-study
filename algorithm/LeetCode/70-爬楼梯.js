
let climbStairs = function(n) {
    if(n<2) {return 1;}
    // const dp = [1, 1];
    let dp0 = 1;
    let dp1 = 1;
    for(let i = 2; i <= n; i++) {
        // dp[i] = dp[i - 1] + dp[ i - 2];
        const temp = dp0;
        dp0 = dp1;
        dp1 = dp1 + temp;
    }
    // return dp[n]
    return dp1;
}