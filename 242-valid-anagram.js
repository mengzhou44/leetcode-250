/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
        let map = new Map();
        for (let ch of s) {
                if (!map.has(ch)) {
                        map.set(ch, 0);
                }
                map.set(ch, map.get(ch) + 1);
        }

        for (let ch of t) {
                if (!map.has(ch)) return false;
                let count = map.get(ch) - 1;
                if (count === 0) {
                        map.delete(ch);
                } else {
                        map.set(ch, count);
                }
        }

        return map.size === 0;
};
