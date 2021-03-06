/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
        let n = citations.length;
        let left = 0;
        let right = n - 1;
        while (left <= right) {
                let mid = left + Math.floor((right - left) / 2);

                if (citations[mid] === n - mid) {
                        return n - mid;
                } else if (citations[mid] < n - mid) {
                        left = mid + 1;
                } else {
                        right = mid - 1;
                }
        }

        return n - left;
};
