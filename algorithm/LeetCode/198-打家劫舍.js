
let rob = function (nums) {
    if (nums.length === 0) { return 0; }
    const dp = [0, nums[0]];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }
    console.log(dp)
    return dp[nums.length];
}

rob([2,7,9,3,1])
console.log(rob([2,7,9,3,1]))

// 优化
let rob1 = function (nums) {
    if (nums.length === 0) { return 0; }
    // const dp = [0, nums[0]];
    let dp0 = 0;
    let dp1 = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        // dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
        const dp2 = Math.max(dp0 + nums[i - 1], dp1);
        dp0 = dp1;
        dp1 = dp2;
    }
    return dp1;
}