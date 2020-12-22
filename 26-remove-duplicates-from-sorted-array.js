function removeDuplicates(nums) {
   let cur= 0 
   for(let i=1; i<nums.length; i++) {
        if (nums[i] === nums[cur]) continue 
        cur = cur+1
        nums[cur] = nums[i] 
   } 
    
   return cur+1

}