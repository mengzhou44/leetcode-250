function stepIterator(start, step) {
    let cur = start 
    function count() {
        cur+=step
        console.log(cur)
    }
    return count
}

let stepOfTwo = stepIterator(0,2)
stepOfTwo()
stepOfTwo()
stepOfTwo()

let temp = [2,4,3,5]
let filtered = temp.filter(
    (item, index, array)=> {
     
     return  item%2 === 0 
})


let result = [2,3,4,5].reduce((sum,item)=> sum+item, 0 )
console.log(result)


function sum() {
    return Array.from(arguments).reduce((sum, item)=> sum+item, 0)
}

function findLargest(nums){
    return nums.reduce((max,num)=> Math.max(max, num), Number.MIN_SAFE_INTEGER)
}

console.log(findLargest([12,34,2]))