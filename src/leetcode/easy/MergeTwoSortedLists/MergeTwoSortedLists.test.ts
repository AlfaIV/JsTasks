const { mergeTwoLists, ListNode } = require('./MergeTwoSortedLists');

function ListFromArray(arr: number[]): typeof ListNode | null {
    if (!arr.length) return null

    let elem = new ListNode(arr[0], null)
    const head = elem;

    for (let i = 1; i < arr.length; i++) {
        let prev = elem;
        elem = new ListNode(arr[i], null);
        prev.next = elem;
    }

    return head
}

describe.skip('test ListFromArray', () => {
    it('[]', () => {
        expect(ListFromArray([])).toEqual(null);
    });

    it('[1]', () => {
        const arr = [1];
        const list = new ListNode(1, null);
        expect(ListFromArray(arr)).toMatchObject(list);
    });

    it('[1,2,3]', () => {
        const arr = [1, 2, 3];
        const list = new ListNode(1, new ListNode(2, new ListNode(3, null)));
        expect(ListFromArray(arr)).toMatchObject(list);
    });
})

describe('mergeTwoLists', () => {
    it.only('Example 1:', () => {
        const list1 = ListFromArray([1, 2, 4]);
        const list2 = ListFromArray([1, 3, 4]);
        const res = ListFromArray([1, 1, 2, 3, 4, 4]);
        expect(mergeTwoLists(list1, list2)).toMatchObject(res);
    });

    it('Example 2:', () => {
        const list1 = ListFromArray([]);
        const list2 = ListFromArray([]);
        const res = ListFromArray([]);
        expect(mergeTwoLists(list1, list2)).toEqual(res);
    });

    it('Example 3:', () => {
        const list1 = ListFromArray([]);
        const list2 = ListFromArray([0]);
        const res = ListFromArray([0]);
        expect(mergeTwoLists(list1, list2)).toMatchObject(res);
    });

    it('4:', () => {
        const list1 = ListFromArray([0]);
        const list2 = ListFromArray([]);
        const res = ListFromArray([0]);
        expect(mergeTwoLists(list1, list2)).toMatchObject(res);
    });

    it('5:', () => {
        const list1 = ListFromArray([1, 3, 10]);
        const list2 = ListFromArray([1, 3, 4, 6, 7, 11]);
        const res = ListFromArray([1, 1, 3, 3, 4, 6, 7, 11]);
        expect(mergeTwoLists(list1, list2)).toMatchObject(res);
    });

    it('5:', () => {
        const list1 = ListFromArray([2, 10]);
        const list2 = ListFromArray([1, 3, 4, 14]);
        const res = ListFromArray([1, 2, 3, 4, 10, 14]);
        expect(mergeTwoLists(list1, list2)).toMatchObject(res);
    });
})
