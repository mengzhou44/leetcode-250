var generateTrees = function(n) {
    if (n=== 0)  return []

    return helper(1, n)


    function helper(start, end) {

        let list = []

        if (start> end) {
             list.push(null)
             return list
        }

        for(let i=start; i<=end; i++) {

             let leftNodes = helper(start, i-1)
             let rightNodes = helper(i+1, end)

             for(let left of leftNodes) {
                 for(let right of rightNodes) {
                      let root = new TreeNode(i)
                      root.left = left
                      root.right = right
                      list.push(root)
                 }
             }
        }

        return list

    }
};