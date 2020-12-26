/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
        if (intervals.length < 2) return intervals

        inervals = intervals.sort((a, b) => a[0] - b[0])

        let array = [intervals[0]]

        for (let i = 1; i < intervals.length; i++) {
                let item1 = array.pop()
                let item2 = intervals[i]
                const merged = mergeTwo(item1, item2)
                array = [...array, ...merged]
        }
        return array
}

function mergeTwo(item1, item2) {
        const [start1, end1] = item1
        const [start2, end2] = item2

        if (end1 >= start2) {
                if (end1 <= end2) {
                        return [[start1, end2]]
                } else {
                        return [item1]
                }
        }

        return [item1, item2]
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
        if (intervals.length < 2) return intervals

        inervals = intervals.sort((a, b) => a[0] - b[0])

        let array = []
        let prev = intervals[0]
        for (let i = 1; i < intervals.length; i++) {
                if (prev[1] < intervals[i][1]) {
                        if (prev[1] < intervals[i][0]) {
                                array.push(prev)
                                prev = intervals[i]
                        } else {
                                prev[1] = intervals[i][1]
                        }
                }
        }
        array.push(prev)
        return array
}
