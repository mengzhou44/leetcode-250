/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
        let map = new Map();

        let words = s.split(' ');
        if (words.length !== pattern.length) return false;
        for (let i = 0; i < pattern.length; i++) {
                if (map.has(pattern[i])) {
                        if (map.get(pattern[i]) !== words[i]) return false;
                } else {
                        let values = Array.from(map.values());
                        if (values.includes(words[i])) return false;
                        map.set(pattern[i], words[i]);
                }
        }

        return true;
}
