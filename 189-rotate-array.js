/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
        k = k % nums.length;
        let n = nums.length;
        let array = [];
        for (let i = n - k; i < n; i++) {
                array.push(nums[i]);
        }

        for (let i = n - 1; i >= k; i--) {
                nums[i] = nums[i - k];
        }

        for (let i = 0; i < k; i++) {
                nums[i] = array[i];
        }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
        k = k % nums.length;

        let n = nums.length;

        let copy = new Array(n);

        for (let i = 0; i < n; i++) {
                copy[(i + k) % n] = nums[i];
        }

        for (let i = 0; i < n; i++) {
                nums[i] = copy[i];
        }
}


solution 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k= k%nums.length
   
    let n = nums.length 
    
    reverse(nums, 0, n-1)
   
    reverse(nums, 0, k-1)
   
    reverse(nums,k, n-1)
    
}


function reverse(array, i, j) {
   let left = i 
   let right = j 
   while(left<right) {
       let temp= array[left]
       array[left] = array[right]
       array[right] = temp 
       left++
       right--
   }
}


