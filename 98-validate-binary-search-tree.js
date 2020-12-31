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
 * @return {boolean}
 */
function isValidBST(root) {
        if (root == null) return true

        if (root.left === null && root.right === null) return true

        let min = Number.SAFE_MAX_INTEGER
        let max = Number.SAFE_MIN_INTEGER

        return (
                helper(root.left, min, root.val) &&
                helper(root.right, root.val, max)
        )

        function helper(node, min, max) {
                if (node === null) return true

                if (node.val <= min) return false
                if (node.val >= max) return false

                return (
                        helper(node.left, min, node.val) &&
                        helper(node.right, node.val, max)
                )
        }
}
