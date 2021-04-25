class TreeNode {
    constructor(val) {
        this.val = val
        this.random = null
        this.left = null
        this.right =null
    }
}

function copyRandomBinaryTree(node) {
    let map = new Map()
    if (node === null)  return null
    return dfs(node)


    function dfs(node) {
         if (node === null)   return null

         if (map.has(node)) return map.get(node)
         let cloned = new TreeNode(node.val)
         map.set(node, cloned)
         cloned.left = dfs(node.left)
         cloned.right = dfs(node.right)
         cloned.random = dfs(node.random)

         return cloned
    }

}


let root = new TreeNode(1)
root.right = new TreeNode(4)
root.right.left = new TreeNode(7)
root.right.left.random= root
root.right.random = root.right.left


let cloned = copyRandomBinaryTree(root)
console.log(cloned)
console.log(root)