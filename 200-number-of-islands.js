/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let count = 0;
        for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                        if (grid[i][j] === '1') {
                                dfs(i, j);
                                count++;
                        }
                }
        }

        return count;

        function dfs(i, j) {
                if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
                        return;
                }

                if (grid[i][j] === '0') return;

                grid[i][j] = '0';

                dfs(i + 1, j);
                dfs(i - 1, j);
                dfs(i, j + 1);
                dfs(i, j - 1);
        }
}
