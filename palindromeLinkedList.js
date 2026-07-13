// leetcode 234 palindrom linked list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //approach 1 but not good
    // curr=head;
    // const arr=[];
    // while(curr){
    //     arr.push(curr.val);
    //     curr=curr.next;
    // }

    // let i=0;
    // let j=arr.length-1-i;

    // while(i<j){
    //     if(arr[i]!==arr[j]) return false;
    //     i++;
    //     j--;
    // }

    // return true;
    let slow=fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    let prev=null;
    let curr=slow;
    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
        }

    let start=head;
    let end=prev;
    while(end){
        if(start.val!== end.val) return false;
        start=start.next;
        end=end.next;
    }
return true;
    
};