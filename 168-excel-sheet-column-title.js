/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n) {
        let temp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let array = [];
        while (n > 0) {
                let i = (n - 1) % 26;
                array.unshift(temp[i]);
                n = Math.floor((n - 1) / 26);
        }
        return array.join('');
}
