/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let result = nums[0];

        while (left <= right) {
                let mid = left + Math.floor((right - left) / 2);
                if (nums[mid] >= nums[left]) {
                        result = Math.min(result, nums[left]);
                        left = mid + 1;
                } else {
                        result = Math.min(result, nums[mid]);
                        right = mid - 1;
                }
        }

        return result;
}
