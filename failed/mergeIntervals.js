
let merge = function(intervals) {
    let n = intervals.length;
    let i =0;
    let newArr = [];
    if(n==1) 
        return intervals
    while(i < n-1){
        //picking one array 
        let min1 = intervals[i][0]
        let max1 = intervals[i][1]
        let min2 = intervals[i+1][0]
        let max2 = intervals[i+1][1]
        if(max1 < min2){
            console.log("here's a gap", i)
            newArr.push(intervals[i])
            newArr.push(intervals[i+1])
            i + 2;
        }
       else if(max1 >= min2){
        newArr.push([min1,max2])
        i ++ ;
        }
        else if(min1 >= min2){
            if(max2 > max1){
                newArr.push([min2,max2])

            }else if(max2 < max1){
                newArr.push([min2,max2])
            }
            i ++ ;
            }
        i++;
    }
    return newArr;
}

const gaps = [[1,3],[2,6],[8,10],[15,18]]
const gaps2 = [[1,4],[4,5]]

console.log('merged array',merge(gaps1))

