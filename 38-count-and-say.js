/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
        let res = '1'
        if (n === 1) return res

        for (let i = 2; i <= n; i++) {
                let cur = res[0]
                let count = 1
                let temp = ''
                for (let i = 1; i < res.length; i++) {
                        if (res[i] === cur) {
                                count++
                        } else {
                                temp += count
                                temp += cur
                                cur = res[i]
                                count = 1
                        }
                }

                temp += count
                temp += cur

                res = temp
        }

        return res
}
