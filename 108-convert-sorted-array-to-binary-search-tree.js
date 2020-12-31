/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
        if (nums.length === 0) return null

        if (nums.length === 1) return new TreeNode(nums[0])

        let left = 0
        let right = nums.length - 1
        let mid = left + Math.floor((right - left) / 2)

        let leftArray = nums.slice(0, mid)
        let rightArray = nums.slice(mid + 1)

        return new TreeNode(
                nums[mid],
                sortedArrayToBST(leftArray),
                sortedArrayToBST(rightArray)
        )
}
