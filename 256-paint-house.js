function minCost(costs) {
   if (costs === null || costs.length === 0)  return 0 
   let n= costs.length
  
   for(let i=1;i<n; i++) {
        costs[i][0] =  costs[i][0]+ Math.min(costs[i-1][1], costs[i-1][2])
        costs[i][1] =  costs[i][1]+ Math.min(costs[i-1][0], costs[i-1][2])
        costs[i][2] =  costs[i][2]+ Math.min(costs[i-1][0], costs[i-1][1])
   }

    return Math.min(costs[n-1][0], costs[n-1][1],costs[n-1][2])
}

console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]))