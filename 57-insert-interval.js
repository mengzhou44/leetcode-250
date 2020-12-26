/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

function insert(intervals, newInterval) {
        if (intervals.length === 0) return [newInterval]

        intervals.push(newInterval)
        intervals.sort((a, b) => a[0] - b[0])

        let prev = intervals[0]
        let res = []
        for (let i = 1; i < intervals.length; i++) {
                if (prev[1] < intervals[i][1]) {
                        if (prev[1] < intervals[i][0]) {
                                res.push(prev)
                                prev = intervals[i]
                        } else {
                                prev[1] = intervals[i][1]
                        }
                }
        }

        res.push(prev)

        return res
}
