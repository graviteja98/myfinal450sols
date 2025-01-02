function minJumps(arr) {
    // code here
    let jumpCounter = 0;
    
    if(arr.includes(0) && arr[arr.length-1] != 0) 
    return -1;
    const n = arr.length
    let i = 0;
    let j = i;
    while(i < n){
         
         j = arr[i]
         i = i + Math.max(...arr.slice(i,i+j))
         console.log('arr[i]',arr[i],'i',i,'j',j,'slice',arr.slice(i,i+j))
         if( i < n){
             jumpCounter = jumpCounter + 1;
         }
         if( i > n){
            jumpCounter = jumpCounter + 1;
            break;
         }
         
    }
return jumpCounter;
}

// const jumpArray = [1 ,3 ,5 ,8 ,9 ,2 ,6 ,7 ,6 ,8 ,9];
// const jumpArray = [1, 4, 3, 2, 6, 7];
const jumpArray = [0, 10, 20];


console.log('number of jumps is',minJumps(jumpArray))