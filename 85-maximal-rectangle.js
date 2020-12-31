/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
 
    if (matrix === null || matrix.length === 0)  return 0 
  
    let grid = buildHistogram(matrix)
    
    let maxArea = 0 
    for(let row=0; row<grid.length; row++) {
         maxArea= Math.max(maxArea, calcRec(grid[row]))
    }
   
    return maxArea 
}

function calcRec(heights) {
   
  let stack=[-1] 
  
  let maxArea = 0 
  for(let i=0; i<heights.length; i++) {
      
      while(stack[stack.length-1]!== -1 && heights[stack[stack.length-1]] >= heights[i]) {
          let height= heights[stack.pop()]
          let width = i-1 - stack[stack.length-1]
          maxArea = Math.max(maxArea, height* width)
      }
      stack.push(i)
  }
   
   let n = heights.length
   while(stack.length>1) {
       let height = heights[stack.pop()]
       let width = n-1 - stack[stack.length-1]
      
       maxArea = Math.max(maxArea, height* width)
   }

   return maxArea
}


function buildHistogram(matrix) {
   
   let m = matrix.length 
   let n = matrix[0].length 
   
   let grid = new Array(m)
   for(let row=0; row<grid.length; row++) {
       grid[row] = new Array(n).fill(0)
   }
   
   for(let row=0;row<m; row++) {
       for(let col=0; col<n; col++) {
           if (row === 0) {
               grid[row][col]= parseInt(matrix[row][col])
           } else {
                let val =  parseInt(matrix[row][col])
                if (val=== 1) {
                     grid[row][col] = val+  grid[row-1][col]   
                }
               
           }
       } 
   }
   
   return grid 
}