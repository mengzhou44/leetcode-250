/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
        if (head === null) return null;

        let map = new Map();

        let node = new Node(head.val);
        map.set(head, node);

        let cur = head;
        while (cur !== null) {
                let copied = map.get(cur);
                cur = cur.next;
                if (cur !== null) {
                        copied.next = new Node(cur.val);
                        map.set(cur, copied.next);
                }
        }

        cur = head;
        while (cur !== null) {
                let copied = map.get(cur);
                copied.random = map.get(cur.random);
                cur = cur.next;
        }

        return node;
}
