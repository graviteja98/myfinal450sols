const rotate =(arr) => {
    // code here
    const max = arr.length
    let newArray = []
    newArray.push(arr[max-1])
    for(let i=0;i<max-1;i++){
    newArray.push(arr[i])
    }
    return newArray;
}

const A = [1,2,3,4,5]

rotate(A);

console.log(rotate(A))