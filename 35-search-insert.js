function searchInsert(nums, target) {
    let left = 0 
     let right = nums.length -1 
     if (target>nums[right] )  return right+1
     if (target<nums[left] )  return 0
     while(left<=right) {
          let mid = left+ Math.floor((right-left)/2)
          if (nums[mid] === target)  return mid 
           if (nums[mid]> target)  {
               right = mid-1 
           } else {
               left= mid+1 
           }
     }
     
     return left 
    }
       
     