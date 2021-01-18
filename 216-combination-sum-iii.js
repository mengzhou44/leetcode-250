/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
        let res = [];
        if (k <= 0) return res;

        dfs(k, n, 1);

        return res;

        function dfs(k, target, i, current = []) {
                if (current.length > k || target < 0) return;

                if (target === 0 && current.length === k) {
                        res.push(current);
                }

                for (let j = i; j <= 9; j++) {
                        current.push(j);
                        dfs(k, target - j, j + 1, [...current]);
                        current.pop();
                }
        }
}
