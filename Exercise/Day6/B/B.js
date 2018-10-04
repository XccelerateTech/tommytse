//to receive number and return an array with the digits in reverse order
//method1-without using the built-in reverse() method
function reverse (num) {
    var output = {};
    var numInStringSorted = String(num).split('').sort(function(first, second) {
        return second > first;
    }); //12345->'12345'->['1','2','3','4','5']->['5','4','3','2','1']
    for (let i = 0; i < numInStringSorted.length;i++) {
        output[i] = Number(numInStringSorted[i]);
    }
    return output;
}

