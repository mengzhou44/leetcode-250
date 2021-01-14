/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
        let n = numCourses;
        let inDegrees = new Array(n).fill(0);
        let map = new Map();

        for (let [toTake, prereq] of prerequisites) {
                inDegrees[toTake]++;

                if (!map.has(prereq)) {
                        map.set(prereq, []);
                }
                map.get(prereq).push(toTake);
        }

        let queue = [];
        for (let i = 0; i < n; i++) {
                if (inDegrees[i] === 0) {
                        queue.push(i);
                }
        }

        let order = [];
        while (queue.length > 0) {
                let course = queue.shift();
                order.push(course);
                if (map.has(course)) {
                        for (let toTake of map.get(course)) {
                                inDegrees[toTake]--;
                                if (inDegrees[toTake] === 0) {
                                        queue.push(toTake);
                                }
                        }
                }
        }

        if (order.length < n) return [];

        return order;
}
