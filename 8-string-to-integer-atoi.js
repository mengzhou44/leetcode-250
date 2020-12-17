function myAtoi(s) {
        if (s.length === 0) return 0

        let sign = 1
        let res = 0
        let i = 0

        while (i < s.length && s[i] === ' ') {
                i++
        }
        if (s[i] === '+') {
                i++
        } else if (s[i] === '-') {
                i++
                sign = -1
        }

        while (i < s.length) {
                let ch = s[i]
                if (
                        ch === ' ' ||
                        ch === '+' ||
                        isLetter(ch) ||
                        ch === '-' ||
                        ch === '.'
                ) {
                        break
                }

                res = 10 * res + parseInt(ch)
                i++
        }

        const maxInteger = Math.pow(2, 31) - 1
        const minInteger = -Math.pow(2, 31)

        res = res * sign
        if (res > maxInteger) return maxInteger
        if (res < minInteger) return minInteger

        return res
}

function isLetter(ch) {
        return 'abcdefghijklmnopqrstuvwxyz'.includes(ch)
}
