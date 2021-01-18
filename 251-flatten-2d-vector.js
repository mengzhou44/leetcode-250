
class Vector2D{
    constructor(arrays) {
       this.arrays= arrays
       this.x= 0 
       this.y=0
    }


    next(){
       let val = this.arrays[this.x][this.y]  
       this.y=  (this.y+1) %this.arrays[this.x].length
       this.x=  this.y === 0? this.x+1: this.x  
       return val
    }

     hasNext() {
        return this.x < this.arrays.length
     }
}

let vector2D= new Vector2D(
    [
        [1,2],
        [3],
        [4,5,6]
     ]
)

while(vector2D.hasNext()) {
    console.log(vector2D.next())
}