/**
 * @param {string} s
 * @return {string}
 */
function shortestPalindrome(s) {
        if (s.length === 0) return s;
        let left = 0;
        let right = s.length - 1;
        let prefix = [];
        for (let i = right; i >= 0; i--) {
                if (!isPalindrome(s, left, i)) {
                        prefix.push(s[i]);
                } else {
                        return prefix.join('') + s;
                }
        }
}

function isPalindrome(s, left, right) {
        while (left < right) {
                if (s[left] !== s[right]) {
                        return false;
                }
                left++;
                right--;
        }

        return true;
}
