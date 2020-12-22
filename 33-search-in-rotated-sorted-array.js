/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
        if (nums.length === 0) return -1

        if (nums.length === 1) {
                if (nums[0] === target) return 0
                return -1
        }

        let peakIndex = findPeakIndex(nums)

        if (target >= nums[0] && target <= nums[peakIndex]) {
                return searchSorted(nums, 0, peakIndex, target)
        }

        return searchSorted(nums, peakIndex + 1, nums.length - 1, target)
}

function searchSorted(nums, left, right, target) {
        while (left <= right) {
                let mid = left + Math.floor((right - left) / 2)
                if (nums[mid] === target) return mid
                if (nums[mid] > target) {
                        right = mid - 1
                } else {
                        left = mid + 1
                }
        }
        return -1
}

function findPeakIndex(nums) {
        let left = 0
        let right = nums.length - 1
        if (nums[left] < nums[right]) return right

        while (left + 1 < right) {
                let mid = left + Math.floor((right - left) / 2)
                if (nums[mid] > nums[mid + 1]) return mid
                if (nums[mid] > nums[left]) {
                        left = mid + 1
                } else {
                        right = mid - 1
                }
        }
        if (nums[left] > nums[left + 1]) return left
        if (nums[right] > nums[right + 1]) return right
}
