function wiggleSort(nums) {
    nums = nums.sort((a,b)=> a-b)

    let left = nums.slice(0,Math.floor(nums.length/2))
    let right = nums.slice(Math.floor(nums.length/2)).reverse()

    let res=[] 
    while(left.length>0 && right.length>0) {
        res.push(left.shift())
        res.push(right.shift())
    }
   
    if (left.length>0) {
        res.push(left.shift())
    }
    if (right.length>0) {
        res.push(right.shift())
    }

    return res 
}

console.log(wiggleSort([3, 5, 2, 1, 6, 4]))