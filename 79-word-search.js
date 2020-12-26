/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
        let m = board.length
        let n = board[0].length

        for (let row = 0; row < m; row++) {
                for (let col = 0; col < n; col++) {
                        if (dfs(row, col, 0)) {
                                return true
                        }
                }
        }

        return false

        function dfs(i, j, currentIndex) {
                if (i < 0 || j < 0 || i >= m || j >= n) return false

                if (board[i][j] === '') return false
                if (board[i][j] !== word[currentIndex]) return false

                if (currentIndex + 1 === word.length) {
                        return true
                }
                let temp = board[i][j]
                board[i][j] = ''
                let res =
                        dfs(i + 1, j, currentIndex + 1) ||
                        dfs(i - 1, j, currentIndex + 1) ||
                        dfs(i, j - 1, currentIndex + 1) ||
                        dfs(i, j + 1, currentIndex + 1)

                if (res === true) return true

                board[i][j] = temp

                return false
        }
}
