 /**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    let sign = 1 
    if (dividend >0 && divisor <0) {
         sign = -1 
    }
    
    else if (dividend < 0 && divisor >0) {
         sign = -1 
    }
  
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
  
    let res= helper(dividend, divisor) * sign 
    
    if (res>Math.pow(2,31) -1) return  Math.pow(2,31) -1
  
    if (res<= -Math.pow(2,31)) return  -Math.pow(2,31)
  
    return res     
}


function helper(dividend, divisor) {
    if (dividend <divisor)  return 0 
    
    let sum = divisor 
    let multiple = 1 
    while((sum+sum)<dividend) {
         sum += sum 
         multiple+= multiple
    }
    return multiple+ helper(dividend- sum , divisor)
}
