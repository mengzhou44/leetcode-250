function minCost(costs) {
     let dp = new Array(costs.length)
     dp[0] =  costs[0].reduce((min, item)=> Math.min(min,item), Number.MAX_SAFE_INTEGER)
     
     
}