const { reverseString } = require('./ReverseString')

test('Case 1', () => {
    s = ["h","e","l","l","o"];
    expect(reverseString(s)).toEqual(["o","l","l","e","h"]);
})

test('Case 2', () => {
    s = ["H","a","n","n","a","h"];
    expect(reverseString(s)).toEqual(["h","a","n","n","a","H"]);
})
