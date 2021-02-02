// mke die -- > live  2
// make live to die  3
function gameOfLife(board) {
        if (board === null || board.length === 0) return;

        let m = board.length;
        let n = board[0].length;
        for (let row = 0; row < m; row++) {
                for (let col = 0; col < n; col++) {
                        let lives = findNeighbourLives(row, col, board);
                        if (board[row][col] === 1) {
                                if (lives === 2 || lives === 3) {
                                        board[row][col] = 1;
                                } else {
                                        board[row][col] = 3;
                                }
                        } else {
                                if (lives === 3) {
                                        board[row][col] = 2;
                                } else {
                                        board[row][col] = 0;
                                }
                        }
                }
        }

        for (let row = 0; row < m; row++) {
                for (let col = 0; col < n; col++) {
                        if (board[row][col] === 3) {
                                board[row][col] = 0;
                        }
                        if (board[row][col] === 2) {
                                board[row][col] = 1;
                        }
                }
        }

        function findNeighbourLives(row, col, board) {
                let count = 0;
                count += getLife(row + 1, col, board);
                count += getLife(row - 1, col, board);
                count += getLife(row, col + 1, board);
                count += getLife(row, col - 1, board);
                count += getLife(row + 1, col + 1, board);
                count += getLife(row - 1, col - 1, board);
                count += getLife(row + 1, col - 1, board);
                count += getLife(row - 1, col + 1, board);

                return count;
        }

        function getLife(row, col, board) {
                if (row < 0 || row >= m || col < 0 || col >= n) return 0;
                if (board[row][col] === 1 || board[row][col] === 3) return 1;
                return 0;
        }
}
