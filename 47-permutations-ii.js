function permuteUnique(nums) {
        if (nums.length < 2) return [nums]
        nums = nums.sort((a, b) => a - b)

        let visited = new Array(nums.length).fill(false)
        let res = []
        dfs(visited, [])

        return res

        function dfs(visited, cur) {
                if (cur.length === nums.length) {
                        res.push(cur)
                } else {
                        for (let i = 0; i < nums.length; i++) {
                                if (visited[i] === true) continue
                                if (
                                        i > 0 &&
                                        nums[i] === nums[i - 1] &&
                                        visited[i - 1] === true
                                )
                                        continue
                                visited[i] = true
                                cur.push(nums[i])
                                dfs(visited, [...cur])
                                cur.pop()
                                visited[i] = false
                        }
                }
        }
}
