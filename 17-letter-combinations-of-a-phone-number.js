/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
        let map = new Map()
        map.set('1', [])
        map.set('2', ['a', 'b', 'c'])
        map.set('3', ['d', 'e', 'f'])
        map.set('4', ['g', 'h', 'i'])
        map.set('5', ['j', 'k', 'l'])
        map.set('6', ['m', 'n', 'o'])
        map.set('7', ['p', 'q', 'r', 's'])
        map.set('8', ['t', 'u', 'v'])
        map.set('9', ['w', 'x', 'y', 'z'])

        return combine(digits)

        function combine(digits) {
                if (digits.length === 0) return []
                if (digits.length === 1) return map.get(digits[0])

                let last = digits[digits.length - 1]
                let temp = combine(digits.substring(0, digits.length - 1))

                let result = []
                for (let ch of map.get(last)) {
                        for (let item of temp) {
                                result.push(item + ch)
                        }
                }
                return result
        }
}
