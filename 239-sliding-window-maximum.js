/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
        if (nums === null || nums.length === 0 || k === 0 || nums.length < k)
                return [];
        let res = [];
        let i = 0;
        let dq = new ArrayDeque();
        while (i < nums.length) {
                while (!dq.empty() && dq.peekFirst() === i - k) {
                        dq.removeFirst();
                }

                while (!dq.empty() && nums[dq.peekLast()] <= nums[i]) {
                        dq.removeLast();
                }

                dq.addLast(i);

                if (i >= k - 1) {
                        res.push(nums[dq.peekFirst()]);
                }

                i++;
        }

        return res;
}

class ArrayDeque {
        constructor() {
                this.array = [];
        }

        peekFirst() {
                return this.array[0];
        }
        peekLast() {
                return this.array[this.array.length - 1];
        }
        empty() {
                return this.array.length === 0;
        }

        removeFirst() {
                this.array.shift();
        }

        removeLast() {
                this.array.pop();
        }

        addLast(val) {
                this.array.push(val);
        }
}
