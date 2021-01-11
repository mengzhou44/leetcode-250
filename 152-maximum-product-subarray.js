/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
        let maxToCur = nums[0];
        let minToCur = nums[0];
        let max = nums[0];
        for (let i = 1; i < nums.length; i++) {
                let prevMaxToCur = maxToCur;
                let prevMinToCur = minToCur;
                maxToCur = Math.max(
                        prevMaxToCur * nums[i],
                        nums[i],
                        prevMinToCur * nums[i]
                );
                minToCur = Math.min(
                        prevMaxToCur * nums[i],
                        nums[i],
                        prevMinToCur * nums[i]
                );
                max = Math.max(max, maxToCur);
        }

        return max;
}
