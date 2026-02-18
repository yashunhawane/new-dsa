let nums = [-1, 2, 1, -4]
let target = 1

let threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b)
    let diff = Infinity
    let n = nums.length

    for (let i = 0; i < n - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1
        let right = n - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(diff - target)) {
                diff = sum
            }
            if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return diff;


};


let ans = threeSumClosest(nums, target)

console.log(ans)