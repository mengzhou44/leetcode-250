/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
        if (nums.length < 2) return;

        let num = nums.shift();
        moveZeroes(nums);
        if (num === 0) {
                nums.push(0);
        } else {
                nums.unshift(num);
        }
}

function moveZeroes(nums) {
        if (nums.length < 2) return;
        let cur = 0;
        for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                        nums[cur] = nums[i];
                        cur++;
                }
        }

        while (cur < nums.length) {
                nums[cur] = 0;
                cur++;
        }
}
