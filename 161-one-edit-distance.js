// Given two strings S and T, determine if they are both one edit distance apart.

function isOneEditDistance(s, t) {
        if (s === null || t === null) return false;
        if (s.length < t.length) return isOneEditDistance(t, s);

        if (s.length - t.length > 1) return false;

        if (s.length === t.length) {
                let count = 0;
                for (let i = 0; i < s.length; i++) {
                        if (s[i] !== t[i]) {
                                count++;
                        }
                        if (count > 1) return false;
                }
                return true;
        }
        let count = 0;
        let sIndex = 0;
        let tIndex = 0;
        while (sIndex < s.length) {
                if (s[sIndex] !== t[tIndex]) {
                        sIndex++;
                        count++;
                        if (count > 1) {
                                return false;
                        }
                } else {
                        sIndex++;
                        tIndex++;
                }
        }
        return true 
}

console.log(isOneEditDistance('abc', 'abe'));
console.log(isOneEditDistance('bc', 'bca'));
