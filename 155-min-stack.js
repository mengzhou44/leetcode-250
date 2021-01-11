/**
 * initialize your data structure here.
 */
class MinStack {
        constructor() {
                this.array = [];
                this.min = [];
        }
        push(val) {
                if (this.min.length === 0) {
                        this.min.push(val);
                } else if (this.min[this.min.length - 1] >= val) {
                        this.min.push(val);
                }
                this.array.push(val);
        }

        pop() {
                if (this.array.length === 0) return;

                let val = this.array.pop();
                if (this.min[this.min.length - 1] === val) {
                        this.min.pop();
                }
                return val;
        }

        top() {
                return this.array[this.array.length - 1];
        }

        getMin() {
                return this.min[this.min.length - 1];
        }
}
