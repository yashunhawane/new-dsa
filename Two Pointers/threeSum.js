let nums = [-1,0,1,2,-1,-4]

let threeSum = (nums)=>{
    nums.sort((a,b)=> a-b)
    let  res = []
    for(let i= 0 ; i <nums.length-2; i++){
        if(i>0 &&nums[i]==nums[i-1])continue
        let left = i+1
        let right = nums.length-1
        let target = -1 * nums[i]
        
        while(left < right){
            let sum = nums[left] + nums[right]
            if( sum == target){
               res.push([nums[i], nums[left], nums[right]]) 
               left++
                right--
               while(left < right && nums[left] == nums[left-1]){
                   left ++
               }
                while(left < right && nums[right] == nums[right+1]){
                   right --
               }
            }else if(sum < target){
                left ++
            }else{
                right --
            }
        }
    }return res
}

let ans = threeSum(nums)
console.log(ans)
