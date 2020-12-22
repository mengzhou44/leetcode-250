/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
                while (
                        nums[i] > 0 &&
                        nums[i] - 1 < nums.length &&
                        nums[nums[i] - 1] !== nums[i]
                ) {
                        swap(nums, i, nums[i] - 1)
                }
        }

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== i + 1) return i + 1
        }
        return nums.length + 1
}

function swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
}
