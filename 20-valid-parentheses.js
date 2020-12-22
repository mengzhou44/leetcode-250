/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
        let stack = []
        let map = new Map()
        map.set('(', ')')
        map.set('[', ']')
        map.set('{', '}')

        for (let ch of s) {
                if ('([{'.includes(ch)) {
                        stack.push(ch)
                } else {
                        if (stack.length === 0) return false
                        let temp = stack.pop()

                        if (map.get(temp) !== ch) {
                                return false
                        }
                }
        }

        return stack.length === 0
}
