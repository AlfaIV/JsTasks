/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let [start, stop] = [0, 0];

    while(start < nums.length){
        let reqNum = target - nums[start];

        while(stop < nums.length){
            stop += 1;

            if (reqNum === nums[stop]){
                return [start, stop]
            }
        }

        start += 1;
        stop = start;
    }

    return [start, stop]
};

module.exports = { twoSum };