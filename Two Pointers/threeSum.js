let nums = [-1, 0, 1, 2, -1, -4]


let threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    let res = [];
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue

        let left = i + 1
        let right = n - 1
        let target = -nums[i]


        while (left < right) {
            let sum = nums[left] + nums[right]
            if (sum == target) {
                res.push([nums[i], nums[left], nums[right]])

                left++
                right--

                while (nums[left] == nums[left - 1]) {
                    left++
                }
                while (nums[right] == nums[right + 1]) {
                    right--
                }
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }

    }

    return res;
};


let ans = threeSum(nums)

console.log(ans)