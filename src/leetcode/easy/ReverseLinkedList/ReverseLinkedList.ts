class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null

    if(!head.next) return head

    let preElem = new ListNode(head.val, null);
    let elem = head.next;

    while(elem.next){
        preElem = new ListNode(elem.val, preElem);
        elem = elem.next
    }
    
    return new ListNode(elem.val, preElem)
};

module.exports = { reverseList, ListNode };
