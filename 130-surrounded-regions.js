/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
        if (board === null || board.length == 0) return;

        let m = board.length;
        let n = board[0].length;

        for (let i = 0; i < m; i++) {
                dfs(i, 0);
                dfs(i, n - 1);
        }

        for (let j = 0; j < n; j++) {
                dfs(0, j);
                dfs(m - 1, j);
        }

        for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                        if (board[i][j] === 'O') {
                                board[i][j] = 'X';
                        }
                        if (board[i][j] === 'A') {
                                board[i][j] = 'O';
                        }
                }
        }

        function dfs(row, col) {
                if (row < 0 || row > m - 1 || col < 0 || col > n - 1) {
                        return;
                }

                if (board[row][col] !== 'O') return;

                board[row][col] = 'A';
                dfs(row + 1, col);
                dfs(row - 1, col);
                dfs(row, col + 1);
                dfs(row, col - 1);
        }
}
