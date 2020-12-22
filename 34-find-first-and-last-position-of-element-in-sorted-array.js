/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
        if (nums.length === 0) return [-1, -1]
        if (nums.length === 1) {
                if (nums[0] === target) return [0, 0]
                return [-1, -1]
        }

        let first = findFirst(nums, target)

        if (first === -1) return [-1, -1]

        let right = findLast(nums, target)

        return [first, right]
}

function findFirst(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left + 1 < right) {
                let mid = left + Math.floor((right - left) / 2)
                if (nums[mid] === target) {
                        right = mid
                } else if (nums[mid] > target) {
                        right = mid - 1
                } else {
                        left = mid + 1
                }
        }

        if (nums[left] === target) return left
        if (nums[right] === target) return right

        return -1
}

function findLast(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left + 1 < right) {
                let mid = left + Math.floor((right - left) / 2)
                if (nums[mid] === target) {
                        left = mid
                } else if (nums[mid] > target) {
                        right = mid - 1
                } else {
                        left = mid + 1
                }
        }

        if (nums[right] === target) return right
        if (nums[left] === target) return left
        return -1
}
