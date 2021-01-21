function alienOrders(words) {
    let indegrees = new Array(26).fill(0)
    let graph = buildGraph(words)
    let queue=[]
    let order= []
    for(let i=0; i<indegrees.length; i++) {
         if (indegrees[i] === 0) {
           queue.push(getLetterByIndex(i))
         }
    }

     while(queue.length>0) {
           let letter = queue.shift()
           if (graph.has(letter)) {
               order.push(letter)
               for(let ch of graph.get(letter)) {
                   let index= getLetterIndex(ch)
                   indegrees[index]--
                   if (indegrees[index] === 0) {
                       queue.push(ch)
                   }
               }
            }
     }

     return order

     function buildGraph(words) {
        let map = new Map()
        for(let i=1; i<words.length; i++) {
              let firstWord = words[i-1] 
              let secondWord = words[i]
              let index= 0 
              let length = Math.min(firstWord.length, secondWord.length)
              while(index<length) {
                   if (firstWord[index]!== secondWord[index]) {
                        let letterIndex= getLetterIndex(secondWord[index])
                        indegrees[letterIndex]++
                        if (!map.has(firstWord[index])) {
                            map.set(firstWord[index], new Set())
                        }
                        if (!map.has(secondWord[index])) {
                            map.set(secondWord[index], new Set())
                        }
                        map.get(firstWord[index]).add(secondWord[index])
                        break;
                   }
                   index++
              }
        }
        return map 
    }

    function getLetterIndex(ch) {
         return ch.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    function getLetterByIndex(index) {
         let charCode = index+ 'a'.charCodeAt(0)
         return String.fromCharCode(charCode)
    }
}

console.log(alienOrders([
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
  ]))
