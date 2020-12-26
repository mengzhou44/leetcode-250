function mySqrt(x) {
        if (x < 2) return x

        let left = 1
        let right = x
        while (left <= right) {
                let mid = left + Math.floor((right - left) / 2)
                if (mid * mid === x) return mid
                if (mid * mid > x) {
                        right = mid - 1
                } else {
                        left = mid + 1
                }
        }

        return right
}
