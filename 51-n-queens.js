/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
        let temp = []
        dfs(0, [])

        let result = []
        for (let queens of temp) {
                let board = []
                for (let i = 0; i < n; i++) {
                        let row = ''
                        for (let j = 0; j < n; j++) {
                                let found = queens.find(
                                        ([x, y]) => x === i && y == j
                                )
                                if (found !== undefined) {
                                        row += 'Q'
                                } else {
                                        row += '.'
                                }
                        }
                        board.push(row)
                }

                result.push(board)
        }

        return result
        function dfs(row, cur) {
                if (cur.length === n) {
                        temp.push(cur)
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
