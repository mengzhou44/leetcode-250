var multiply = function (num1, num2) {
        let array1 = convertToArray(num1)
        let array2 = convertToArray(num2)

        let res = 0
        let carry = 0
        while (array2.length > 0) {
                let val = array2.pop()
                let sum = 0
                for (let i = array1.length - 1; i >= 0; i--) {
                        let product = carry + array1[i] * val
                        sum = ((10 * product) % 10) + sum
                        carry = Math.floor(product / 10)
                }
                res = 10 * res + sum
        }
        if (carry !== 0) {
                return carry.toString() + res.toString()
        }

        return res.toString()
}

function convertToArray(num) {
        return num.split('').map((item) => parseInt(item))
}
