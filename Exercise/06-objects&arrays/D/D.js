//to get the average of scores input as an array of numbers , round down the output to its nearest integer
function getAverage (arr){
    var sum = arr.reduce(function(acc, num){
        return acc + num
    }, 0);
    return Math.floor(sum/arr.length);
}