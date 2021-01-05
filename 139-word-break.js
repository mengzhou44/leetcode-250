/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
        let n = s.length + 1;
        let dp = new Array(n).fill(false);
        dp[0] = true;

        for (let i = 0; i < n; i++) {
                if (dp[i] === false) continue;
                for (let word of wordDict) {
                        if (word === s.substring(i, i + word.length)) {
                                dp[i + word.length] = true;
                        }
                }
        }

        return dp[n - 1];
}
