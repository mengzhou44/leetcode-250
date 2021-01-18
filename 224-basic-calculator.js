/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
        let index = 0;
        let stack = [];
        while (index < s.length) {
                if (s[index] === ' ') {
                        index++;
                        continue;
                } else if (isDigit(s[index])) {
                        let pos = index;
                        while (isDigit(s[index])) {
                                index++;
                        }
                        stack.push(parseInt(s.substring(pos, index)));
                } else if ('(+-'.includes(s[index])) {
                        stack.push(s[index]);
                        index++;
                } else {
                        let array = [];
                        while (stack[stack.length - 1] !== '(') {
                                array.unshift(stack.pop());
                        }
                        stack.pop();
                        let temp = calc(array);
                        stack.push(temp);
                        index++;
                }
        }

        return calc(stack);
}

function isDigit(ch) {
        return '0123456789'.includes(ch);
}

function calc(array) {
        if (array[0] === '-') {
                array.unshift(0);
        }
        let sum = array.shift();
        while (array.length > 0) {
                let op = array.shift();
                let val = array.shift();
                if (op === '+') {
                        sum += val;
                } else {
                        sum -= val;
                }
        }
        return sum;
}
