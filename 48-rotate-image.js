/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
        let n = matrix.length
        let m = Math.floor(n / 2)

        for (let i = 0; i < m; i++) {
                for (let j = i; j < n - i - 1; j++) {
                        let temp = matrix[i][j]

                        matrix[i][j] = matrix[n - 1 - j][i]
                        matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
                        matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
                        matrix[j][n - 1 - i] = temp
                }
        }
}
