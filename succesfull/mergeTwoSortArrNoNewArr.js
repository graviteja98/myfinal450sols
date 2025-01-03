function mergeArrays(a, b) {
    // code here
    let x  = 0;
    let y = 0;
    let n = Math.min(a.length, b.length)
    let i = 0;

  while(i < n){
    while(a[x] < b[y]){
        x += 1;
    }
    if(a[x] >= b[y]){
        a = [
            ...a.slice(0, x),
            b[y],
            ...a.slice(x)
          ]
          y += 1; 
    }
    i++;
  }
  console.log('new array', a)

}
const a = [1, 5, 9, 10, 15, 20];
const b = [2, 3, 8, 13];

mergeArrays(a,b);