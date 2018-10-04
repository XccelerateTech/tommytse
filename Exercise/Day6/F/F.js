var Decode = {
    '1':'a',
    '2':'b',
    '3':'c',
    '4':'d',
    '5':'e',
    '6':'f',
    '7':'g',
    '8':'h',
    '9':'i',
    '0':'j'
};
//'213'-'abc'
function transform (numString) {
    var output='';
    var numArr = numString.split(''); //['2','1','3']
    var numArrSorted = numArr.sort(); //['1','2','3']
    for (let i=0;i<numArrSorted.length;i++) {
        output += Decode[numArrSorted[i]];
    }
    return output;
}
console.log(transform('213')); // 'abc'