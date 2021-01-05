/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
        let map = new Map()

        let maxLength = 0
        for (let num of nums) {
                let [lower, upper] = getBounds(map, num)
                let length = upper - lower + 1
                maxLength = Math.max(maxLength, length)
                map.set(lower, length)
                map.set(upper, length)
                map.set(num, 1)
        }

        return maxLength
}

function getBounds(map, num) {
        let lowerBound = num
        let rightBound = num
        while (map.has(lowerBound - 1)) {
                lowerBound--
        }

        while (map.has(rightBound + 1)) {
                rightBound++
        }

        return [lowerBound, rightBound]
}

***********

function longestConsecutive(nums) {
        let numsSet = new Set()
        for (let num of nums) {
                numsSet.add(num)
        }
        let res = 0
        for (let num of nums) {
                if (!numsSet.has(num)) continue

                numsSet.delete(num)

                let left = num - 1
                let right = num + 1

                while (numsSet.has(left)) {
                        numsSet.delete(left)
                        left--
                }

                while (numsSet.has(right)) {
                        numsSet.delete(right)
                        right++
                }

                res = Math.max(res, right - left - 1)
        }

        return res
}
