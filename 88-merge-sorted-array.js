/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
        let cur1 = m - 1
        let cur2 = n - 1
        let cur = m + n - 1
        while (cur1 >= 0) {
                if (nums1[cur1] < nums2[cur2]) {
                        nums1[cur] = nums2[cur2]
                        cur2--
                } else {
                        swap(nums1, cur1, cur)
                        cur1--
                }
                cur--
        }

        while (cur2 >= 0) {
                nums1[cur2] = nums2[cur2]
                cur2--
        }
}

function swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
}
