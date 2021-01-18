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

        if (covers(root.left, p) && covers(root.left, q)) {
                return lowestCommonAncestor(root.left, p, q);
        }

        if (covers(root.right, p) && covers(root.right, q)) {
                return lowestCommonAncestor(root.right, p, q);
        }

        return root;
}

function covers(node1, node2) {
        if (node1 === null) return false;
        if (node1 === node2) return true;

        return covers(node1.left, node2) || covers(node1.right, node2);
}

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
        if (root === null || root === p || root === q) return root;

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        if (left && right) return root;

        return left || right;
}
