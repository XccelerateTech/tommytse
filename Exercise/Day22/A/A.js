var myArray = [4, 8, 2, 7, 5];
function processArray(arr, callback) {
    return arr.map(callback);
};

console.log(processArray(myArray, function(ele) {
    return ele * 2;
}));

var myArray = [7, 8, 9, 1, 2];
console.log(processArray(myArray, function(ele) {
    return ele + 5;
}));

