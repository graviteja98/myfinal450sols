const nextPermutation = function(nums) {
    // const possibleCombos =new Array(nums.length).fill(0);
    // if(nums.length == 1){
    //     return nums
    // }
    // const max = Math.max(...nums);
    // const min = Math.max(...nums);
    // if(nums.length == 2){
    //     if(nums[0] > nums[1]){
    //         return [min,max]
    //     }
    //     if(nums[1] > nums[0]){
    //         return [max,min]
    //     }
    // }
    // const valueOfArr = parseInt(nums.join(''), 10);
    // console.log(valueOfArr)

    // return nums;


    let i = nums.length - 2;


    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
};

const nextPermArr = [1,2,3]

console.log(nextPermutation(nextPermArr))