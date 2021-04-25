class  ListNode {
    constructor(val) {
         this.val = val
         this.next = null
    }
}


function removeDuplicateNodes(head)  {
     if (head === null)   return head
     let  set = new Set()
     let dummy = new ListNode(-1)
     prev = dummy
     let cur = head
     while(cur!==null){
           if (!set.has(cur.val)) {
                set.add(cur.val)
                prev.next = cur
                prev = cur
           }
           cur=cur.next

     }
     return dummy.next
}

let root = new ListNode(2)
root.next = new ListNode(2)
root.next.next = new ListNode(3)

let removed = removeDuplicateNodes(root)

console.log(removed)