/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map;
    let hasExcessElem = false;

    Array.from(s).forEach(element => {
        let number = 0;
        if (map.has(element)){
            number = map.get(element);
        }
        map.set(element, number + 1);
    });

    Array.from(t).forEach(element => {
        if (map.has(element)){
            const number = map.get(element);
            if (number === 1){
                map.delete(element);
            } else {
                map.set(element, number - 1);
            }
        } else {
            hasExcessElem = true;
        }
    });

    if (Array.from(map).length !== 0 || hasExcessElem){
        return false
    }
    return true
};

module.exports = { isAnagram }