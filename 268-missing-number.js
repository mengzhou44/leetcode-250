function missingNumber(nums) {
        let n = nums.length;
        let expectedSum = (n * (n + 1)) / 2;
        let sum = nums.reduce((sum, num) => sum + num);

        return expectedSum - sum;
}
