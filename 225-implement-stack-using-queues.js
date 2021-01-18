class MyQueue {
        constructor() {
                this.array = [];
        }

        enqueue(val) {
                this.array.push(val);
        }

        dequeue() {
                return this.array.shift();
        }

        peek() {
                return this.array[0];
        }
        size() {
                return this.array.length;
        }

        empty() {
                return this.array.length === 0;
        }
}

class MyStack {
        constructor() {
                this.queue1 = new MyQueue();
                this.queue2 = new MyQueue();
        }

        push(val) {
                this.queue2.enqueue(val);
                while (!this.queue1.empty()) {
                        this.queue2.enqueue(this.queue1.dequeue());
                }
                let temp = this.queue1;
                this.queue1 = this.queue2;
                this.queue2 = temp;
        }

        pop() {
                return this.queue1.dequeue();
        }

        top() {
                return this.queue1.peek();
        }

        empty() {
                return this.queue1.empty();
        }
}
