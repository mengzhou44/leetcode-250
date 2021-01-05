function detectCycle(head) {
        if (head === null) return null;

        let slow = head;
        let fast = head;
        while (fast.next !== null && fast.next.next !== null) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow === fast) {
                        break;
                }
        }

        if (fast.next === null || fast.next.next === null) {
                return null;
        }

        while (slow !== head) {
                slow = slow.next;
                head = head.next;
        }

        return slow;
}