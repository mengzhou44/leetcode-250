/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
 
    let duplicated = false
    let curIndex= 1 
    for(let i=1; i<nums.length; i++) {
         if (nums[i] === nums[i-1]) {
             if (duplicated === false) {
                 duplicated = true
                 nums[curIndex] = nums[i] 
                 curIndex++
             } else {
                 continue
             } 
         }else {
             duplicated = false
             nums[curIndex] = nums[i] 
             curIndex++
         }  
    }
    
    return curIndex
    
}

 