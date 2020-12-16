/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let len = s.length 
    let dp = new Array(len+1)
    for(let i=0; i<dp.length; i++) {
        dp[i] = new Array(len+1).fill(false)
    }
    let res= s[0]
    for(let i=0; i< len;i++) {
         dp[i][i] =true
         if (s[i] === s[i+1]) {
             dp[i][i+1] = true
             res=s[i] +s[i+1]
         }
    }
   
     for(let j=1; j<len; j++) {
          for(let i=0; i<=j; i++) {
              if (dp[i+1][j-1] && s[i] == s[j]) {
                  dp[i][j] = true    
                  if (j-i+1 >res.length) {
                       res = s.substring(i, j+1)
                  }
              }
          }
     }
    
    return res 
}
