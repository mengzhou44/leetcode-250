/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
        let stack = []

        let array = path.split('/')

        for (let i = 0; i < array.length; i++) {
                if (array[i] === '..') {
                        stack.pop()
                } else if (array[i] !== '.' && array[i] !== '') {
                        stack.push(array[i])
                }
        }

        return '/' + stack.join('/')
}
