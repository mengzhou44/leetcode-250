class TreeNode {
    constructor(val) {
        this.val = val 
        this.left = null 
        this.right = null 
    }

}
// Given a non-empty binary search tree and a target value, 
//find the value in the BST that is closest to the target.

function closestValue(root, target)  {
   let candidate = root.val
   let node = root 
    while(node) {     
        if  (closerDistance(node.val, candidate)) {
             candidate = node.val
        }
        if (node.val >target) {
             node = node.left
        } else if (node.val<target) {
             node = node.right
        }  else {
            return node.val
        }
    }
   
   return candidate
    
   function closerDistance(val1, val2) {
        return Math.abs(val1-target) <Math.abs(val2-target)
   }
} 


let root = new TreeNode(4)
root.left =  new TreeNode(2)
root.left.left =  new TreeNode(1)
root.left.right =  new TreeNode(3)
root.right =  new TreeNode(5)

console.log(closestValue(root, 3.714286))
