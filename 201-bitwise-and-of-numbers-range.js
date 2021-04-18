/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var rangeBitwiseAnd = function(left, right) {
        let bits1 = getBits(left)
        let bits2= getBits(right)
        console.log('bits1', bits1)
        console.log('bits2', bits2)
        if (bits1.length !== bits2.length)  return 0

        let res= 0;
        for(let i=0; i<bits1.length; i++) {
            if (bits1[i] === bits2[i]) {
                 if (bits1[i] === 1) {
                         res+= Math.pow(2, bits1.length-1 - i)
                 }

            }
           else {
               break
           }
        }

        return res
  };


  function getBits(number) {
      let array=[]
      while(number>0){
           let temp = number%2
           if (temp === 0) {
                array.unshift(0)
           } else {
               array.unshift(1)
           }
          number = Math.floor(number /2)
      }

      return array
  }