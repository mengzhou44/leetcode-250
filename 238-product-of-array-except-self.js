/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
        let product = 1;
        let leftArray = [];
        for (let num of nums) {
                product *= num;
                leftArray.push(product);
        }
        product = 1;
        let rightArray = [];
        for (let num of nums.reverse()) {
                product *= num;
                rightArray.push(product);
        }
        let res = [];
        for (let i = 0; i < nums.length; i++) {
                if (i === 0) {
                        res.push(rightArray[nums.length - 2]);
                } else if (i === nums.length - 1) {
                        res.push(leftArray[nums.length - 2]);
                } else {
                        res.push(
                                leftArray[i - 1] *
                                        rightArray[nums.length - 2 - i]
                        );
                }
        }
        return res;
}
