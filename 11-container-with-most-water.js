function maxArea(height) {
        let left = 0
        let right = height.length - 1
        let max = 0
        while (left < right) {
                let area =
                        (right - left) * Math.min(height[left], height[right])
                max = Math.max(max, area)
                if (height[left] > height[right]) {
                        right--
                } else {
                        left++
                }
        }

        return max
}
