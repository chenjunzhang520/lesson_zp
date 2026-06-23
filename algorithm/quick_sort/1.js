
// 治
function partition(nums, left, right) {
    let i = left, j = right;  // 左右指针
    // 检查一遍数组
    while(i < j) {
        // 第一项作为基准值
        // 不开销新的空间 原地排序
        while(i < j && nums[j] >= nums[left]) {
            // 右侧比基准值大的 放到右边的数组
            j--; // 退出的时候是找到了第一个比基准值小的元素
        }
        while(i < j && nums[i] <= nums[left]) {
            // 左侧比基准值小的 放到左边的数组
            i++; // 退出的时候是找到了第一个比基准值大的元素
        }
        // 交换
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // 将基准值交换到两子数组的分界线
    [nums[i], nums[left]] = [nums[left], nums[i]];
    return i; // 返回基准值的索引位置
}

function quickSort(nums, left, right) {
    if(left >= right) {
        return;
    }
    // pivot 基准值在的位置
    let pivot = partition(nums, left, right);
    // 递归排序
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
}

const arr = [2,4,1,0,3,5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);