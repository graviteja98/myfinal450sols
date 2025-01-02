function maxSubarraySum (arr) {
    // code here
    let x  = 0
    let y = 0;
    let sum = arr[0]
    let min = arr[0]
    let arraySum = []
    for(let i =1 ;i < arr.length ; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] + sum > 0){
            sum = arr[i] + sum;
            y = i
        }else if(arr[i] + sum < 0 ){
            arraySum.push(sum);
            sum = arr[i];
            x = i;
            y = i+1
        }
    }
    arraySum.push(sum);
    return  Math.max(...arraySum);
}

const A = [2,3,-8,7,-1,2,3]
const B = [5, 4, 1, 7, 8];
const C = [-2,-4]
console.log(maxSubarraySum(C));