function isValid(str) {
    if (!str) {
        return false;
    }
    const stack = [];
    for (let c of str) {
        if (c === '(') {
            stack.push(')')
        } else if (c === '[') {
            stack.push(']')
        } else if (c === '{') {
            stack.push('}')
        } else if (!stack.length || stack.pop() !== c) {
            return false;
        }
    }
    return stack.length === 0;
}
console.log(isValid('{}[]'))
