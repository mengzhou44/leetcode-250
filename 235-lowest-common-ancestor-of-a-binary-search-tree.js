/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
        if (root === null) return null;
        if (root === p) return p;
        if (root === q) return q;

        if (root.val > p.val) {
                if (root.val > q.val) {
                        return lowestCommonAncestor(root.left, p, q);
                }
                return root;
        }
        if (root.val < p.val) {
                if (root.val < q.val) {
                        return lowestCommonAncestor(root.right, p, q);
                }
                return root;
        }
}
