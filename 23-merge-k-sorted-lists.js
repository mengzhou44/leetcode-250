function mergeKLists(lists) {
        if (lists.length === 0) return null
        if (lists.length === 1) return lists[0]

        while (lists.length > 1) {
                let left = 0
                let right = lists.length - 1
                let merged = []
                while (left <= right) {
                        if (left === right) {
                                merged.push(lists[left])
                        } else {
                                merged.push(merge(lists[left], lists[right]))
                        }
                        left++
                        right--
                }
                lists = merged
        }

        return lists[0]
}

function merge(node1, node2) {
        if (node1 === null) return node2
        if (node2 === null) return node1

        let dummy = new ListNode(-1)
        let cur = dummy

        while (node1 !== null || node2 !== null) {
                if (node1 !== null && node2 !== null) {
                        if (node1.val < node2.val) {
                                cur.next = node1
                                node1 = node1.next
                                cur = cur.next
                        } else {
                                cur.next = node2
                                node2 = node2.next
                                cur = cur.next
                        }
                } else if (node1 === null) {
                        cur.next = node2
                        break
                } else {
                        cur.next = node1
                        break
                }
        }

        return dummy.next
}
