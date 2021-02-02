function wallsAndGates(rooms) {
    let m =  rooms.length  
    let n =  rooms[0].length
   
    for (let row =0; row<m; row++) {
        for(let col = 0; col<n; col++) {
            if (rooms[row][col] === '0') {
                 dfs(row,col)
            }
        }
    }
    
    console.log(rooms)

     function dfs(row,col, count=0, visited=new Set()) {
    
          if (row>=m || row<0 || col>=n|| col<0) {
              return 
          }
          if (rooms[row][col]=== '-1') {
              return 
          }

          if (visited.has(`${row}, ${col}`)) {
              return
          }
          visited.add(`${row}, ${col}`) 

          if (rooms[row][col] !== '0') {
            if (rooms[row][col] === 'INF') {
                rooms[row][col] = count
            } else {
              rooms[row][col] = Math.min(rooms[row][col], count)
            }
          }
         
          dfs(row+1, col, count+1, visited)
          dfs(row-1, col, count+1, visited)
          dfs(row, col+1, count+1, visited)
          dfs(row, col-1, count+1,visited)
     }
}

let rooms = [
    ['INF', '-1', '0', 'INF'],
    ['INF', 'INF', 'INF', '-1'],
    ['INF', '-1', 'INF', '-1'],
    ['0', '-1', 'INF', 'INF']
]

wallsAndGates(rooms)