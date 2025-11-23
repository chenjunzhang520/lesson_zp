function twoSum(nums, target) {
    const diffs = {};  // es5 没有hashMap  o(1)时间复杂度
    const len = nums.length; // 缓存数组的长度
    for (let i = 0; i < len; i++) {
        const complement = target - nums[i]; // 和变成差
        if (diffs[complement] ) {
            return [diffs[complement],i];
        }

        diffs[nums[i]] = i;
    }
}