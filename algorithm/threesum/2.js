const nums = [2,1,6,3,4,5];
// b在前面， a在后面  a - b < 0  交换  从小到大
nums.sort((a, b) => {
    console.log(a, b);
    return a - b
});
console.log(nums);
