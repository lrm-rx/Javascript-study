let maxProfit = function(prices) {
    let profit = 0;
    for(let i=1;i<prices.length;i +=1) {
        if(prices[i]>prices[i-1]) {
            profit += prices[i] - prices[i-1]
        }
    }
    return profit;
}