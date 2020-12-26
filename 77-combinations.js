function combine(n, k) {
        if (n === 0) return []
        if (k === 1) {
                let res = []
                for (let i = 1; i <= n; i++) {
                        res.push([i])
                }
                return res
        }

        let prev = combine(n - 1, k)
        for (let item of combine(n - 1, k - 1)) {
                prev.push([...item, n])
        }

        return prev
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
        if (n < k) return []

        let res = []
        dfs(1)

        return res

        function dfs(index, cur = []) {
                if (cur.length === k) {
                        res.push([...cur])
                        return
                }

                for (let i = index; i <= n; i++) {
                        cur.push(i)
                        dfs(i + 1, cur)
                        cur.pop()
                }
        }
}
