class TreeNode {
   
     constructor(val) {
          this.val = val 
          this.left = null 
          this.right = null 
     }

}

function inorderSuccessor(root, p) {
    if (p.right!== null)   return findMin(p.right)

    let res = null 
    while(root!== null) {
         if (root.val> p.val) {
             res= root 
             root = root.left
         } else if (root.val <p.val) {
             root = root.right
         } else {
             break 
         }
    }
     return res 
    
}


function findMin(node){ 
    while(node.left!==null) {
        node = node.left
    }
    return node 
}

let root = new TreeNode(5)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

root.right = new TreeNode(8)
root.right.left = new TreeNode(6)

console.log(inorderSuccessor(root, root.right.left))
