/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
        if (nums === null || nums.length === 0) return []

        if (nums.length == 1) return [[], nums]

        nums = nums.sort((a, b) => a - b)

        let res = []
        dfs(0)

        return res

        function dfs(index, cur = []) {
                res.push(cur)
                for (let i = index; i < nums.length; i++) {
                        if (i > index && nums[i] === nums[i - 1]) continue
                        cur.push(nums[i])
                        dfs(i + 1, [...cur])
                        cur.pop()
                }
        }
}
