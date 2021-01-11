// Given a sorted integer array nums, where the range
// of elements are in the inclusive range [lower, upper],
//return its missing ranges.

function findMissingRanges(nums, lower, upper) {
        let res = [];

         if (nums[0]>lower)  {
             nums.unshift(lower)
         }
         if (nums[nums.length-1]<upper) {
             nums.push(upper)
         }

         for (let i = 0; i < nums.length - 1; i++) {
                if (nums[i + 1] - nums[i] > 1) {
                        if (nums[i + 1] - nums[i] === 2) {
                                res.push([(nums[i] + 1).toString()]);  
                        } else {
                            res.push([`${nums[i] + 1}->${nums[i + 1] - 1}`]);
                        }
                       
                }
        }
        return res;
}

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99))