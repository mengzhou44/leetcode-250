function nthUglyNumber(n) {
      let res = [1]
      let a=0 
      let b=0
      let c=0 

      for(let i=0; i<n; i++) {
          let num =Math.min(res[a]*2, res[b]*3, res[c]*5)
          if (num === res[a]*2) a++
          if (num === res[b]*3) b++
          if (num === res[c]*5) c++
          res.push(num)
      }

      return res[n-1]

}

console.log(nthUglyNumber(10))