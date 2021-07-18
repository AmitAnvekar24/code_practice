/*
    Problem Statement #
    Given a string, find the length of the longest substring which has no repeating characters.
*/

// Complexity --> O( N + N ) --> O(N) --> Optimal solution
function NoRepeatSubstring( str ) {
    
    let ans = 0, startWindow = 0, diff = 0;
    
    let existingChars = new Set();

    for (let index = 0; index < str.length; index++) {
        
        let char = str.charAt(index);

        if( !existingChars.has(char) ){
            existingChars.add(char);
        }
        else{
            while(existingChars.has(char)){
                existingChars.delete((str.charAt(startWindow)));
                startWindow++;
            }
            existingChars.add(char);
        }

        diff = index - startWindow + 1;

        if( diff > ans ){
            ans = diff;
        }
    }
    return ans;
}

console.log(NoRepeatSubstring('aabccbb'));
console.log(NoRepeatSubstring('GEEKSFORGEEKS'));
console.log(NoRepeatSubstring('ABDEFGABEF'));
console.log(NoRepeatSubstring('abbbb'));
console.log(NoRepeatSubstring('abccde'));