class Node {
        constructor(key, val) {
                this.key = key;
                this.val = val;
                this.prev = null;
                this.next = null;
        }
}

class LRUCache {
        constructor(capacity) {
                this.capacity = capacity;
                this.size = 0;
                this.map = new Map();
                this.head = new Node(-1);
                this.tail = new Node(-1);
                this.head.next = this.tail;
                this.tail.pfrev = this.head;
        }

        get(key) {
                if (!this.map.has(key)) return -1;
                let node = this.map.get(key);

                this.removeNode(node);
                this.addNodeToHead(node);

                return node.val;
        }

        put(key, value) {
                if (this.map.has(key)) {
                        let node = this.map.get(key);
                        this.removeNode(node);
                }

                let node = new Node(key, value);
                this.addNodeToHead(node);
        }

        removeNode(node) {
                let prev = node.prev;
                let next = node.next;
                prev.next = next;
                next.prev = prev;
                this.size--;
                this.map.delete(node.key);
        }

        addNodeToHead(node) {
                let next = this.head.next;
                this.head.next = node;
                node.next = next;
                node.prev = this.head;
                next.prev = node;
                this.map.set(node.key, node);
                this.size++;

                if (this.size > this.capacity) {
                        let nodeToRemove = this.tail.prev;
                        this.removeNode(nodeToRemove);
                }
        }
}
