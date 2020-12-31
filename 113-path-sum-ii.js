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
 * @return {number[][]}
 */

function pathSum(root, sum) {
        if (root === null) return []

        let res = []

        dfs(root, sum)

        return res

        function dfs(node, sum, path = []) {
                path.push(node.val)

                if (node.left === null && node.right === null) {
                        if (sum === node.val) {
                                res.push(path)
                        }
                        return
                }

                if (node.left !== null) {
                        dfs(node.left, sum - node.val, [...path])
                }

                if (node.right !== null) {
                        dfs(node.right, sum - node.val, [...path])
                }
        }
}
