/**
 * @param {string} input
 * @return {number[]}
 */
function diffWaysToCompute(input) {
        let cache = new Map();
        return computeWays(input);

        function computeWays(input) {
                if (cache.has(input)) return cache.get(input);

                let res = [];
                for (let i = 0; i < input.length; i++) {
                        let op = input[i];
                        if (op === '+' || op === '-' || op === '*') {
                                let l = computeWays(input.substring(0, i));
                                let r = computeWays(input.substring(i + 1));
                                for (let a of l) {
                                        for (let b of r) {
                                                switch (op) {
                                                        case '+':
                                                                res.push(a + b);
                                                                break;
                                                        case '-':
                                                                res.push(a - b);
                                                                break;
                                                        default:
                                                                res.push(a * b);
                                                }
                                        }
                                }
                        }
                }

                if (res.length === 0) {
                        res.push(parseInt(input));
                }

                cache.set(input, res);

                return res;
        }
}
