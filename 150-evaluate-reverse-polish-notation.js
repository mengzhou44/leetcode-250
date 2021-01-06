/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
                if (!'+-*/'.includes(token)) {
                        stack.push(parseInt(token));
                } else {
                        let second = stack.pop();
                        let first = stack.pop();
                        stack.push(calc(first, second, token));
                }
        }

        return stack[0];
}

function calc(a, b, operand) {
        switch (operand) {
                case '+':
                        return a + b;
                case '-':
                        return a - b;
                case '*':
                        return a * b;
                default:
                        return Math.trunc(a / b);
        }
}
