function shortestDistance(words, word1, word2){

   let word1Pos=[] 
   let word2Pos =[]
   for(let i=0; i<words.length; i++) {
        if (words[i] === word1) {
            word1Pos.push(i)
        }
        if (words[i] === word2) {
            word2Pos.push(i)
        }
   }
   let res = Number.MAX_SAFE_INTEGER
  for(let pos1 of word1Pos) {
      for(let pos2 of word2Pos) {
         res = Math.min(res, Math.abs(pos2-pos1))
      }
  }
  return res 
}

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], 'coding', 'practice'))
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], 'coding', 'makes'))
