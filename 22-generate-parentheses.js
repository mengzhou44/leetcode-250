/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
        let res = []
        helper('', 0, 0)

        return res

        function helper(cur, open, close) {
                if (cur.length === 2 * n) {
                        res.push(cur)
                        return
                }

                if (close > open) return

                if (open < n) helper(cur + '(', open + 1, close)

                if (close < n) helper(cur + ')', open, close + 1)
        }
}
