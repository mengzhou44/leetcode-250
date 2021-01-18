class MyStack {
        constructor() {
                this.array = [];
        }

        push(val) {
                this.array.push(val);
        }

        pop() {
                return this.array.pop();
        }

        peek() {
                return this.array[this.array.length - 1];
        }

        empty() {
                return this.array.length === 0;
        }
}

class MyQueue {
        constructor() {
                this.stack1 = new MyStack();
                this.stack2 = new MyStack();
        }

        push(val) {
                this.stack1.push(val);
        }

        pop() {
                while (!this.stack1.empty()) {
                        this.stack2.push(this.stack1.pop());
                }
                let res = this.stack2.pop();
                while (!this.stack2.empty()) {
                        this.stack1.push(this.stack2.pop());
                }
                return res;
        }

        peek() {
                while (!this.stack1.empty()) {
                        this.stack2.push(this.stack1.pop());
                }
                let res = this.stack2.peek();
                while (!this.stack2.empty()) {
                        this.stack1.push(this.stack2.pop());
                }
                return res;
        }

        empty() {
                return this.stack1.empty();
        }
}
