function wordPatternMatch(pattern, s) {
     
     helper(0,)

     function helper(cur, start, end,  map = new Map()) {
         
        let word = s.substring(start, end)
        
        if (map.has(pattern[cur])) {
            for(let key of map.keys()) {
                if (key === pattern[cur]) {
                     if (map.get(key)!== word)  return false 
                } else {
                    if (map.get(key) === word)  return false 
                }
            }
            return true  
        }  else {
             let values = Array.from(map.values())
             if (values.includes(word)) {
                 return false 
             }
             return true 
        }

        if (end === s.length) {
            
         }
          
         
     }


}