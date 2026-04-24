/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prevElemPtr = head;
    if (prevElemPtr === null){
        return null
    }
    let elemPtr = head.next;
    if (elemPtr === null){
        return prevElemPtr
    } 
    let nextElemPtr = elemPtr.next;

    while (nextElemPtr !== null) {
        elemPtr.next = prevElemPtr;
        prevElemPtr = elemPtr;
        elemPtr = nextElemPtr;
        nextElemPtr = nextElemPtr.next;
    }

    elemPtr.next = prevElemPtr;
    return elemPtr
};

module.exports = { reverseList };