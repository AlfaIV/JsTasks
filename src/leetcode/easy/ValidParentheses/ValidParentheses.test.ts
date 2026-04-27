const { Stack, isValid } = require('./ValidParentheses');   

describe.skip("Test Stack", () => {
    it('is empty', () => {
        const stack = new Stack();
        expect(stack.isEmpty).toEqual(true);
    });

    it('not empty', () => {
        const stack = new Stack();
        stack.push('a');
        expect(stack.isEmpty).toEqual(false);
    });

    it('push pop', () => {
        const stack = new Stack();
        const val = 'a';
        stack.push(val);
        expect(stack.pop()).toEqual(val);
    });

    it('push pop 2', () => {
        const stack = new Stack();
        stack.push('a');
        stack.push('b');
        const val = 'c';
        stack.push(val);
        expect(stack.pop()).toEqual(val);
    });
})

describe("Test isValid", () => {
    it('Example 1:', () => {
        const s = '()';
        expect(isValid(s)).toEqual(true);
    });

    it('Example 2:', () => {
        const s = '()[]{}';
        expect(isValid(s)).toEqual(true);
    });

    it('Example 3:', () => {
        const s = '(]';
        expect(isValid(s)).toEqual(false);
    });

    it('Example 4:', () => {
        const s = '([])';
        expect(isValid(s)).toEqual(true);
    });

    it('Example 5:', () => {
        const s = '([)]';
        expect(isValid(s)).toEqual(false);
    });

    it('self 1:', () => {
        const s = '][';
        expect(isValid(s)).toEqual(false);
    });

    it('self 2:', () => {
        const s = '(}';
        expect(isValid(s)).toEqual(false);
    });

    it('self 3:', () => {
        const s = '(';
        expect(isValid(s)).toEqual(false);
    });
})

