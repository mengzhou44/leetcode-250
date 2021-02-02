/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
        if (nums.length === 0) return 0;

        for (let i = 0; i < nums.length; i++) {
                let index = Math.abs(nums[i]) - 1;
                if (nums[index] < 0) {
                        return index + 1;
                }
                nums[index] = -nums[index];
        }

        return -1;
}
