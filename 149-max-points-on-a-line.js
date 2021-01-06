/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
        if (points.length < 3) return points.length;
        let n = points.length;

        let max = 1;
        for (let i = 0; i < n; i++) {
                let same = 0;
                let localMax = 1;

                let map = new Map();
                for (let j = i + 1; j < n; j++) {
                        if (isSame(points[j], points[i])) {
                                same++;
                                continue;
                        }
                        let slope = getSlope(points[j], points[i]);
                        if (!map.has(slope)) {
                                map.set(slope, 2);
                        } else {
                                map.set(slope, map.get(slope) + 1);
                        }

                        localMax = Math.max(localMax, map.get(slope));
                }

                max = Math.max(max, localMax + same);
        }

        return max;
}

function isSame(a, b) {
        return a[0] === b[0] && a[1] === b[1];
}

function getGCD(a, b) {
        return b === 0 ? a : getGCD(b, a % b);
}

function getSlope(p1, p2) {
        var xDiff = p1[0] - p2[0];
        var yDiff = p1[1] - p2[1];
        if (xDiff === 0) return 'y';
        if (yDiff === 0) return 'x';
        var gcd = getGCD(xDiff, yDiff);
        xDiff /= gcd;
        yDiff /= gcd;
        return `${xDiff}/${yDiff}`;
}
