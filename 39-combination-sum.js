/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
        let result = []
        candidates = candidates.sort((a, b) => a - b)
        dfs(0, target)

        return result

        function dfs(index, target, cur = []) {
                if (target === 0) {
                        result.push(cur)
                        return
                } else {
                        for (let i = index; i < candidates.length; i++) {
                                if (candidates[i] > target) return
                                cur.push(candidates[i])
                                dfs(i, target - candidates[i], [...cur])
                                cur.pop()
                        }
                }
        }
}
