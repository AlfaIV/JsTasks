const { reverseList } = require('./ReverseLinkedList')

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

test('case 3', () => {
    expect(reverseList(null)).toEqual(null);
})