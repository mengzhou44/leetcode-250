function getFactors(n) {
     let res= []
     if (n <4)  return res

     dfs(n, 2)

     return res 
     
     function dfs (n, start, current=[]) {
        if  (n===1) {
            if (current.length>1) {
                res.push(current.slice())
            }
            return 
        }
        for(let i=start;  i<=n; i++) {
             if(n %i === 0) {
                current.push(i)
                dfs(n/i,i, current)
                current.pop()
             }
        }
     }
      
}


console.log(getFactors(12))