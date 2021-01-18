/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
        let queue = [];

        for (let num of nums) {
                addToQueue(num);
        }

        return queue[queue.length - 1];

        function addToQueue(num) {
                if (queue.length === 0) {
                        queue.push(num);
                } else {
                        let i;
                        for (i = queue.length - 1; i >= 0; i--) {
                                if (queue[i] < num) {
                                        queue[i + 1] = queue[i];
                                } else {
                                        break;
                                }
                        }

                        queue[i + 1] = num;
                }

                if (queue.length > k) {
                        queue.pop();
                }
        }
}
