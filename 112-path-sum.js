/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
        if (root === null) return false

        if (root.left === null && root.right === null) return root.val === sum

        return (
                hasPathSum(root.left, sum - root.val) ||
                hasPathSum(root.right, sum - root.val)
        )
}
