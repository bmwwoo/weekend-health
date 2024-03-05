// **Input:**
// Implement a function named findWords that accepts two arguments:
// 1) an input string and 2) a dictionary. This function should 
// return an array of words from the dictionary that can be formed
// by rearranging some or all of the letters in the input string. 
// Each letter in the input string may be used up to once per word.
// - **`inputString`**(type:**`string`**): 
// A string consisting of lowercase English letters. 
// The string may contain repeated letters.
// - **`dictionary`**(type:**`string[]`**):
// An array that specifies the universe of valid output words.
// You can assume all words will consist of lowercase English letters.
// SOLUTION: alphebetize each word with a sort. Then check the dictionary
// word by word while alphebetizing those to see if they can match
// a substring of the alphabetized input string
function findWords(inputString, dictionary) {
    var sortedInputString = inputString.split('').sort().join('');
    // Filter the dictionary to find words that can be formed
    var foundWords = dictionary.filter(function (word) {
        // Sort the current word for comparison
        var sortedDictionaryWord = word.split('').sort().join('');
        // Check if the alphabetized word can be formed from the alphabetized input string
        var i = 0, j = 0;
        while (i < sortedDictionaryWord.length && j < sortedInputString.length) {
            if (sortedDictionaryWord[i] === sortedInputString[j]) {
                i++; // move to the next character in the word
            }
            j++; // move to the next character in the input string
        }
        // If we've iterated through the whole word, then the lengths match and 
        // we can add to the output
        return i === sortedDictionaryWord.length;
    });
    return foundWords;
}
// Test Case 1: Empty Input String
console.log(findWords("", ["cat", "dog", "bird"]));
// Expected output: []
// Test Case 2: Empty String in Dictionary (it fits everything)
console.log(findWords("anything", [""]));
// Expected output: ['']
// Test Case 3: Empty Dictionary
console.log(findWords("anything", []));
// Expected output: []
// Test Case 4: Single Character Input String
console.log(findWords("a", ["a", "b", "aa", "ab"]));
// Expected output: ["a"]
// Test Case 5: Repeated Characters in Input String
console.log(findWords("lle", ["el", "lee", "ell", "eel"]));
// Expected output: ["el", "ell", "eel"]
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
