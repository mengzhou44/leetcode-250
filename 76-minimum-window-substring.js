/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
        if (s.length < t.length) return ''

        let map = createMap(t)
        let mapSize = map.size
        let slow = 0
        let matchCount = 0
        let minLength = Number.MAX_SAFE_INTEGER
        let index = 0
        for (let fast = 0; fast < s.length; fast++) {
                if (!map.has(s[fast])) continue

                let count = map.get(s[fast])
                map.set(s[fast], count - 1)
                if (count === 1) {
                        matchCount++
                }

                while (matchCount === mapSize) {
                        if (fast + 1 - slow < minLength) {
                                minLength = fast + 1 - slow
                                index = slow
                        }

                        if (map.has(s[slow])) {
                                let count = map.get(s[slow])
                                if (count === 0) {
                                        matchCount--
                                }
                                map.set(s[slow], count + 1)
                        }
                        slow++
                }
        }

        if (minLength === Number.MAX_SAFE_INTEGER) return ''

        return s.substring(index, index + minLength)
}

function createMap(t) {
        let map = new Map()

        for (let ch of t) {
                if (!map.has(ch)) {
                        map.set(ch, 0)
                }
                map.set(ch, map.get(ch) + 1)
        }
        return map
}
