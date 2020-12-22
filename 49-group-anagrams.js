/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
        let map = new Map()

        for (let str of strs) {
                let key = createKey(str)

                if (!map.has(key)) {
                        map.set(key, [])
                }

                map.get(key).push(str)
        }

        return Array.from(map.values())
}

function createKey(str) {
        return str.split('').sort().join('')
}
