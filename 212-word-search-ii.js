/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
        if (board === null || board.length === null) return [];

        let res = [];

        for (let word of words) {
                if (searchWord(word, board) === true) {
                        res.push(word);
                }
        }

        return res;
}

function searchWord(word, board) {
        let m = board.length;
        let n = board[0].length;

        for (let i = 0; i < m; i++) {
                for (j = 0; j < n; j++) {
                        if (dfs(i, j, 0)) {
                                resetBoard(board);
                                return true;
                        }
                }
        }

        return false;

        function dfs(i, j, index) {
                if (i < 0 || i > m - 1 || j < 0 || j > n - 1) return false;
                if (board[i][j] === board[i][j].toUpperCase()) return false;

                if (board[i][j] !== word[index]) return false;

                if (index === word.length - 1) return true;

                board[i][j] = board[i][j].toUpperCase();

                if (
                        dfs(i, j + 1, index + 1) ||
                        dfs(i, j - 1, index + 1) ||
                        dfs(i + 1, j, index + 1) ||
                        dfs(i - 1, j, index + 1)
                ) {
                        return true;
                }

                board[i][j] = board[i][j].toLowerCase();
                return false;
        }
}

function resetBoard(board) {
        let m = board.length;
        let n = board[0].length;

        for (let i = 0; i < m; i++) {
                for (j = 0; j < n; j++) {
                        board[i][j] = board[i][j].toLowerCase();
                }
        }
}
