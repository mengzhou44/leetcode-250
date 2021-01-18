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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
        let count = 0;
        let res;
        dfs(root);

        return res;

        function dfs(node) {
                if (node === null) return;
                dfs(node.left);
                count++;
                if (count === k) {
                        res = node.val;
                        return;
                }
                dfs(node.right);
        }
}
