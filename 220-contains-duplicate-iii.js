/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
        for (let i = 0; i < nums.length; i++) {
                if (searchAlmostDuplicate(i)) {
                        return true;
                }
        }

        return false;

        function searchAlmostDuplicate(index) {
                let j = index + 1;
                while (j < nums.length && j - index <= k) {
                        if (Math.abs(nums[j] - nums[index]) <= t) {
                                return true;
                        }
                        j++;
                }
                return false;
        }
}
