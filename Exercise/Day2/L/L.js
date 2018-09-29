/* A function that takes two inputs: a string and a character.
The function will count the number of times that character appears in the string.
The count is case insensitive. */

const countChar = (word, char) => {
    var arr = word.toLowerCase().split('');
    var count = 0;
    for ( val of arr) {
        if (val == char) {
            count +=1;
        }
    }
    return count;
};
