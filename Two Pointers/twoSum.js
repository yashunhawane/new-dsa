let nums = [0, -1, 2, -3, 1]

let target = -2

let twoSum=(nums, target)=>{
  nums.sort((a,b)=>a-b)
    let first = 0
    let last = nums.length-1
    
    while(first<last){
        if(nums[first] + nums[last] == target){
            return [nums[first] , nums[last]]
        }else if(nums[first] + nums[last] > target){
            last --
        }else{
            first ++
        }
    }
}

let ans= twoSum(nums, target)
console.log(ans)
