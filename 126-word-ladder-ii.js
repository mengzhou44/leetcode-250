/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function findLadders(beginWord, endWord, wordList) {
        let wordSet = new Set()
        for (let word of wordList) {
                wordSet.add(word)
        }
        if (!wordSet.has(endWord)) return []

        let map = new Map()
        let startSet = new Set()
        startSet.add(beginWord)

        bfs(startSet, endWord, map, wordSet)

        let ladders = []
        dfs(beginWord, [beginWord], map, endWord, ladders)
        return ladders
}

function bfs(startSet, endWord, map, wordSet) {
        let temp = new Set()
        let canFinish = false
        for (let word of startSet) {
                wordSet.delete(word)
        }

        for (let word of startSet) {
                if (word === endWord) {
                        canFinish = true
                } else {
                        let newWords = getNeighbourWords(word, wordSet)
                        for (item of newWords) {
                                if (!map.has(word)) {
                                        map.set(word, [])
                                }

                                map.get(word).push(item)
                                temp.add(item)
                        }
                }
        }
        if (canFinish === false && temp.size > 0) {
                bfs(temp, endWord, map, wordSet)
        }
}

function dfs(cur, path, map, endWord, ladders) {
        if (cur === endWord) {
                ladders.push([...path])
                return
        }

        if (!map.has(cur)) return

        for (let word of map.get(cur)) {
                path.push(word)
                dfs(word, path, map, endWord, ladders)
                path.pop()
        }
}

function getNeighbourWords(word, wordSet) {
        let res = []
        let array = word.split('')
        for (let i = 0; i < array.length; i++) {
                for (let ch of 'abcdefghijklmnopqrstuvwxyz') {
                        array[i] = ch
                        let newWord = array.join('')
                        if (wordSet.has(newWord)) {
                                res.push(newWord)
                        }
                }

                array[i] = word[i]
        }

        return res
}
