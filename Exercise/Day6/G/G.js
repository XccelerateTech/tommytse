//return the index of the middle number
function middle (arr) {
    var output = arr.filter(element=>element!==Math.max(...arr)&&element!==Math.min(...arr));
    return arr.findIndex(element=>element==output);
}

console.log(middle([2, 3, 1])); //0 -> 2 at index 0 lies between 3 and 1
console.log(middle([88, 7, 55])); // 2 -> 55 lies between 7 and 88