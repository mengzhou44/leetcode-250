/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
        let wordSet = new Set();
        for (let word of wordDict) {
                wordSet.add(word);
        }

        let cache = new Map();

        return helper(0);

        function helper(start) {
                if (cache.has(start)) {
                        return cache.get(start);
                }

                let set = new Set();
                for (let i = start + 1; i <= s.length; i++) {
                        let word = s.substring(start, i);
                        if (wordSet.has(word)) {
                                let temp = helper(start + word.length);
                                for (let r of temp) {
                                        set.add(`${word} ${r}`);
                                }
                        }
                }

                let word = s.substring(start, start + s.length);
                if (wordSet.has(word)) {
                        set.add(word);
                }

                let res = Array.from(set);
                cache.set(start, res);
                return res;
        }
}
