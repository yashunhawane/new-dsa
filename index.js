let nums = [-4, -1, 0, 3, 10]



let twoSum = (nums) => {
    let pvArr = []
    let neArr = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            pvArr.push(nums[i])
        } else {
            neArr.push(nums[i])
        }
    }

    let left = neArr.length
    let right = pvArr.length
    let a = 0
    let b = 0
    neArr.reverse()
    while (left > a && right > b){
        
    }

}

let ans = twoSum(nums)

console.log(ans)