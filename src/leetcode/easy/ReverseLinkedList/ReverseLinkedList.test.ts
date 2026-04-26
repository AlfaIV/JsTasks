const { reverseList, ListNode } = require('./ReverseLinkedList')

function ListFromArray(arr: number[]): typeof ListNode | null {
    if (!arr.length) return null

    let elem = new ListNode(arr[0], null);
    const head = elem;

    for (let i = 1; i < arr.length; i++) {
        let pre = elem;
        elem = new ListNode(arr[i], null);
        pre.next = elem;
    }

    return head
}

function ArrayFromList(list: typeof ListNode | null): number[] {
    if (!list) return []

    const buff: number[] = [];
    let elem = list;

    do {
        buff.push(elem.val);
        elem = elem.next;
    } while (elem)

    return buff
}
describe('reverseList', () => {
    test('case 1', () => {
        const head = ListFromArray([1,2,3,4,5]);
        const result = ListFromArray([5,4,3,2,1]);
        expect(reverseList(head)).toMatchObject(result);
    })


    test('case 2', () => {
        const head = new ListNode(1, new ListNode(2, null));
        const result = new ListNode(2, new ListNode(1, null));
        expect(reverseList(head)).toMatchObject(result);
    })

    test('case 3', () => {
        expect(reverseList(null)).toEqual(null);
    })

    test('case 4', () => {
        const head = new ListNode(1, null);
        const result = new ListNode(1, null);
        expect(reverseList(head)).toEqual(result);
    })
})

describe('test ArrayFromList', () => {
    it('case 1', () => {
        const list = null;
        const array: number[] = [];
        expect(ArrayFromList(list)).toEqual(array);
    })

    it('case 2', () => {
        const list = new ListNode(1, null);
        const array: number[] = [1];
        expect(ArrayFromList(list)).toEqual(array);
    })

    it('case 3', () => {
        const list = new ListNode(1, new ListNode(2, null));
        const array: number[] = [1, 2];
        expect(ArrayFromList(list)).toEqual(array);
    })
})

describe('test ListFromArray', () => {
    it('case 1', () => {
        const list = null;
        const array: number[] = [];
        expect(ListFromArray(array)).toEqual(list);
    })

    it('case 2', () => {
        const list = new ListNode(1, null);
        const array: number[] = [1];
        expect(ListFromArray(array)).toEqual(list);
    })

    it('case 3', () => {
        const list = new ListNode(1, new ListNode(2, null));
        const array: number[] = [1, 2];
        console.log(ListFromArray(array));
        expect(ListFromArray(array)).toEqual(list);
    })
})