/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
        let m = s.length
        let n = p.length
        s = '#' + s
        p = '#' + p
        let dp = new Array(m + 1)
        for (let i = 0; i < dp.length; i++) {
                dp[i] = new Array(n + 1).fill(false)
        }

        dp[0][0] = true
        for (let j = 1; j < n + 1; j++) {
                if (p[j] !== '*') break
                dp[0][j] = true
        }

        for (let i = 1; i < m + 1; i++) {
                for (let j = 1; j < n + 1; j++) {
                        if (s[i] === p[j] || p[j] === '?') {
                                dp[i][j] = dp[i - 1][j - 1]
                        } else if (p[j] === '*') {
                                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
                        }
                }
        }

        return dp[m][n]
}
