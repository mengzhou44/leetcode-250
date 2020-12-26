/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
        let carry = 1
        for (let i = digits.length - 1; i >= 0; i--) {
                let val = digits[i] + carry

                if (val < 10) {
                        digits[i] = val
                        carry = 0
                        break
                } else {
                        digits[i] = val % 10
                        carry = 1
                }
        }

        if (carry === 1) {
                digits.unshift(1)
        }

        return digits
}
