const { isAnagram } = require('./ValidAnagram');

test('Case 1', () => {
    s = "anagram";
    t = "nagaram";
    expect(isAnagram(s, t)).toEqual(true);
});

test('Case 2', () => {
    s = "rat";
    t = "car";
    expect(isAnagram(s, t)).toEqual(false);
});

test('Case 3', () => {
    s = "r";
    t = "c";
    expect(isAnagram(s, t)).toEqual(false);
});

test('Case 4', () => {
    s = "r";
    t = "r";
    expect(isAnagram(s, t)).toEqual(true);
});

test('Case 5', () => {
    s = "a";
    t = "ab";
    expect(isAnagram(s, t)).toEqual(false);
});

test('Case 6', () => {
    s = "abb";
    t = "ab";
    expect(isAnagram(s, t)).toEqual(false);
});
