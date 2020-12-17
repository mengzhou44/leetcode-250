/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        let map = new Map()
        map.set('M', 1000)
        map.set('CM', 900)
        map.set('D', 500)
        map.set('CD', 400)
        map.set('C', 100)
        map.set('XC', 90)
        map.set('L', 50)
        map.set('XL', 40)
        map.set('X', 10)
        map.set('IX', 9)
        map.set('V', 5)
        map.set('IV', 4)
        map.set('I', 1)

        let result = 0
        let i = 0
        while (i < s.length) {
                if (i + 1 < s.length) {
                        let temp = s[i] + s[i + 1]
                        if (map.has(temp)) {
                                result += map.get(temp)
                                i = i + 2
                                continue
                        }
                }

                result += map.get(s[i])
                i++
        }

        return result
}
