/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
        let m = matrix.length
        let n = matrix[0].length
        let startRow = 0
        let endRow = m - 1

        let startCol = 0
        let endCol = n - 1

        let array = []

        while (startRow < endRow && startCol < endCol) {
                for (let i = startCol; i <= endCol; i++) {
                        array.push(matrix[startRow][i])
                }
                startRow++

                for (let i = startRow; i <= endRow; i++) {
                        array.push(matrix[i][endCol])
                }

                endCol--
                for (let i = endCol; i >= startCol; i--) {
                        array.push(matrix[endRow][i])
                }
                endRow--

                for (let i = endRow; i >= startRow; i--) {
                        array.push(matrix[i][startCol])
                }
                startCol++
        }

        if (startRow === endRow) {
                for (let col = startCol; col <= endCol; col++) {
                        array.push(matrix[startRow][col])
                }
        } else if (startCol === endCol) {
                for (let row = startRow; row <= endRow; row++) {
                        array.push(matrix[row][startCol])
                }
        }

        return array
}
