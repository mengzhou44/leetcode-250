/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
        for (let i = 0; i < gas.length; i++) {
                if (canComplete(i)) {
                        return i;
                }
        }

        return -1;

        function canComplete(startIndex) {
                let balance = 0;
                for (let i = startIndex; i < startIndex + gas.length; i++) {
                        let index = i % gas.length;
                        balance += gas[index] - cost[index];
                        if (balance < 0) return false;
                }

                return true;
        }
}
