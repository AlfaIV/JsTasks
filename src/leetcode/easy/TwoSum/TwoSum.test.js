const { twoSum } = require('./TwoSum');

test('Case 1', () => {
    nums = [2,7,11,15];
    target = 9;
    expect(twoSum(nums, target)).toStrictEqual([0,1]);
});

test('Case 2', () => {
    nums = [3,2,4];
    target = 6;
    expect(twoSum(nums, target)).toStrictEqual([1,2]);
});

test('Case 1', () => {
    nums = [3,3];
    target = 6;
    expect(twoSum(nums, target)).toStrictEqual([0,1]);
});