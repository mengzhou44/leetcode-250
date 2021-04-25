// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

// For example, given the 2D grid:

// INF  -1  0  INF
// INF INF INF  -1
// INF  -1 INF  -1
//   0  -1 INF INF
// After running your function, the 2D grid should be:

//   3  -1   0   1
//   2   2   1  -1
//   1  -1   2  -1
//   0  -1   3   4

function wallsAndGates(rooms){
      let m = rooms.length
      let n = rooms[0].length
      for(let row=0; row<m; row++) {
         for(let col=0; col<n; col++) {
              if (rooms[row][col] === '0') {
                 bfs(row,col)
              }
         }
      }

      console.log(rooms)

      function bfs(startRow,startCol, visited= new Set()) {
         let array=[[startRow,startCol]]
         let level=1
         while(array.length>0) {
              let levelSize = array.length
              let count = 0

              while(count<levelSize) {
                   let [row, col] = array.shift()

                   if (visited.has(`${row},${col}`)) {
                       count++
                       continue
                   }
                   visited.add(`${row},${col}`)
                   updateRoomDistance(array, row+1, col, level)
                   updateRoomDistance(array, row-1, col, level)
                   updateRoomDistance(array, row, col+1, level)
                   updateRoomDistance(array, row, col-1, level)
                   count++
              }

              level++
         }
      }

      function updateRoomDistance(array, row, col, level) {
        if (isInBound(row, col) &&
            rooms[row][col] !== '-1'  &&
            rooms[row][col] !== '0')  {
                if (rooms[row][col]  === 'INF') {
                    rooms[row][col] = level
                } else{
                    rooms[row][col] = Math.min(rooms[row][col], level)
                }

                array.push([row,col])
            }
      }


      function isInBound(row, col) {
          return row<m&& row>=0  && col<n && col>=0
     }
}



// function  wallsAndGates(rooms) {
//       let m = rooms.length
//       let n = rooms[0].length

//       for(let row=0; row<m; row++) {
//           for(let col=0; col<n; col++) {
//                if (rooms[row][col] === '0') {
//                     dfs(row,col)
//                }
//           }
//       }
//       console.log(rooms)

//       function dfs(row, col, count=0, visited= new Set()) {
//            if (row<0 || row>=m || col<0 || col>=n)  return
//            if (rooms[row][col] === '-1')  return

//            if (visited.has(`${row},${col}`)) return
//            visited.add(`${row},${col}`)

//            if (rooms[row][col] !== '0') {
//             if (rooms[row][col] === 'INF') {
//                 rooms[row][col] = count
//                } else {
//                    rooms[row][col] = Math.min( rooms[row][col], count)
//                }
//            }

//            dfs(row+1,col,count+1, visited)
//            dfs(row-1,col,count+1, visited)
//            dfs(row,col+1,count+1, visited)
//            dfs(row,col-1,count+1, visited)

//       }
// }


let rooms = [
    ['INF', '-1', '0', 'INF'],
    ['INF', 'INF', 'INF', '-1'],
    ['INF', '-1', 'INF', '-1'],
    ['0', '-1', 'INF', 'INF']
]

wallsAndGates(rooms)



// function wallsAndGates(rooms) {
//     let m =  rooms.length
//     let n =  rooms[0].length

//     for (let row =0; row<m; row++) {
//         for(let col = 0; col<n; col++) {
//             if (rooms[row][col] === '0') {
//                  dfs(row,col)
//             }
//         }
//     }

//     console.log(rooms)

//      function dfs(row,col, count=0, visited=new Set()) {

//           if (row>=m || row<0 || col>=n|| col<0) {
//               return
//           }
//           if (rooms[row][col]=== '-1') {
//               return
//           }

//           if (visited.has(`${row}, ${col}`)) {
//               return
//           }
//           visited.add(`${row}, ${col}`)

//           if (rooms[row][col] !== '0') {
//             if (rooms[row][col] === 'INF') {
//                 rooms[row][col] = count
//             } else {
//               rooms[row][col] = Math.min(rooms[row][col], count)
//             }
//           }

//           dfs(row+1, col, count+1, visited)
//           dfs(row-1, col, count+1, visited)
//           dfs(row, col+1, count+1, visited)
//           dfs(row, col-1, count+1,visited)
//      }
// }

