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
 * @return {string[]}
 */
function binaryTreePaths(root) {
        let res = [];
        if (root === null) return res;

        dfs(root);

        return res;

        function dfs(current, path = []) {
                if (current === null) return;
                path.push(current.val);

                if (current.left === null && current.right === null) {
                        res.push(path.join('->'));
                        return;
                }

                dfs(current.left, [...path]);
                dfs(current.right, [...path]);
        }
}
