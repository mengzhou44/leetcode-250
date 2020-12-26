/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
        if (nums.length === 1) return nums[0]

        let array = [nums[0]]

        for (let i = 1; i < nums.length; i++) {
                if (array[i - 1] > 0) {
                        array[i] = array[i - 1] + nums[i]
                } else {
                        array[i] = nums[i]
                }
        }

        let max = Number.MIN_SAFE_INTEGER
        for (num of array) {
                max = Math.max(num, max)
        }

        return max
}
