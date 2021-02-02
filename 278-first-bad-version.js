var solution = function (isBadVersion) {
        /**
         * @param {integer} n Total versions
         * @return {integer} The first bad version
         */
        return function (n) {
                if (isBadVersion(1)) return 1;
                let start = 1;
                let end = n;

                while (start + 1 < end) {
                        let mid = start + Math.floor((end - start) / 2);
                        if (!isBadVersion(mid)) {
                                start = mid;
                        } else {
                                end = mid;
                        }
                }

                return end;
        };
};
