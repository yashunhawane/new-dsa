let sum = 12
let arr = [5, 1, 3, 4, 7]

let countTriplets = (arr, sum) => {
    arr.sort((a, b) => a - b)
    let n = arr.length

    let counter = 0

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1
        let right = n - 1
        while (left < right) {
            let total = arr[i] + arr[left] + arr[right]

            if (total >= sum) {
                right--
            } else {
                counter += (right - left)
                left++
            }



        }
    }
    return counter;



};


let ans = countTriplets(arr, sum)

console.log(ans)