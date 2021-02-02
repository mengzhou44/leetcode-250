function knows(a, b) {

}


function findCelebrity(n) {
    let array = new Array(n).fill(true)

    for(let i=0; i<n; i++) {
         for(let j=i+1; j<n; j++) {
             if (knows(i, j)) {
                 array[i] = false 
                 break
             }
             if (knows(j, i)) {
                 array[j]= false 
             }
         }
         if (array[i] === true)  return i  
    }
    return -1 
}


function findCelebrity(n) {
    let res = 0 
    for(let i=1; i<n; i++) {
        if (knows(res, i)) {
            res= i 
        }
    }

    for(let i= 0; i<n; i++) {
         if (i === res)  continue 
         if (!knows(i, res) || knows(res,i)) {
             return -1 
         }
    }
    return res 
}

