/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
        if (nums.length === 1) return

        let n = nums.length

        let i = n - 2

        while (i >= 0 && nums[i] >= nums[i + 1]) {
                i--
        }

        if (i >= 0) {
                let j = n - 1
                while (j > i && nums[j] <= nums[i]) {
                        j--
                }
                swap(nums, i, j)
        }

        reverse(nums, i + 1, n - 1)
}

function swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
}

function reverse(nums, i, j) {
        while (i < j) {
                swap(nums, i, j)
                i++
                j--
        }
}
