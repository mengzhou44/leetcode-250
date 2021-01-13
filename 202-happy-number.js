/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
    if (n===1)  return true 
    let array=[n] 
    while(true) {
        let  temp = 0 
         while(n>0) {
            temp += (n%10) * (n%10)
            n= Math.floor(n/10)
        }
        if (array.includes(temp))  return false 

        if (temp ===1)  return true 
        n=temp 
        array.push(temp)
    }        

}