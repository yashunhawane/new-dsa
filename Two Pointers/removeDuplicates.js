let nums = [1,1,2]

let removeDuplicate=(nums)=>{
    let first = 0 
    let next = 1
    let count = 1
    while(next<nums.length){
        if(nums[first]!=nums[next]){
            nums[first+1] = nums[next]
            first ++
            count++
        }else{
            next++
        }
    }
    return count
}
ans = removeDuplicate(nums)
console.log(ans)
