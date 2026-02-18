let nums = [3, 6, 8, 10]
let nums2 = [1, 2, 4, 9, 15]


let SortedArray = (nums) => {
    let newArr = []
    let n = nums.length
    let m = nums2.length
    let i = 0
    let j = 0

    while (i < n && j < m) {
        if (nums[i] < nums2[j]) {
            newArr.push(nums[i])
            i++
        } else {
            newArr.push(nums2[j])
            j++
        }
    }
    while (i < n) {
        newArr.push(nums[i])
        i++
    }
    while (j < m) {
        newArr.push(nums2[j])
        j++
    }
    return newArr;
}


let ans = SortedArray(nums, nums2)

console.log(ans)