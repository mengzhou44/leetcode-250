function reverse(x) {
        let sign = 1
        if (x < 0) {
                sign = -1
                x = -x
        }
        let res = 0
        while (x > 0) {
                let temp = x % 10
                res = 10 * res + temp
                x = Math.floor(x / 10)
        }

        res = res * sign
        if (res > Math.pow(2, 31) - 1) return 0
        if (res < -Math.pow(2, 31)) return 0

        return res
}
