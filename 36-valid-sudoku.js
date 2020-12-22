/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
        let m = 9
        let n = 9

        for (let row = 0; row < m; row++) {
                if (isValid(row, 0, n - 1, row) === false) return false
        }

        for (let col = 0; col < n; col++) {
                if (isValid(0, col, col, m - 1) === false) return false
        }

        for (let k = 0; k < m; k++) {
                const [top, left, right, bottom] = getBoxBound(k)
                if (isValid(top, left, right, bottom) === false) return false
        }

        return true

        function getBoxBound(k) {
                let top = 3 * Math.floor(k / 3)
                let bottom = top + 2
                let left = 3 * (k % 3)
                let right = left + 2

                return [top, left, right, bottom]
        }

        function isValid(top, left, right, bottom) {
                let set = new Set()

                for (let i = top; i <= bottom; i++) {
                        for (let j = left; j <= right; j++) {
                                if (
                                        board[i][j] !== '.' &&
                                        set.has(board[i][j])
                                ) {
                                        return false
                                }
                                set.add(board[i][j])
                        }
                }

                return true
        }
}
