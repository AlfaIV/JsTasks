class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let elem1 = list1;
    let elem2 = list2;
    let prevListItem: ListNode | null = null;
    let listItem: ListNode | null = null;
    let isElem1Less = false;

    while (elem1 !== null && elem2 !== null) {
        if (elem1.val <= elem2.val) {
            listItem = new ListNode(elem1.val, null);
            isElem1Less = true;
        } else {
            listItem = new ListNode(elem2.val, null);
            isElem1Less = false;
        }

        if (!!prevListItem) {
            prevListItem.next = listItem;
            prevListItem = listItem;
        };

        if (isElem1Less === true && !!elem1.next) {
            elem1 = elem1.next;
        }

        if (!!isElem1Less && !!elem2.next) {
            elem2 = elem2.next;
        }
    }

    if (elem1) {
        while (elem1) {
            listItem = new ListNode(elem1.val, null);
            if (!!prevListItem) {
                prevListItem.next = listItem;
                prevListItem = listItem;
            }
            elem1 = elem1.next;
        }
    }

    if (elem2) {
        while (elem2) {
            listItem = new ListNode(elem2.val, null);
            if (!!prevListItem) {
                prevListItem.next = listItem;
                prevListItem = listItem;
            }
            elem2 = elem2.next;
        }
    }

    return listItem
};

module.exports = { mergeTwoLists, ListNode }