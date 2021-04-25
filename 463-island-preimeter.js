var islandPerimeter = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0)  {
         return 0
    }
    let res= 0
    let m = grid.length
    let n = grid[0].length
    for(let row=0; row<m; row++) {
        for(let col=0; col<n; col++) {
              if  (grid[row][col] === 1) {
                    res = res+4
                    if (row>0  && grid[row-1][col] === 1) {
                         res-=2
                    }

                    if (col>0 && grid[row][col-1] === 1) {
                        res-=2
                    }
              }
        }
    }

    return res

};