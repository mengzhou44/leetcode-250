/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
        let pos = 0

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] === 0) {
                        swap(nums, i, pos++)
                }
        }
        for (let j = pos; j < nums.length; j++) {
                if (nums[j] === 1) {
                        swap(nums, j, pos++)
                }
        }
}

function swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
}
