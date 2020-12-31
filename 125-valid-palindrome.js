/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
        let array = s
                .split('')
                .filter((ch) => isAlphanumeric(ch))
                .map((ch) => ch.toLowerCase())

        let left = 0
        let right = array.length - 1

        while (left < right) {
                if (array[left] !== array[right]) {
                        return false
                }

                left++
                right--
        }

        return true
}

function isAlphanumeric(ch) {
        return '0123456789abcdefghijklmnopqrstuvwxyz'.includes(ch.toLowerCase())
}
