/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
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

        let result = []
        for (let key of map.keys()) {
                let val = map.get(key)
                let count = Math.floor(num / val)
                num = num - count * val
                createSymbols(key, count)
        }

        return result.join('')

        function createSymbols(key, count) {
                for (let i = 0; i < count; i++) {
                        result.push(key)
                }
        }
}
