function  groupStrings(strs){
     let res= [] 
     let map = new  Map()
     let temp=[]
     for(let str of strs) {
            if (str.length === 1) {
                temp.push(str)
            } else {
                let array=[]
                for(let i=1; i<str.length; i++) {
                     array.push((26+ str.charCodeAt(i) - str.charCodeAt(0))%26)
                }
                let key = array.join('')
                if (!map.has(key)) {
                    map.set(key, [])
                }
                map.get(key).push(str)
            }
     }

     res.push(temp)

     for(let key of map.keys()) {
         res.push(map.get(key))
     }
     return res 
} 

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]))