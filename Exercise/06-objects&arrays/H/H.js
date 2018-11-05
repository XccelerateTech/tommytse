function move (arr) {
    var eachChar = arr.split(''); //'dog' -> ['d','o','g']
    var output='';
        var eachChar = eachChar.map( function(element)
            {
                if (element.charCodeAt(0) <= 112) {
                    return element = String.fromCharCode(element.charCodeAt(0)+10);
                } else {
                    return element = String.fromCharCode(element.charCodeAt(0)-16);
                }
            });
        for (val in eachChar) {
            output += eachChar[val];
        }
        return output;
}

console.log(move('az')); // return kj