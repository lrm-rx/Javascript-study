let permute = function(nums) {
    const res = [];
    const backtrack = () => {
        if(path.length === nums.length) {
            res.push(path);
            return;
        }
        nums.forEach(n => {
            if(path.includes(n)) {return;}
            backtrack(path.concat(n));
        });
    };
    backtrack([]);
    return res;
}