/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
        let res = []
        let line = []
        while (words.length > 0) {
                let word = words.shift()
                line.push(word)
                if (line.join(' ').length > maxWidth) {
                        line.pop()
                        res.push(justifyWords(line, maxWidth))
                        line = [word]
                }
        }

        let temp = line.join(' ')
        res.push(temp + createSpaces(maxWidth - temp.length))
        return res
}

function justifyWords(words, maxWidth) {
        if (words.length === 1) {
                return words[0] + createSpaces(maxWidth - words[0].length)
        }

        while (true) {
                for (let i = 0; i < words.length - 1; i++) {
                        words[i] = words[i] + ' '
                        if (words.join('').length === maxWidth) {
                                return words.join('')
                        }
                }
        }
}

function createSpaces(count) {
        return new Array(count).fill(' ').join('')
}
