const solarr = [
    [1, -1,  3, 2,-7, -5, 11, 6],
     [-1,  1,  3, 2,-7,-5, 11, 6],
     [-1,  1,  3, 2,-7,-5, 11, 6],
     [-1,  1,  3, 2,-7,-5, 11, 6],
     [-1, -7,  3, 2,1,-5, 11, 6],
     [-1, -7, -5, 2,1,3, 11, 6],
     [-1, -7, -5, 2,1,3, 11, 6],
     [-1, -7, -5, 2,1,  3, 11, 6]
     
]
let arr =  [1, -1,  3, 2,-7, -5, 11, 6]
let x = 0;
let y = 1;
let n = arr.length
// console.log('old array: ', arr)

while(y+1 < n){

  if(arr[y]*arr[x] < 0){
       x = y;
       let checker = y+1 
while( checker <= n){
    if(arr[checker]*arr[x] < 0){
        break;
    }
    checker = checker  + 1;
}
if(checker <= n){

let temp = arr[x];
    arr[x] = arr[checker];
    arr[checker] = temp  
    // console.log('arr[cheker]', checker, arr[checker])     
}
  console.log('x:',x,' y:',y,' checker:',checker,' arr[chcker]:',arr[checker], 'arr',arr)
    
  }

    y = y +1
}
arr = arr.filter(i => i!=undefined)

// console.log('new array: ', arr)
