/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
        let res = [];
        let index = 0;
        while (index < nums.length) {
                let start = index;
                while (
                        index + 1 < nums.length &&
                        nums[index] + 1 === nums[index + 1]
                ) {
                        index++;
                }
                if (start === index) {
                        res.push(nums[start].toString());
                } else {
                        res.push(`${nums[start]}->${nums[index]}`);
                }
                index++;
        }

        return res;
}
