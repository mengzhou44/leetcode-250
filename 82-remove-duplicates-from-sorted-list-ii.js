/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
        if (head === null) return head

        let dummy = new ListNode(-1)
        dummy.next = head

        let cur = head
        let prev = dummy

        while (cur !== null && cur.next !== null) {
                if (cur.val !== cur.next.val) {
                        prev = cur
                        cur = cur.next
                        continue
                }

                let val = cur.val
                while (cur !== null && cur.val === val) {
                        cur = cur.next
                }

                if (cur === null) {
                        prev.next = null
                        break
                }

                prev.next = cur
        }

        return dummy.next
}
