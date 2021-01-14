/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
        if (nums.length === 1) return nums[0];

        let max1 = helper(nums.slice(1));
        let max2 = helper(nums.slice(0, nums.length - 1));

        return Math.max(max1, max2);
}

function helper(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        let n = nums.length;

        let dp = new Array(n + 1).fill(0);
        dp[0] = 0;
        dp[1] = nums[0];

        for (let i = 2; i < n + 1; i++) {
                dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
        }

        return dp[n];
}

function robMaximum(nums, i, j) {}
