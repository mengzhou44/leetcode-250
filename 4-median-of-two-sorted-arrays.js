function findMedianSortedArrays(nums1, nums2) {
        let merged = []
        while (nums1.length > 0 && nums2.length > 0) {
                if (nums1[0] < nums2[0]) {
                        merged.push(nums1.shift())
                } else {
                        merged.push(nums2.shift())
                }
        }

        if (nums1.length > 0) {
                merged = [...merged, ...nums1]
        } else {
                merged = [...merged, ...nums2]
        }

        if (merged.length % 2 === 0) {
                let index = merged.length / 2

                return (merged[index - 1] + merged[index]) / 2
        }

        return merged[Math.floor(merged.length / 2)]
}


function findMedianSortedArrays(nums1, nums2) {
    let m= nums1.length 
    let n = nums2.length 
    if (m>n) return findMedianSortedArrays(nums2, nums1)
  
    let halfLen = Math.floor((m+n +1)/2) 
    let iMin = 0  
    let iMax = m
    while(iMin<=iMax) {
         let i = iMin +  Math.floor((iMax-iMin)/2)
         let j = halfLen - i
         if (i<iMax && nums2[j-1]>nums1[i])  {
              iMin = i+1
         } else if (i>iMin && nums1[i-1]> nums2[j]) {
              iMax= i-1 
         } else {
               let maxLeft =  0
               if (i === 0)  {
                  maxLeft = nums2[j-1] 
               }  else if (j === 0) {
                   maxLeft = nums1[i-1]
               } else {
                   maxLeft = Math.max( nums2[j-1], nums1[i-1])
               }
               
               if ((m+n)%2 ===1)  return maxLeft 
              
               let minRight =0
                if (i === m)  { minRight = nums2[j] }
                else if (j ===n ) { minRight = nums1[i]}
                else {
                     minRight = Math.min(nums1[i], nums2[j])
                }
             
               return (maxLeft + minRight) /2 
         }
    }
  
    return 0 
}

