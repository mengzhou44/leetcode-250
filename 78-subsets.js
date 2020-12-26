/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
        if (nums.length === 0) return []
        if (nums.length === 1) return [[], nums]
        let last = nums.pop()

        let prev = subsets(nums)
        let res = [...prev]

        for (let item of prev) {
                res.push([...item, last])
        }

        return res
}
