/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
        if (root === null) return root

        let array = [root]
        while (array.length > 0) {
                let levelSize = array.length
                let count = 0
                let level = []
                while (count < levelSize) {
                        let node = array.shift()
                        level.push(node)
                        if (node.left !== null) {
                                array.push(node.left)
                        }
                        if (node.right !== null) {
                                array.push(node.right)
                        }

                        count++
                }
                for (i = 0; i < level.length; i++) {
                        if (i + 1 < level.length) {
                                level[i].next = level[i + 1]
                        } else {
                                level[i].next = null
                        }
                }
        }

        return root
}

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
        if (root === null) return root

        helper(root)

        return root
}

function helper(node) {
        if (node === null) return

        if (node.left !== null) {
                node.left.next = node.right
        }

        if (node.right !== null && node.next !== null) {
                node.right.next = node.next.left
        }

        helper(node.left)
        helper(node.right)
}
