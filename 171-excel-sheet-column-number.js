function titleToNumber(s) {
        let index = 0;
        let res = 0;
        while (index < s.length) {
                res = 26 * res + s[index].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
                index++;
        }
        return res;
}
