function strStr(haystack, needle) {
        if (needle.length === 0) return 0

        if (haystack.length === 0) return -1

        for (let i = 0; i < haystack.length; i++) {
                let temp = haystack.substring(i, i + needle.length)
                if (temp === needle) return i
        }

        return -1
}
