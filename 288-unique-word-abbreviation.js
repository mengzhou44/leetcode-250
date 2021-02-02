class  UniqueWordAbbreviation {
        
    constructor(words) {
        this.map = new Map()
        for(let word of words)  {
            this.map.set(word, this.getAbb(word))
        }

        console.log(this.map)
    }

    getAbb(word) {
        if (word.length <3)  return word 

        return `${word[0]}${word.length -2}${word[word.length-1]}`
    }

    isUnique(word) {
        let abb= this.getAbb(word)
        for(let key of this.map.keys()) {
             if (key!== word && this.map.get(key)=== abb) {
                 return false 
             }
        }
        return true 
    }

}

let abbreviation = new UniqueWordAbbreviation([ "deer", "door", "cake", "card" ])

console.log(abbreviation.isUnique("dear"))

console.log(abbreviation.isUnique("door"))


console.log(abbreviation.isUnique("cake"))

console.log(abbreviation.isUnique("card"))
 