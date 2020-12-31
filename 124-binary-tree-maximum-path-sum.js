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
 * @return {number}
 */
function maxPathSum(root) {
        if (root === null) return 0

        let max = Number.MIN_SAFE_INTEGER

        dfs(root)

        return max
        function dfs(node) {
                if (node === null) return 0

                let l = Math.max(0, dfs(node.left))
                let r = Math.max(0, dfs(node.right))

                max = Math.max(max, l + r + node.val)

                return node.val + Math.max(l, r)
        }
}
