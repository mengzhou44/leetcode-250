/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
        let count = 0
        dfs(0, [])
        return count

        function dfs(row, cur) {
                if (cur.length === n) {
                        count = count + 1
                        return
                }

                if (row.length === n) return
                for (let col = 0; col < n; col++) {
                        if (!isInAttack(row, col, cur)) {
                                cur.push([row, col])
                                dfs(row + 1, [...cur])
                                cur.pop()
                        }
                }
        }

        function isInAttack(row, col, cur) {
                for (let [x, y] of cur) {
                        if (
                                row === x ||
                                col === y ||
                                Math.abs(row - x) === Math.abs(col - y)
                        )
                                return true
                }

                return false
        }
}
