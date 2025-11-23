function twoSum(nums, target) {
    // es6 提供了hashMap 很重要 
    // 语言都提供了一些内置的数据解构 []
    // 
    const diffs = new Map();  // es5 没有hashMap  o(1)时间复杂度
    const len = nums.length; // 缓存数组的长度
    for (let i = 0; i < len; i++) {
        const complement = target - nums[i]; // 和变成差
        if (diffs.has(complement)) {
            return [diffs.get(complement),i];
        }
        diffs.set(nums[i],i);
        // diffs[nums[i]] = i;
    }
}