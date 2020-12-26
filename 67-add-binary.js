function  addBinary(a, b) {
     
    let carry = 0 
    let cur1= a.length-1 
    let cur2 = b.length-1 
    let res=[]
    while(cur1>=0 || cur2>=0) {
        let sum= carry 
        if (cur1>=0) {
             sum+= parseInt(a[cur1]) 
             cur1--
        }
        if (cur2>=0) {
            sum+= parseInt(b[cur2])
            cur2--
        }
       
        res.unshift(sum%2)
        carry = Math.floor(sum/2) 
    }
    
    if (carry ===1) {
         res.unshift(1)
    }
  
    return res.join('')
}