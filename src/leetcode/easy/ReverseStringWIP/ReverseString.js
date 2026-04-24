/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const stack = [];
    
    s.forEach((element) => {
        stack.push(element);
    })

    const buffer = [];

    while(stack.length){
        buffer.push(stack.pop());
    }

    return buffer;
};

module.exports = {reverseString};