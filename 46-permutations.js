/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
        if (nums.length === 0 || nums.length === 1) return [nums]
        let result = []
        helper([])
        return result

        function helper(cur) {
                if (cur.length === nums.length) {
                        result.push(cur)
                } else {
                        for (let num of nums) {
                                if (!cur.includes(num)) {
                                        cur.push(num)
                                        helper([...cur])
                                        cur.pop()
                                }
                        }
                }
        }
}
