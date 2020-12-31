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
function isBalanced(root) {
        if (root === null) return true

        if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1)
                return false

        return isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(node) {
        if (node === null) return 0

        return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}
