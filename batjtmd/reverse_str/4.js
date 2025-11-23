function reverseStr(str) {
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log(reverseStr('hello'));
