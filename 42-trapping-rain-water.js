/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
        let peakIndex = 0
        for (let i = 0; i < height.length; i++) {
                if (height[peakIndex] < height[i]) {
                        peakIndex = i
                }
        }

        let leftMostBar = 0
        let water = 0
        for (let i = 0; i < peakIndex; i++) {
                if (height[i] > leftMostBar) {
                        leftMostBar = height[i]
                } else {
                        water += leftMostBar - height[i]
                }
        }
        let rightMostBar = 0
        for (let i = height.length - 1; i > peakIndex; i--) {
                if (height[i] > rightMostBar) {
                        rightMostBar = height[i]
                } else {
                        water += rightMostBar - height[i]
                }
        }

        return water
}
