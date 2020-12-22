/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
        if (n === 0) return 1
        if (n < 0) return 1 / myPow(x, -n)

        if (n === 1) return x

        let temp = myPow(x, Math.floor(n / 2))

        if (n % 2 == 0) {
                return temp * temp
        }

        return temp * temp * x
}
