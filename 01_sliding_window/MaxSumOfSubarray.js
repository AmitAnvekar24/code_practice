// Complexity O(n) --> Optimal solution
function MaxSumOfSubarray( k, array ) {
 
    let max = 0, sum = 0 , windowStart = 0;   
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        
        if( index >= k-1 ){
            if( sum > max ){
                max = sum;
            }
            sum -= array[windowStart];
            windowStart++;
        }
    }
    return max;
}

console.log("Optimal 1= "+ MaxSumOfSubarray(3, [2,1,5,1,3,2]));
console.log("Optimal 2= "+ MaxSumOfSubarray(2, [2,3,4,1,5]));