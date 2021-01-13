/**
 * @param {number[]} nums
 * @return {number}
 */
function  rob(nums) {
    if (nums.length === 1)  return nums[0] 
    let  n = nums.length 
    let dp = new Array(n+1).fill(0)
    
    dp[0] = 0
    dp[1] = nums[0]

    for(let i=2; i<dp.length; i++) {         
          dp[i] = Math.max(dp[i-2]+ nums[i-1] , dp[i-1])
    }

    return dp[n] 
}