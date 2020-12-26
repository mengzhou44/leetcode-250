/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
        let matrix = new Array(n)
        for (let i = 0; i < matrix.length; i++) {
                matrix[i] = new Array(n)
        }

        let startRow = 0
        let endRow = n - 1
        let startCol = 0
        let endCol = n - 1

        let num = 1
        while (startRow < endRow && startCol < endCol) {
                for (let col = startCol; col <= endCol; col++) {
                        matrix[startRow][col] = num++
                }

                startRow++
                for (let row = startRow; row <= endRow; row++) {
                        matrix[row][endCol] = num++
                }

                endCol--
                for (let col = endCol; col >= startCol; col--) {
                        matrix[endRow][col] = num++
                }

                endRow--
                for (let row = endRow; row >= startRow; row--) {
                        matrix[row][startCol] = num++
                }
                startCol++
        }

        if (startRow === endRow && startCol === endCol) {
                matrix[startRow][startCol] = num
        }

        return matrix
}
