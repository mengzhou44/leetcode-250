/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
        let count = 0
        let res
        let visited = new Array(n + 1).fill(false)
        dfs(visited)
        return res

        function dfs(visited, nums = []) {
                if (nums.length === n) {
                        count++
                        if (count === k) {
                                res = nums.join('')
                        }
                        return
                }
                for (let i = 1; i <= n; i++) {
                        if (visited[i] === false) {
                                visited[i] = true
                                nums.push(i)
                                dfs(visited, nums)
                                nums.pop()
                                visited[i] = false
                        }
                }
        }
}
