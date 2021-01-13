/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
        let array = new Array(n).fill(false);

        array[0] = true;
        array[1] = true;
        for (let i = 2; i < array.length; i++) {
                for (let j = i; j < array.length; j = j + i) {
                        if (j + i < array.length) {
                                array[j + i] = true;
                        }
                }
        }

        return array.filter((item) => item === false).length;
}
