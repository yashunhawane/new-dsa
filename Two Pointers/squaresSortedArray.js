let nums = [-4,-1,0,3,10]

let Square=(nums)=>{
    let nevArr = []
    let pvArr = []
    let newArr = []
    
    
    for(let i= 0 ; i<nums.length; i++){
        if(nums[i]<0){
           nevArr.push(nums[i]*nums[i]) 
        }else{
           pvArr.push(nums[i]*nums[i])
        }
    }
    nevArr.sort((a,b)=>a-b)
    
    let n = nevArr.length
    let m = pvArr.length
    let i = 0
    let j = 0
    
    while (i<n && j<m){
        if(nevArr[i]<pvArr[j]){
            newArr.push(nevArr[i])
            i++
        }else{
            newArr.push(pvArr[j])
            j++
        }
    }
    while(i<n){
        newArr.push(nevArr[i])
        i++
    }
    while(j<m){
        newArr.push(pvArr[j])
        j++
    }
    
    return newArr
}
ans = Square(nums)
console.log(ans)
