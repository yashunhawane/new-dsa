let nums = [10, 5, 2, 6]
let k = 100

// 2 6 5 10 15

let lessThenK = (nums, k) => {
    let product = 1
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            product++
        }
        if (nums[i] + nums[i + 1]) {
            product++
        }


        let left = i + 1
        let right = nums.left - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (sum < k) {
                product += right - left
            } else {
                right--
            }
        }
    }
    return product;
}

let ans = lessThenK(nums, k)

console.log(ans)