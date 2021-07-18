/*
    Problem Statement #
    Given a string, find the length of the longest substring in it with no more 
    than K distinct characters.
*/

// Complexity --> O( N + N ) --> O(N) --> Optimal solution
function LongSubstringKDistinct( str, K ) {    
    let charFrequency = {};
    let ans = 0, diff = 0, startWindow = 0;

    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        
        if(charFrequency.hasOwnProperty(char)){
            charFrequency[char] = charFrequency[char] + 1;
        }
        else{
            charFrequency[char] = 1;
        }

        if( Object.keys(charFrequency).length > K ){
            while( Object.keys(charFrequency).length > K ){   
                let tempChar = str.charAt(startWindow);
                if( charFrequency[tempChar] > 1 ){
                    charFrequency[tempChar] = charFrequency[tempChar] - 1;  
                }else{
                    delete charFrequency[tempChar];
                }
                startWindow++;
            }   
        }
        
        diff = index - startWindow + 1;
        if( diff > ans ){
            ans  = diff;
        }
        
    }
    return ans;
}


console.log(LongSubstringKDistinct("araaci",2));
console.log(LongSubstringKDistinct("araaci",1));
console.log(LongSubstringKDistinct("cbbebi",3));
console.log(LongSubstringKDistinct("abcac",2));