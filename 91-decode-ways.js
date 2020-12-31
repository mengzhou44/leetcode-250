/**
 * @param {string} s
 * @return {number}
 */
function  numDecodings(s) {
   
    if (s === null || s.length === 0)  return 0 
    let memo = new Map()
    return helper(0, s.split(''))

   
    function helper(index, array) {
        if (memo.has(index)) return memo.get(index)
        if (index === array.length)  return 1 
        let ways= 0 
        
        if (array[index]!== '0') {
            ways+= helper(index+1, array)
        }
        
        if (isValidEncoding(array,index)) {
             ways+= helper(index+2, array)
        }
        memo.set(index, ways)
        return ways 
   }
}

function isValidEncoding(array, index) {
     if (index+1 >= array.length) return false 
     if (array[index] === '1') return true 
     if (array[index] === '2' && '0123456'.includes(array[index+1])) return true 
     return  false 
}

***************

/**
 * @param {string} s
 * @return {number}
 */
function  numDecodings(s) {
   
    if (s === null || s.length === 0)  return 0 
    
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1 
    dp[1] = s[0] === '0'? 0 :1 
   
    for(let i=2; i<=s.length; i++) {
         if ('123456789'.includes(s[i-1])) {
             dp[i] = dp[i-1] 
         }
         if (isValidEncoding(s, i-2)) {
              dp[i]+=dp[i-2] 
         }
    }
   
   return dp[s.length]
}

function isValidEncoding(s, index) {
     if (index+1 >= s.length) return false 
     if (s[index] === '1') return true 
     if (s[index] === '2' && '0123456'.includes(s[index+1])) return true 
     return  false 
}
