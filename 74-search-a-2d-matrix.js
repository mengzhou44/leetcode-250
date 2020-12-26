/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
        let m = matrix.length
        let n = matrix[0].length

        let left = 0
        let right = m * n - 1

        while (left <= right) {
                mid = left + Math.floor((right - left) / 2)
                let val = getByIndex(mid, matrix)

                if (val === target) {
                        return true
                } else if (val > target) {
                        right = mid - 1
                } else {
                        left = mid + 1
                }
        }

        return false
}

function getByIndex(index, matrix) {
        let n = matrix[0].length
        let x = Math.floor(index / n)
        let y = index % n
        return matrix[x][y]
}
