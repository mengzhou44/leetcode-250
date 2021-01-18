/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
                if (!map.has(nums[i])) {
                        map.set(nums[i], i);
                } else {
                        let prevPos = map.get(nums[i]);

                        if (i - prevPos <= k) {
                                return true;
                        } else {
                                map.set(nums[i], i);
                        }
                }
        }

        return false;
}
