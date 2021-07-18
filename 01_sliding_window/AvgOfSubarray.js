
// Complexity O(k*n) --> Suboptimal solution
function AvgOfSubArray( k, arr ){
    let result = [];
    for (let index = 0; index < arr.length - k + 1 ; index++) {
        let sum = 0;
        for (let i = index; i < index + k; i++) {
            sum += arr[i];
        }
        result.push(sum / k);
    }
    return result;
};

// Complexity O(n) --> Optimal solution
function OptAvgOfSubArray( k, arr ){
    let result = [];
    let sum = 0, j = 0;
    for (let index = 0; index < arr.length ; index++) {
        if( index < k ){
            sum += arr[ index ]; 
        }
        else{
            result.push(sum/k);
            sum -= arr[j];
            sum += arr[index];
            j++; 
        }
    }
    result.push(sum/k);
    return result;
};

console.log( "Suboptimal = " + AvgOfSubArray(5, [1,3,2,6,-1,4,1,8,2]) );
console.log( "Optimal = " + OptAvgOfSubArray(5, [1,3,2,6,-1,4,1,8,2]) );