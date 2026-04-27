class MyStack<T> {
    isEmpty: boolean;
    buffer: T[];

    constructor() {
        this.isEmpty = true;
        this.buffer = [];
    }

    push(item: T): void {
        this.buffer.push(item);
        this.isEmpty = false;
    }

    pop(): T | undefined {
        const item = this.buffer.pop();
        if (this.buffer.length === 0) {
            this.isEmpty = true;
        }
        return item;
    }
}


function isValid(s: string): boolean {
    const stack = new MyStack<string>();

    for (const char of s) {
        switch (char) {
            case "[":
            case "(":
            case "{":
                stack.push(char);
                break;
            case "]":
                if (stack.isEmpty || stack.pop() !== "[") return false
                break
            case ")":
                if (stack.isEmpty || stack.pop() !== "(") return false
                break
            case "}":
                if (stack.isEmpty || stack.pop() !== "{") return false
                break
        }
    }

    if (stack.isEmpty) return true

    return false
};

module.exports = { Stack: MyStack, isValid }
