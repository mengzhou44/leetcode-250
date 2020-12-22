/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
        let steps = 0
        let start = 0
        let end = 0

        if (nums.length === 1) return 0

        while (start <= end) {
                let end_new = end
                for (let i = start; i <= end; i++) {
                        end_new = Math.max(end_new, nums[i] + i)
                        if (end_new >= nums.length - 1) {
                                return steps + 1
                        }
                }

                steps++
                start = end + 1
                end = end_new
        }

        return steps
}
