/*
    Problem Statement #
    Given an array of characters where each character represents a fruit tree, 
    you are given two baskets and your goal is to put maximum number of fruits in each basket. 
    The only restriction is that each basket can have only one type of fruit.

    You can start with any tree, but once you have started you can’t skip a tree.
    You will pick one fruit from each tree until you cannot,
    i.e., you will stop when you have to pick from a third fruit type.
*/

// Complexity --> O( N + N ) --> O(N) --> Optimal solution
function FruitsIntoBaskets( array ) {
    
    let ans = 0, startWindow = 0, diff = 0;
    let fruitFrequecy = {};
    for (let index = 0; index < array.length; index++) {

        if( fruitFrequecy.hasOwnProperty(array[index])){
            fruitFrequecy[array[index]] = fruitFrequecy[array[index]] + 1;
        }else{
            fruitFrequecy[array[index]] = 1;
        }

        if( Object.keys(fruitFrequecy).length > 2 ){
            while(Object.keys(fruitFrequecy).length > 2){
                if(fruitFrequecy[array[startWindow]] > 1){
                    fruitFrequecy[array[startWindow]] = fruitFrequecy[array[startWindow]] - 1;
                }else{
                    delete fruitFrequecy[array[startWindow]];
                }
                startWindow++;
            }
        }
        
        diff = index - startWindow + 1;
        
        if(diff > ans){
            ans = diff;
        }
    }
    return ans;
}

console.log(FruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']));
console.log(FruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));