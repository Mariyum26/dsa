// leetcode 141: linked list cycle


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
//     let basicSet= new Set();
//     let curr=head;

// while(curr){
//     if(basicSet.has(curr)){
//         return true;
//     }
//     else {
//         basicSet.add(curr);
//         curr=curr.next;
//     }
// }
// return false;
 let slow=head;
 if(head==null) return false;
 let fast=head.next;
 
 while(slow!==fast){
    if(fast==null || fast.next==null){
        return false;
    }
    slow=slow.next;
    fast=fast.next.next;
 }
 return true;
};