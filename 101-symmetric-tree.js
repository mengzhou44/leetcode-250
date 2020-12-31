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
function isSymmetric(root) {
        if (root === null) return true

        return helper(root.left, root.right)
}

function helper(node1, node2) {
        if (node1 === null && node2 === null) return true
        if (node1 === null || node2 === null) return false

        if (node1.val !== node2.val) return false

        return (
                helper(node1.left, node2.right) &&
                helper(node1.right, node2.left)
        )
}
