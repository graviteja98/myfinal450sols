const findDuplicate = (nums)=> {
    let uniQnums =  Array.from(new Set(nums));
    let x  =  Object.fromEntries(uniQnums.map(key => [key, 0]));
    nums.forEach(key => {
        if (x[key]) {
          x[key] += 1; // Increase count if key exists
        } else {
          x[key] = 1; // Initialize count if key does not exist
        }
      });
    console.log('x',x)
    return Object.entries(x).reduce((maxKey, [key, value]) => {
        return value > x[maxKey] ? key : maxKey;
      }, Object.keys(x)[0]);
};

let dupArr = [3,1,3,4,2];

console.log('max',findDuplicate(dupArr));
