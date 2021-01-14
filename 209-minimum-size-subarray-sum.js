/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
        let res = Number.MAX_SAFE_INTEGER;

        let left = -1;
        let sum = 0;
        for (let right = 0; right < nums.length; right++) {
                sum += nums[right];
                while (sum >= s) {
                        res = Math.min(right - left, res);
                        left++;
                        sum -= nums[left];
                }
        }

        return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}
