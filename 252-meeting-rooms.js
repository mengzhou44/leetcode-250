function canAttendMeetings(intervals) {
        if (intervals.length < 2) return true;
        intervals = intervals.sort((a, b) => a[0] - b[0]);

        let end = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
                if (intervals[i][0] < end) {
                        return false;
                } else {
                        end = intervals[i][1];
                }
        }
        return true;
}

console.log(
        canAttendMeetings([
                [0, 30],
                [5, 10],
                [15, 20],
        ])
);
console.log(
        canAttendMeetings([
                [7, 10],
                [2, 4],
        ])
);
