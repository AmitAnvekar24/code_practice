/*
    Problem Statement #
    Given an array of positive numbers and a positive number āSā, 
    find the length of the smallest contiguous subarray whose sum is greater than or equal to āSā.
    Return 0, if no such subarray exists.
*/

// Complexity O( N + N ) --> O (N) --> Optimal solution
function SmallestSubarraySum( S, array) {
    
    let sum = 0, ans = Number.MAX_SAFE_INTEGER, diff = Number.MAX_SAFE_INTEGER, windowStart = 0;

    for (let index = 0; index < array.length; index++) {
       sum += array[index];

       while( sum >= S ){
           diff = index - windowStart + 1;
           sum -= array[windowStart];
           windowStart++;
       }
       if( ans > diff ){
           ans = diff;
       }
    }
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}

console.log( SmallestSubarraySum ( 100000, [2, 2, 5, 7, 3, 2]));
console.log( SmallestSubarraySum ( 7, [2, 1, 5, 2, 3, 2]));
console.log( SmallestSubarraySum ( 8,  [3, 4, 1, 1, 6]));
